(async () => {
    try {
      const FingerprintJS = await import('https://fpjscdn.net/v3/czMivB3yswmbxfRIaood');
      const fp = await FingerprintJS.load({
        region: "ap"
      });
  
      const result = await fp.get({ extendedResult: true });
      console.log(JSON.stringify(result, null, 2));


      const geodata = await fetch(`http://ip-api.com/json/${result.ip}`);
      const jgeodata = await geodata.json();
      console.log(jgeodata);
      
  
      // Function to update the element with a fallback value
      const updateElement = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
          element.innerText = value || 'Not Available'; // Default to 'Not Available' if the value is missing
        }
      };
  
      // Update elements with available data
      updateElement("vis-found",result.visitorFound) //shown
      updateElement("vis-id",result.visitorId)  //shown
      updateElement("ip", result.ip); //shown
      updateElement("country", jgeodata.country); //not shown
      updateElement("region",jgeodata.regionName);
      updateElement("city", jgeodata.city +" "+ "(Unaccurate at the moment)");  // not shown
      updateElement("lat",jgeodata.lat);
      updateElement("lon",jgeodata.lon);
      updateElement("org",jgeodata.org);
      updateElement("isp", jgeodata.isp);
      updateElement("cell",jgeodata.mobile);

      updateElement("browser", result.browserName); //shown
      updateElement("incog", result.incognito ? 'Yes' : 'No'); //shown
      updateElement("prox", jgeodata.proxy);
      updateElement("brow-ver", result.browserVersion); //shown
      updateElement("os", result.os); //shown
      updateElement("os-ver", result.osVersion);
      updateElement("firstseen",result.firstSeenAt.global); //shown
      updateElement("lastseen",result.lastSeenAt.global); //shown
    //   updateElement("con-score",result.confidence.score); //shown
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  })();
  