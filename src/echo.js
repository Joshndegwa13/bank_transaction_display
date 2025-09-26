import Echo from "laravel-echo";

import Pusher from "pusher-js";
 
window.Pusher = Pusher;
 
const echo = new Echo({

    broadcaster: "pusher",
    key: import.meta.env.VITE_REVERB_APP_KEY,  // ✅ frontend .env
    wsHost: window.location.hostname,          // or "127.0.0.1" for local dev
    wsPort: 7001,                              // Reverb port from backend
    forceTLS: false,                           // Reverb is http, not https (unless you set up SSL)
    disableStats: true,
    enabledTransports: ["ws"],                 // Only use WebSockets
    cluster: "",                               // ✅ empty to stop "cluster required" error

});
 
export default echo;

