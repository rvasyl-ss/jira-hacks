javascript:calculateEstimate();function calculateEstimate(){var a={en:{pleaseEnter:()=>`Please enter the cost per hour in €:`,costResult:a=>`Estimatet cost for displayed issues: ${a} €.`,notANumber:()=>`This is not a number. Please try again.`},de:{pleaseEnter:()=>`Bitte die Kosten für eine Arbeitsstunde in € eingeben:`,costResult:a=>`Ungefähre Kosten für angezeigte Tickets: ${a} €.`,notANumber:()=>`Das ist leider keine gültige Zahl. Versuch's nochmal.`}},b=document.documentElement.lang in a?document.documentElement.lang:en,c=a[b],d=null!==document.querySelector(".navigator-container");if(!d)return void alert(`Error: Please go to the Jira issue navigator.`);var e=null!==document.querySelector(".details-layout");if(e)return void alert(`Error: Please change view type to list.`);var f=document.querySelectorAll(".aggregatetimeestimate");if(1>f.length)return void alert(`Error: Please enable the column 'Σ Remaining Estimate.'`);var g=[],h=0,i={week:2400,day:480,hour:60,minute:1};f.forEach(a=>{var b=a.innerHTML;if(b){var c=b.split(",");g.push(...c)}}),g.forEach(a=>{a=a.trim(),a.endsWith("s")&&(a=a.substring(0,a.length-1));var b=a.split(" "),c=parseInt(b[0]),d=i[b[1]];h+=c*d});var j,k=h/60;if(j=100*parseFloat(window.prompt(c.pleaseEnter(),9e3/100)),isNaN(j))return void alert(c.notANumber());var l=(j*k/100).toFixed(2);alert(c.costResult(l))}