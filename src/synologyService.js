// src/synologyService.js
const SYNOLOGY_API_URL = 'http://<YOUR_SYNOLOGY_IP>:5000/webapi';
const ACCOUNT = '<YOUR_ACCOUNT>';
const PASSWORD = '<YOUR_PASSWORD>';

async function getSessionID() {
  const response = await fetch(`${SYNOLOGY_API_URL}/auth.cgi?api=SYNO.API.Auth&method=login&version=6&account=${ACCOUNT}&passwd=${PASSWORD}&session=VideoStation&format=sid`);
  const data = await response.json();
  if (data.success) {
    return data.data.sid;
  } else {
    throw new Error('Failed to get session ID');
  }
}

export async function fetchMovies() {
  const sid = await getSessionID();
  const response = await fetch(`${SYNOLOGY_API_URL}/entry.cgi?api=SYNO.VideoStation.Video&method=list&version=1&_sid=${sid}`);
  const data = await response.json();
  if (data.success) {
    return data.data.videos; // Adjust based on actual response
  } else {
    throw new Error('Failed to fetch movies');
  }
}

export async function playMovie(movieId) {
  const sid = await getSessionID();
  const response = await fetch(`${SYNOLOGY_API_URL}/entry.cgi?api=SYNO.VideoStation.Stream&method=start&id=${movieId}&version=1&_sid=${sid}`);
  const data = await response.json();
  if (data.success) {
    return data.data; // Adjust based on actual response
  } else {
    throw new Error('Failed to play movie');
  }
}
