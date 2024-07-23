const arr =[
    {
        username : "John Doe",
        dp : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1532308787675-c690de917ec9?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        username : "Hinata",
        dp : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        username : "Naruto",
        dp : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1522416384926-48116d3aef79?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        username : "Hermione",
        dp : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1689751740042-3031b760b34f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    },
    {
        username : "Goku",
        dp : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1689751740042-3031b760b34f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    },
    {
        username : "Uzumaki",
        dp : "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1689751740042-3031b760b34f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    },
    {
        username : "Itachi",
        dp : "https://images.unsplash.com/photo-1541130292430-a832637ddc0d?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1700317094033-25fd1e4df29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    },
    {
        username : "Sasuke",
        dp : "https://images.unsplash.com/flagged/photo-1555475693-6e207bee0737?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1700317094033-25fd1e4df29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    },
    {
        username : "Robin",
        dp : "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        username : "Rein",
        dp : "https://images.unsplash.com/photo-1532308787675-c690de917ec9?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]



const arr2 = [
    {
        username : "Hinata",
        dp : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image : "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likesCount : "256 Likes",
        isLiked : false,
    },
    {
        username : "John Doe",
        dp : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image : "https://images.unsplash.com/photo-1505731266723-9adc6eb6ea96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likesCount : "100 Likes",
        isLiked : false,
    },
    {
        username : "Uzumaki",
        dp : "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image : "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likesCount : "126 Likes",
        isLiked : false,
    },
    {
        username : "Rein",
        dp : "https://images.unsplash.com/photo-1532308787675-c690de917ec9?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image : "https://images.unsplash.com/photo-1709981960370-cef3dd1496b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likesCount : "77 Likes",
        isLiked : false,
    },
    {
        username : "Kakashi",
        dp : "https://images.unsplash.com/flagged/photo-1555475693-6e207bee0737?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likesCount : "109 Likes",
        isLiked : false,
    }
]


var clutter ="";

arr.forEach(function(elem, idx){
    clutter += `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})

var storiyan = document.querySelector('.storiyan');
storiyan.innerHTML = clutter;



var full = document.querySelector('.full');
var fullUserName = document.querySelector('.userDetails h5');
var fullDP = document.querySelector('.userDetails img');
var growth = document.querySelector('#growth');


storiyan.addEventListener('click', (dets)=>{
    console.log(dets);
    var userStory = arr[dets.target.id].story;
    var userName = arr[dets.target.id].username;
    var userDP = arr[dets.target.id].dp;

    grow = 0;

    full.style.display ="block";
    full.style.backgroundImage = `url(${userStory})`;
    fullUserName.innerHTML = userName;
    fullDP.setAttribute("src", userDP);


    var storyInterval = setInterval(() => {
        grow++;
        growth.style.width = grow+"%";
    }, 25);


    setTimeout(() => {
        full.style.display ="none";
        clearInterval(storyInterval);
    },2500);
})



var clutter2 = "";

arr2.forEach(function(elem, idx){
    clutter2 += `<div class="nav">
                        <img src="${elem.dp}" alt="">
                        <h5>${elem.username}</h5>
                    </div>

                    <div class="imageCont">
                        <img id="${idx}" src="${elem.image}" alt="">
                    </div>

                    <div class="options">
                        <h5 id="like"><i class="ri-heart-3-line"></i></h5>
                        <h5 id="comment"><i class="ri-chat-3-line"></i></h5>
                        <h5 id="share"><i class="ri-share-forward-line"></i></h5>
                    </div>

                    <h6>${elem.likesCount}</h6>`
})


var post = document.querySelector('.post');
post.innerHTML = clutter2;