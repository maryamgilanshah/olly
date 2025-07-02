// 1. List all your filenames (exactly as in /media/)
const mediaFiles = [
  '1.png',
  '2.png',
  '3.jpeg',
  '4.png',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png',
  '24.png',
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  '33.png',
  '34.png',
  '35.png',
  '36.png',
  '37.png',
  '38.png',
  '39.png',
  '40.png',
  '41.png',
  '42.png',
  '43.png',
  '44.png',
  '45.png',
  '46.png',
  '47.png',
  '48.png',
  '49.png',
  '50.png',
  '51.png',
  '52.png',
  '53.png',
  '54.png',
  '55.png',
  '56.png',
  '57.png',
  '58.png',
  '59.png',
  '60.png',
  '61.png',
  '62.png',
  '63.png',
  '64.png',
  '65.png',
  '66.png',
  '67.png',
  '68.png',
  '69.png',
  '70.png',
  '71.png',
  '72.png'
];

// 2. Pick one at random
const randomFile = mediaFiles[
  Math.floor(Math.random() * mediaFiles.length)
];

// 3. Figure out its type (image vs video)
const isVideo = randomFile.match(/\.(mp4|webm|ogg)$/i);

// 4. Build the appropriate element
const viewer = document.getElementById('viewer');

if (isVideo) {
  const vid = document.createElement('video');
  vid.src = `media/${randomFile}`;
  vid.controls = true;      // show play/pause controls
  vid.autoplay = true;      // start playing right away
  vid.loop = true;          // replay when it ends
  viewer.appendChild(vid);
} else {
  const img = document.createElement('img');
  img.src = `media/${randomFile}`;
  img.alt = 'Random media';
  viewer.appendChild(img);
}
