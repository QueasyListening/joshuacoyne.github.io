const stem = document.getElementById('stem');
const pot = document.getElementsByClassName('pot')[0];
const droplets = Array.from(document.getElementsByClassName('droplet'));
const leaves = Array.from(document.getElementsByClassName('leaf'));
pot.addEventListener("click", () => {
    stem.style.height = "228px";
    stem.style.top = '52px';
    window.setTimeout(displayFlower, 1800);
    window.setTimeout(displayLeaves, 1500);
});

const displayFlower = () => {
droplets.forEach(droplet => {
    droplet.style.animationPlayState = 'running';
});
};

const displayLeaves = () => {
    leaves.forEach(leaf => {
        leaf.style.transform = 'scale(1)';
    });
    leaves[0].style.left = '10px';
    leaves[1].style.left = '60px';  
};