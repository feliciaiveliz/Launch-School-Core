// get ranks as array 
// get values of ranks as values in classifications object
// get tbody's children
  // iterate through tr's (in an array)
    // get firstElementChild
    // is the textContent of first child (rank) included in ranks array?
       // strip : before check
    // if so, get the textContent of lastElementChild of 'tr' (trim whitespace)
    // create pair: rank as key and value as value

    let classifications = {};
    let ranks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
    let tbody = document.querySelector('tbody').children;
    tbody = Array.prototype.slice.call(tbody);
    console.log(tbody);
    
    tbody.forEach(tr => {
      let rank = tr.firstElementChild.textContent;
      rank = rank.slice(0, -1);
      console.log(rank);
      
      if (ranks.includes(rank)) {
        let value = tr.lastElementChild.textContent.trim();
        classifications[rank] = value;
      }
    });
    
    classifications;