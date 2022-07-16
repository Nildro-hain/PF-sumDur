
const playlist = [
    {title: 'Learn to code', duration: '5:34'},
    {title: 'Learn to code', duration: '2:33'},
    {title: 'Learn to skate', duration: '15:36'},
    {title: 'Learn to code', duration: '8:32'},
    {title: 'Learn to skate', duration: '10:17'},
    {title: 'Learn to skate', duration: '15:36'},
    {title: 'Learn to code', duration: '13:55'},
];

var codeVideo = playlist.filter(function(ele) {
    return ele.title == 'Learn to code'
});
console.log(codeVideo);
const seconds = codeVideo.map(function(time) {
    return time.duration
});
console.log(seconds);
var secOnly = []
for(let i in seconds) {
    var a = seconds[i].split(':');
    var toAdd = (+a[0]) * 60 + (+a[1]);
    secOnly.push(toAdd);
}
console.log(secOnly);
const finalRes = secOnly.reduce(function(acc, cur) {
    return acc + cur
}, 0);
console.log('Total duration is ' + finalRes + ' seconds');

  






