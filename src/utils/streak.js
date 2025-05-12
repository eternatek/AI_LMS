export function getUpdatedStreak(){
    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem('lastLoginDate');
    const storedSteak=parseInt(localStorage.getItem('streakCount',10)||0);

    let updatedStreak=1;

    if(lastLogin==today){
        updatedStreak = storedSteak;
    }
    else{
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate()-1);

        if(new Date(lastLogin).toDateString()===yesterday.toDateString()){
            updatedStreak=storedSteak+1;
        }

        localStorage.setItem('streakCount',updatedStreak);
        localStorage.setItem('lastLoginDate',today);
    }
    return updatedStreak;
}