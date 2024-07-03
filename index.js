document.addEventListener('DOMContentLoaded', ()=> {
    const currentTime = document.querySelector("[data-testid='currentTime']");
    const currentDay = document.querySelector('[data-testid="currentDate"]');

    if(currentTime && currentDay){
        const updatetime = () => {
            const now = new Date();
            currentTime.innerHTML = now.toUTCString().split(' ')[4];
            currentDay.innerHTML = now.toDateString();
        }
    
        updatetime();
    
        setInterval(() => {
            updatetime();
        }, 1000);
    }else{
        console.log('Element not found');
    }
})