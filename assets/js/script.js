function copyIP() {
  var ip = document.getElementById("ip-address");
  var ipText = ip.innerText;
  navigator.clipboard.writeText(ipText)
    .then(function() {
      alert("IP address " + ipText + " copied to clipboard");
    })
    .catch(function(err) {
      console.error("Failed to copy IP address: ", err);
    });
}
