Opensea refresh metadata for entire NFT collection on polygon using firefox

Tutorial link: https://www.youtube.com/watch?v=K-nQTvGVGTA

Overview: This script is a custom browser extension on firefox. It will be executed when the url matches the criteria.


Required: Mozilla firefox
(Have not tried on chrome but its the same concept, just different workaround)

        Step 1. Download Opensea-refresh-metadata-script.zip file


        Step 2. Browse to any items in your collection. 
                Copy the URL. example:https://opensea.io/assets/matic/0x1234567890/1


        Step 3. Open manifest json file with notepad
                Replace [link] with the URL excluding any text after the last slash '/'
                Example: "matches": ["https://opensea.io/assets/matic/0x1234567890/*"]


        Step 4. Open page-eater.js file with notepad
                Replace [link] with url excluding any text after the last slash '/'
                Example: window.location.href = "https://opensea.io/assets/matic/0x1234567890/" + (parseInt(window.location.href.split("/").pop()) + 1);


        Step 5: Type about:debugging in firefox url bar
                Click this firefox on the left - > Temporary Extensions -> Load temporary add on -> open page-eater.js


and you're good to go :)









        


