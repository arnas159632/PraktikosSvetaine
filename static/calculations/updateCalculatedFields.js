// Function to update fill47
function updateFill47() {
    const val1 = parseFloat(document.getElementById('val1')?.value) || 0;
    const val2 = parseFloat(document.getElementById('val2')?.value) || 0;
    const fill66 = parseFloat(document.getElementById('fill66')?.value) || 0;
    const fill69 = parseFloat(document.getElementById('fill69')?.value) || 0;
    const fill72 = parseFloat(document.getElementById('fill72')?.value) || 0;
    const val3 = parseFloat(document.getElementById('val3')?.value) || 0;
    const val4 = parseFloat(document.getElementById('val4')?.value) || 0;
    const val5 = parseFloat(document.getElementById('val5')?.value) || 0;
    
    const fill47 = val1 + val2 + fill66 + fill69 + fill72 + val3 + val4 + val5;
    
    const fill47Element = document.getElementById('fill47');
    if (fill47Element) {
      fill47Element.value = fill47; // Update hidden field
    } else {
      console.warn('Element with ID "fill47" not found.');
    }
  }

  // Function to update fill49
function updateFill49() {
    // Get the values from the fields and ensure they are numbers
    const val6 = parseFloat(document.getElementById('val6')?.value) || 0;
    const val7 = parseFloat(document.getElementById('val7')?.value) || 0;
    const val8 = parseFloat(document.getElementById('val8')?.value) || 0;
    const val9 = parseFloat(document.getElementById('val9')?.value) || 0;
    const val10 = parseFloat(document.getElementById('val10')?.value) || 0;
    const val11 = parseFloat(document.getElementById('val11')?.value) || 0;
    const val12 = parseFloat(document.getElementById('val12')?.value) || 0;
    const val13 = parseFloat(document.getElementById('val13')?.value) || 0;
    
    // Calculate the sum of the values
    const fill49 = val6 + val7 + val8 + val9 + val10 + val11 + val12 + val13;
    
    // Update the fill49 field with the calculated value
    const fill49Element = document.getElementById('fill49');
    if (fill49Element) {
      fill49Element.value = fill49; // Update hidden field
    } else {
      console.warn('Element with ID "fill49" not found.');
    }
  }

  function updateFill51() {
    // Get the values from the fields and ensure they are numbers
    const val14 = parseFloat(document.getElementById('val14')?.value) || 0;
    const val15 = parseFloat(document.getElementById('val15')?.value) || 0;
    
    // Calculate the sum of the values
    const fill51 = val14 + val15;
    
    // Update the fill51 field with the calculated value
    const fill51Element = document.getElementById('fill51');
    if (fill51Element) {
      fill51Element.value = fill51; // Update hidden field
    } else {
      console.warn('Element with ID "fill51" not found.');
    }
  }
  
  
  function updateFill37() {
    // List of all fields to be summed
    const fieldIds = [
        'fill11', 'fill17', 'fill23', 'fill29', 'fill35',
        'fills5', 'fills11', 'fills17', 'fills23', 'fills29',
        'fills35','fills41', 'fills47', 'fills53', 'fills59', 'fills65',
        'fills71', 'fills77', 'fills83', 'fills89', 'fills95',
        'fills101', 'fills107', 'fills113', 'fills119', 'fills125',
        'fills131', 'fills137', 'fills143', 'fills149', 'fills155'
    ];

    // Calculate the sum of values from the specified fields
    const sum = fieldIds.reduce((total, fieldId) => {
        const value = parseFloat(document.getElementById(fieldId)?.value) || 0;
        return total + value;
    }, 0);

    // Update the value of fill37
    document.getElementById('fill37').value = sum;
};


  // Function to update fill38
  function updateFill38() {
    // List of all fields to be summed
    const fieldIds = [
        'fill12', 'fill18', 'fill24', 'fill30', 'fill36',
        'fills6', 'fills12', 'fills18', 'fills24', 'fills30',
        'fills36','fills42', 'fills48', 'fills54', 'fills60', 'fills66',
        'fills72', 'fills78', 'fills84', 'fills90', 'fills96',
        'fills102', 'fills108', 'fills114', 'fills120', 'fills126',
        'fills132', 'fills138', 'fills144', 'fills150', 'fills156'
    ];

    // Calculate the sum of values from the specified fields
    const sum = fieldIds.reduce((total, fieldId) => {
        const value = parseFloat(document.getElementById(fieldId)?.value) || 0;
        return total + value;
    }, 0);

    // Update the value of fill38
    document.getElementById('fill38').value = sum;
}

  
  // Function to update fill52
  function updateFill52() {
    const fill42 = parseFloat(document.getElementById('fill42')?.value) || 0;
    const fill44 = parseFloat(document.getElementById('fill44')?.value) || 0;
    const fill46 = parseFloat(document.getElementById('fill46')?.value) || 0;
    const fill48 = parseFloat(document.getElementById('fill48')?.value) || 0;
    const fill50 = parseFloat(document.getElementById('fill50')?.value) || 0;
    const fill52 = fill42 + fill44 + fill46 + fill48 + fill50;
    document.getElementById('fill52').value = fill52;
  }

  // Function to update fill53
function updateFill53() {
    // Get the values from the fields and ensure they are numbers
    const fill43 = parseFloat(document.getElementById('fill43')?.value) || 0;
    const fill45 = parseFloat(document.getElementById('fill45')?.value) || 0;
    const fill47 = parseFloat(document.getElementById('fill47')?.value) || 0;
    const fill49 = parseFloat(document.getElementById('fill49')?.value) || 0;
    const fill51 = parseFloat(document.getElementById('fill51')?.value) || 0;
  
    // Calculate the sum of the values
    const fill53 = fill43 + fill45 + fill47 + fill49 + fill51;
  
    // Update the fill53 field with the calculated value
    const fill53Element = document.getElementById('fill53');
    if (fill53Element) {
      fill53Element.value = fill53; // Update the field
    } else {
      console.warn('Element with ID "fill53" not found.');
    }
  }

  function updateFill133() {
   
    const fill154 = parseFloat(document.getElementById('fill154')?.value) || 0;
    const fill156 = parseFloat(document.getElementById('fill156')?.value) || 0;
    const fill163 = parseFloat(document.getElementById('fill163')?.value) || 0;
    const fill170 = parseFloat(document.getElementById('fill170')?.value) || 0;
    const fill177 = parseFloat(document.getElementById('fill177')?.value) || 0;

    const fill133 = fill154 + fill156 + fill163 + fill170 + fill177;

    const fill133Element = document.getElementById('fill133');
    if (fill133Element) {
      fill133Element.value = fill133; // Update the field with the calculated sum
    } else {
      console.warn('Element with ID "fill133" not found.');
    }
}

function updateFill137() {
   
    const fill181 = parseFloat(document.getElementById('fill181')?.value) || 0;
    const fill185 = parseFloat(document.getElementById('fill185')?.value) || 0;
    const fill222 = parseFloat(document.getElementById('fill222')?.value) || 0;
    const fill226 = parseFloat(document.getElementById('fill226')?.value) || 0;

    const fill137 = fill181 + fill185 + fill222 + fill226;

    const fill137Element = document.getElementById('fill137');
    if (fill137Element) {
      fill137Element.value = fill137; // Update the field with the calculated sum
    } else {
      console.warn('Element with ID "fill137" not found.');
    }
}

function updateFill139() {
   
    const fill232 = parseFloat(document.getElementById('fill232')?.value) || 0;
    const fill238 = parseFloat(document.getElementById('fill238')?.value) || 0;
    const fill244 = parseFloat(document.getElementById('fill244')?.value) || 0;


    const fill139 = fill232 + fill238 + fill244;

    const fill139Element = document.getElementById('fill139');
    if (fill139Element) {
      fill139Element.value = fill139; // Update the field with the calculated sum
    } else {
      console.warn('Element with ID "fill139" not found.');
    }
}

function updateFill141() {
   
    const fill253 = parseFloat(document.getElementById('fill253')?.value) || 0;
    const fill254 = parseFloat(document.getElementById('fill254')?.value) || 0;



    const fill141 = fill253 + fill254;

    const fill141Element = document.getElementById('fill141');
    if (fill141Element) {
      fill141Element.value = fill141; // Update the field with the calculated sum
    } else {
      console.warn('Element with ID "fill141" not found.');
    }
}

function updateFill142() {
    // Retrieve values from the relevant fields, defaulting to 0 if they are empty or invalid
    const fill132 = parseFloat(document.getElementById('fill132')?.value) || 0;
    const fill134 = parseFloat(document.getElementById('fill134')?.value) || 0;
    const fill136 = parseFloat(document.getElementById('fill136')?.value) || 0;
    const fill138 = parseFloat(document.getElementById('fill138')?.value) || 0;
    const fill140 = parseFloat(document.getElementById('fill140')?.value) || 0;
    
    // Calculate the total sum
    const fill142 = fill132 + fill134 + fill136 + fill138 + fill140;
    
    // Update the field with the calculated sum
    const fill142Element = document.getElementById('fill142');
    if (fill142Element) {
      fill142Element.value = fill142;
    } else {
      console.warn('Element with ID "fill142" not found.');
    }
}

function updateFill143() {
    // Retrieve values from the relevant fields, defaulting to 0 if they are empty or invalid
    const fill133 = parseFloat(document.getElementById('fill133')?.value) || 0;
    const fill135 = parseFloat(document.getElementById('fill135')?.value) || 0;
    const fill137 = parseFloat(document.getElementById('fill137')?.value) || 0;
    const fill139 = parseFloat(document.getElementById('fill139')?.value) || 0;
    const fill141 = parseFloat(document.getElementById('fill141')?.value) || 0;
    
    // Calculate the total sum
    const fill143 = fill133 + fill135 + fill137 + fill139 + fill141;
    
    // Update the field with the calculated sum
    const fill143Element = document.getElementById('fill143');
    if (fill143Element) {
      fill143Element.value = fill143;
    } else {
      console.warn('Element with ID "fill143" not found.');
    }
}

function updateFill261() {
  // Retrieve values from the relevant fields, defaulting to 0 if they are empty or invalid
  const fill337 = parseFloat(document.getElementById('fill337')?.value) || 0;
  const fill342 = parseFloat(document.getElementById('fill342')?.value) || 0;
  const fill346 = parseFloat(document.getElementById('fill346')?.value) || 0;
  const fill351 = parseFloat(document.getElementById('fill351')?.value) || 0;
  const fill359 = parseFloat(document.getElementById('fill359')?.value) || 0;
  const fill366 = parseFloat(document.getElementById('fill366')?.value) || 0;
  const fill331 = parseFloat(document.getElementById('fill331')?.value) || 0;
  const fill332 = parseFloat(document.getElementById('fill332')?.value) || 0;
  
  // Calculate the total sum
  const fill261 = fill337 + fill342 + fill346 + fill351 + fill359 + fill366 + fill331 + fill332;
  
  // Update the field with the calculated sum
  const fill261Element = document.getElementById('fill261');
  if (fill261Element) {
      fill261Element.value = fill261;
  } else {
      console.warn('Element with ID "fill261" not found.');
  }
}

function updateFill263() {
  // Retrieve values from the relevant fields, defaulting to 0 if they are empty or invalid
  const fill370 = parseFloat(document.getElementById('fill370')?.value) || 0;
  const fill374 = parseFloat(document.getElementById('fill374')?.value) || 0;
  const fill378 = parseFloat(document.getElementById('fill378')?.value) || 0;
  const fill384 = parseFloat(document.getElementById('fill384')?.value) || 0;
  const fill390 = parseFloat(document.getElementById('fill390')?.value) || 0;
  const fill396 = parseFloat(document.getElementById('fill396')?.value) || 0;
  const fill404 = parseFloat(document.getElementById('fill404')?.value) || 0;
  const fill409 = parseFloat(document.getElementById('fill409')?.value) || 0;
  const fill414 = parseFloat(document.getElementById('fill414')?.value) || 0;
  
  // Calculate the total sum
  const fill263 = fill370 + fill374 + fill378 + fill384 + fill390 + fill396 + fill404 + fill409 + fill414;
  
  // Update the field with the calculated sum
  const fill263Element = document.getElementById('fill263');
  if (fill263Element) {
      fill263Element.value = fill263;
  } else {
      console.warn('Element with ID "fill263" not found.');
  }
}



function updateFill264() {
  // Retrieve values from the relevant fields, defaulting to 0 if they are empty or invalid
  const fill260 = parseFloat(document.getElementById('fill260')?.value) || 0;
  const fill262 = parseFloat(document.getElementById('fill262')?.value) || 0;
  
  // Calculate the total sum
  const fill264 = fill260 + fill262;
  
  // Update the field with the calculated sum
  const fill264Element = document.getElementById('fill264');
  if (fill264Element) {
      fill264Element.value = fill264;
  } else {
      console.warn('Element with ID "fill264" not found.');
  }
}

function updateFill265() {
  // Retrieve values from the relevant fields, defaulting to 0 if they are empty or invalid
  const fill261 = parseFloat(document.getElementById('fill261')?.value) || 0;
  const fill263 = parseFloat(document.getElementById('fill263')?.value) || 0;
  
  // Calculate the total sum
  const fill265 = fill261 + fill263;
  
  // Update the field with the calculated sum
  const fill265Element = document.getElementById('fill265');
  if (fill265Element) {
      fill265Element.value = fill265;
  } else {
      console.warn('Element with ID "fill265" not found.');
  }
}



function updateFill331() {
  const fill268 = parseFloat(document.getElementById('fill268')?.value) || 0;
  const fill272 = parseFloat(document.getElementById('fill272')?.value) || 0;
  const fill277 = parseFloat(document.getElementById('fill277')?.value) || 0;
  const fill281 = parseFloat(document.getElementById('fill281')?.value) || 0;
  const fill285 = parseFloat(document.getElementById('fill285')?.value) || 0;
  const fill289 = parseFloat(document.getElementById('fill289')?.value) || 0;
  const fill293 = parseFloat(document.getElementById('fill293')?.value) || 0;
  const fill297 = parseFloat(document.getElementById('fill297')?.value) || 0;
  const fill301 = parseFloat(document.getElementById('fill301')?.value) || 0;
  const fill305 = parseFloat(document.getElementById('fill305')?.value) || 0;
  const fill309 = parseFloat(document.getElementById('fill309')?.value) || 0;
  const fill313 = parseFloat(document.getElementById('fill313')?.value) || 0;
  const fill317 = parseFloat(document.getElementById('fill317')?.value) || 0;
  const fill321 = parseFloat(document.getElementById('fill321')?.value) || 0;
  const fill325 = parseFloat(document.getElementById('fill325')?.value) || 0;
  const fill329 = parseFloat(document.getElementById('fill329')?.value) || 0;
  
  const fill331 = fill268 + fill272 + fill277 + fill281 + fill285 + fill289 + fill293 + fill297 + fill301 + fill305 + fill309 + fill313 + fill317 + fill321 + fill325 + fill329;
  
  const fill331Element = document.getElementById('fill331');
  if (fill331Element) {
      fill331Element.value = fill331; // Update hidden field
  } else {
      console.warn('Element with ID "fill331" not found.');
  }
}
function updateFill332() {
  const fill269 = parseFloat(document.getElementById('fill269')?.value) || 0;
  const fill273 = parseFloat(document.getElementById('fill273')?.value) || 0;
  const fill278 = parseFloat(document.getElementById('fill278')?.value) || 0;
  const fill282 = parseFloat(document.getElementById('fill282')?.value) || 0;
  const fill286 = parseFloat(document.getElementById('fill286')?.value) || 0;
  const fill290 = parseFloat(document.getElementById('fill290')?.value) || 0;
  const fill294 = parseFloat(document.getElementById('fill294')?.value) || 0;
  const fill298 = parseFloat(document.getElementById('fill298')?.value) || 0;
  const fill302 = parseFloat(document.getElementById('fill302')?.value) || 0;
  const fill306 = parseFloat(document.getElementById('fill306')?.value) || 0;
  const fill310 = parseFloat(document.getElementById('fill310')?.value) || 0;
  const fill314 = parseFloat(document.getElementById('fill314')?.value) || 0;
  const fill318 = parseFloat(document.getElementById('fill318')?.value) || 0;
  const fill322 = parseFloat(document.getElementById('fill322')?.value) || 0;
  const fill326 = parseFloat(document.getElementById('fill326')?.value) || 0;
  const fill330 = parseFloat(document.getElementById('fill330')?.value) || 0;

  const fill332 = fill269 + fill273 + fill278 + fill282 + fill286 + fill290 + fill294 + fill298 + fill302 + fill306 + fill310 + fill314 + fill318 + fill322 + fill326 + fill330;

  const fill332Element = document.getElementById('fill332');
  if (fill332Element) {
      fill332Element.value = fill332; // Update hidden field
  } else {
      console.warn('Element with ID "fill332" not found.');
  }
}


  
  // Attach event listeners and call functions after DOM content is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to the relevant fields
    const fieldIds = [
      'val1', 'fill12', 'fill18', 'fill24', 'fill30', 'fill36',
      'fills6', 'fills12', 'fills18', 'fills24', 'fills30',
      'fills36','fills42', 'fills48', 'fills54', 'fills60', 'fills66',
      'fills72', 'fills78', 'fills84', 'fills90', 'fills96',
      'fills102', 'fills108', 'fills114', 'fills120', 'fills126',
      'fills132', 'fills138', 'fills144', 'fills150', 'fills156',
      'fills5', 'fills11', 'fills17', 'fills23', 'fills29',
      'fills35', 'fills41', 'fills47', 'fills53', 'fills59',
      'fills65', 'fills71', 'fills77', 'fills83', 'fills89',
      'fills95', 'fills101', 'fills107', 'fills113', 'fills119',
      'fills125', 'fills131', 'fills137', 'fills143', 'fills149',
      'fills155', 'fill370', 'fill374', 'fill378', 'fill384', 'fill390',
      'fill396', 'fill404', 'fill409', 'fill414', 'fill263', 'fill337',
      'fill342', 'fill346', 'fill351', 'fill359', 'fill366', 'fill331',
      'fill332', 'fill261', 'fill261', 'fill263', 'fill265', 'fill260',
      'fill262', 'fill264', 'fill269', 'fill273', 'fill278', 'fill282',
      'fill286', 'fill290', 'fill294', 'fill298', 'fill302', 'fill306',
      'fill310', 'fill314', 'fill318', 'fill322', 'fill326', 'fill330',
      'fill268', 'fill272', 'fill277', 'fill281', 'fill285', 'fill289',
      'fill293', 'fill297', 'fill301', 'fill305', 'fill331', 'fill309',
      'fill313', 'fill317', 'fill321', 'fill325', 'fill329', 'fill133',
      'fill132', 'fill133', 'fill135', 'fill137', 'fill139', 'fill141',
      'fill134', 'fill136', 'fill138', 'fill140', 'fill253', 'fill254',
      'fill232', 'fill238', 'fill244', 'fill181', 'fill185', 'fill222',
      'fill226', 'fill154', 'fill156', 'fill163', 'fill170', 'fill177',
      'val2', 'fill66', 'fill69', 'fill43', 'fill45', 'fill47', 'fill49',
      'fill51', 'fill53', 'fill72', 'val3', 'val4', 'val5', 'val6',
      'val7', 'val8', 'val9', 'val10', 'val10', 'val11', 'val12',
      'val13', 'val14', 'val15', 'fill51', 'fill11', 'fill17', 'fill23',
      'fill29', 'fill35', 'fill12', 'fill18', 'fill24', 'fill30',
      'fill36', 'fill42', 'fill44', 'fill46', 'fill48', 'fill50'
  ];
  
  
    fieldIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('input', function() {
          updateFill47();
          updateFill49();
          updateFill37();
          updateFill38();
          updateFill51();
          updateFill52();
          updateFill53();
          updateFill133();
          updateFill137();
          updateFill139();
          updateFill141();
          updateFill142();
          updateFill143();

         
          updateFill331();
          updateFill332();
          updateFill261();
          updateFill263();
          updateFill264();
          updateFill265();
       
        });
      } else {
        console.warn(`Element with ID ${id} not found.`);
      }
    });
  
    // Initial call to set values correctly on page load
    updateFill47();
    updateFill49();
    updateFill37();
    updateFill38();
    updateFill51();
    updateFill52();
    updateFill53();
    updateFill133();
    updateFill137();
    updateFill139();
    updateFill141();
    updateFill142();
    updateFill143();

  
    updateFill331();
    updateFill332();
    updateFill261();
    updateFill263();
    updateFill264();
    updateFill265();
   
  });
  