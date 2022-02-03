console.log("creating a cv scanner");
//Data is an array of objects ehich contain information about the candidates.
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Mohan Sharma',
        age: 20,
        city: 'Katni',
        language: 'C++',
        framework: 'ReactJs',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        name: 'Raghav jaiswal',
        age: 19,
        city: 'patna',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Shivam das',
        age: 22,
        city: 'chennai',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },  
    {
        name: 'rajni kumari',
        age: 22,
        city: 'Kolkata',
        language: 'python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'juli kumari',
        age: 22,
        city: 'Kolkata',
        language: 'C',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    }
]

//cv iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length?
            {value: profiles[nextIndex++],done:false} :
            {done:true};
        }
    };
}
const candidates = cvIterator(data);
nextCV(); 
// Button listener for next button.
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!= undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} year old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily Works on ${currentCandidate.language}</li>
    <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
  </ul>`
    }else{
        alert("end of application");
        window.location.reload();
    }
}