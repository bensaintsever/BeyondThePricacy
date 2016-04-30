function save()
{
    var channels = "Profil 1";
    var keywords = "Profil 1";

    chrome.storage.local.set({'channels': channels});
   // chrome.storage.local.set({'keywords': keywords});
}
function save2()
{
    var channels = "Profil 2";
    var keywords = "Profil 2";

    chrome.storage.local.set({'channels': channels});
   // chrome.storage.local.set({'keywords': keywords});
}
function load() {
    var channels = "";
    var keywords = "";
    chrome.storage.local.get('channels', function (result) {
        channels = result.channels;
      //  alert(result.channels);
		$("#profilName").text(channels);
       // $("#channels").val(channels);
    });

   /* chrome.storage.local.get('keywords', function (result) {
        keywords = result.keywords;
        alert(result.keywords);
        $("#keywords").val(keywords);
    });*/

} 

$(document).ready(function() {
	load();

    $("#autoComplet").click(function() {
        $("#resClick").text("Profil 1 save");
		save();
    });
	$("#echanges").click(function() {
        $("#resClick").text("Profil 2 save");
		save2();
    });
	$("#gestProfil").click(function() {
        $("#resClick").text("Load");
		load();
    });
	/*$("#changeProfil").click(function() {
        $("#resClick").text("changeProfil");
    });*/
	
	
	
});