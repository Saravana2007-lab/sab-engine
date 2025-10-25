const socket = io('http://localhost:3000');

function handleApp(appName) {
  const confirmed = confirm(`Do you want to launch "${appName}"?`);
  if (!confirmed) return;

  switch (appName) {
    case 'emergency':
      socket.emit('emergency');
      alert('🚨 Emergency triggered!');
      break;
    case 'gm':
      window.open('https://meet.google.com/new', '_blank');
      break;
    case 'discord':
      window.open('https://discord.com/app', '_blank');
      break;
    case 'browser':
      window.open('https://www.google.com', '_blank');
      break;
    case 'youtube':
      window.open('https://www.youtube.com', '_blank');
      break;
    case 'valorant':
      alert('🎮 Valorant launch placeholder');
      break;
    case 'tlancher':
      alert('🧩 TLauncher launch placeholder');
      break;
    default:
      alert(`App "${appName}" clicked`);
  }
}

socket.on('alert', () => {
  alert('🚨 Emergency Alert Received!');
  const audio = new Audio('siren.mp3');
  audio.volume = 0.5;
  audio.play();

  // Replace with your actual app link
  window.open('https://your-app-link.com', '_blank');
});

// Line Chart Setup
const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Alice',
        data: [12, 19, 14, 20, 16, 22, 18],
        borderColor: '#00ffff',
        backgroundColor: 'rgba(0,255,255,0.1)',
        tension: 0.4,
        fill: false,
        pointBackgroundColor: '#00ffff'
      },
      {
        label: 'Bob',
        data: [10, 15, 13, 17, 14, 19, 16],
        borderColor: '#ff66cc',
        backgroundColor: 'rgba(255,102,204,0.1)',
        tension: 0.4,
        fill: false,
        pointBackgroundColor: '#ff66cc'
      },
      {
        label: 'Charlie',
        data: [8, 12, 10, 14, 11, 15, 13],
        borderColor: '#ffcc00',
        backgroundColor: 'rgba(255,204,0,0.1)',
        tension: 0.4,
        fill: false,
        pointBackgroundColor: '#ffcc00'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: 'white' },
        grid: { color: '#444' }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: '#444' }
      }
    },
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    }
  }
});