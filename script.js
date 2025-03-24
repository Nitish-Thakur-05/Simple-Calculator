const themeContainer = document.querySelector('.theme-container')
const body = document.querySelector('body')
const screen = document.querySelector('.white-space p')
const themeDot1 = document.querySelector('.theme-dot-1')
const themeDot2 = document.querySelector('.theme-dot-2')
const themeDot3 = document.querySelector('.theme-dot-3')
const keysContainer = document.querySelector('.keys-container')


if(!localStorage.theme) {
    localStorage.theme = 'white'
}

function applyTheme(theme) {
    body.classList.remove('blue', 'violet')

    themeDot1.classList.add('hide')
    themeDot2.classList.add('hide')
    themeDot3.classList.add('hide')

    if(theme === 'white') {
        themeDot1.classList.remove('hide')
    }
    else if (theme === 'blue') {
        themeDot2.classList.remove('hide')
        body.classList.add('blue')
    }
    else if (theme === 'violet') {
        themeDot3.classList.remove('hide')
        body.classList.add('violet')
    }
    localStorage.setItem('theme', theme)
}

applyTheme(localStorage.theme)


themeContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('theme1')) {
        applyTheme('white');
    }
    else if (e.target.classList.contains('theme2')) {
        applyTheme('blue');    
    }
    else if (e.target.classList.contains('theme3')) {
        applyTheme('violet');
    }
})




keysContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('button') && e.target.classList.contains('number')) {
        let value = e.target.textContent
        screen.textContent += value
    }
    if (e.target.classList.contains('reset') && e.target.classList.contains('button')) {
        screen.textContent = ''
    }
    if (e.target.classList.contains('equal') && e.target.classList.contains('button')) {
        screen.textContent = Number(eval(screen.textContent)).toLocaleString()
    }
    if (e.target.classList.contains('del') && e.target.classList.contains('button')) {
            screen.textContent = screen.textContent.slice(0, -1)
    }

})


function add(...x) {
    return x.reduce((acc, curr) => {
        return acc+curr
    },0)
}

