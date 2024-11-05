(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],[,function(t,e,a){t.exports=a.p+"static/media/01d.3077681e.svg"},,function(t,e,a){var s={"./01d.svg":1,"./01n.svg":13,"./02d.svg":14,"./02n.svg":15,"./03d.svg":16,"./03n.svg":17,"./04d.svg":18,"./04n.svg":19,"./09d.svg":20,"./09n.svg":21,"./10d.svg":22,"./10n.svg":23,"./11d.svg":24,"./11n.svg":25,"./13d.svg":26,"./13n.svg":27,"./50d.svg":28,"./50n.svg":29,"./cloudy_moon.svg":30};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=3},,function(t,e,a){t.exports=a(33)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){t.exports=a.p+"static/media/01n.3077681e.svg"},function(t,e,a){t.exports=a.p+"static/media/02d.144d9a47.svg"},function(t,e,a){t.exports=a.p+"static/media/02n.144d9a47.svg"},function(t,e,a){t.exports=a.p+"static/media/03d.8d2c0b2d.svg"},function(t,e,a){t.exports=a.p+"static/media/03n.8d2c0b2d.svg"},function(t,e,a){t.exports=a.p+"static/media/04d.5a81a676.svg"},function(t,e,a){t.exports=a.p+"static/media/04n.5a81a676.svg"},function(t,e,a){t.exports=a.p+"static/media/09d.a92066b1.svg"},function(t,e,a){t.exports=a.p+"static/media/09n.a92066b1.svg"},function(t,e,a){t.exports=a.p+"static/media/10d.810f7538.svg"},function(t,e,a){t.exports=a.p+"static/media/10n.810f7538.svg"},function(t,e,a){t.exports=a.p+"static/media/11d.0fc0affe.svg"},function(t,e,a){t.exports=a.p+"static/media/11n.0fc0affe.svg"},function(t,e,a){t.exports=a.p+"static/media/13d.dc58368f.svg"},function(t,e,a){t.exports=a.p+"static/media/13n.dc58368f.svg"},function(t,e,a){t.exports=a.p+"static/media/50d.1186186b.svg"},function(t,e,a){t.exports=a.p+"static/media/50n.1186186b.svg"},function(t,e,a){t.exports=a.p+"static/media/cloudy_moon.961673a4.svg"},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(4),r=a.n(i);a(10),a(11),a(12);class o extends n.a.Component{render(t){const e=this.props.city?null:n.a.createElement("h1",{className:"title"},"Weather Forecast");return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"inner-main"},e,n.a.createElement("img",{src:this.props.data?a(3)(`./${this.props.data.icon}.svg`):a(1),alt:"sun",style:{visibility:this.props.city?"visible":"hidden",opacity:this.props.city?"1":"0"}}),n.a.createElement("div",{className:"today",style:{visibility:this.props.city?"visible":"hidden",opacity:this.props.city?"1":"0"}},n.a.createElement("span",null,"Today"),n.a.createElement("h1",null,this.props.city),n.a.createElement("p",null,"Temperature: ",this.props.data?Math.round(this.props.data.temp-273.15):0,"\xb0C"),n.a.createElement("p",null,this.props.data?this.props.data.weather_desc.toLowerCase():""))),this.props.children)}}a(31);class c extends n.a.Component{render(t){const e={top:this.props.city?"-380px":"-20px",width:"600px",display:"inline-block",padding:"10px 0px 10px 30px",lineHeight:"120%",position:"relative",borderRadius:"20px",outline:"none",fontSize:"20px",transition:"all 0.5s ease-out"};return n.a.createElement("input",{className:"city-input",style:e,type:"text",placeholder:"Enter a City...",onKeyPress:async t=>{t.persist();const e=t.which?t.which:t.keyCode,a=t.target.value;13===e&&(/^[a-zA-Z\xe4\xf6\xfc\xc4\xd6\xdc\xdf ]+$/.test(a)?(t.target.classList.add("loading"),await this.props.makeApiCall(a)?t.target.placeholder="Enter a City...":t.target.placeholder="City was not found, try again..."):t.target.placeholder="Please enter a valid city name...",t.target.classList.remove("loading"),t.target.value="")}})}}a(32);class p extends n.a.Component{constructor(){super(...arguments),this.getDay=t=>{let e=new Array(7);return e[0]="Sunday",e[1]="Monday",e[2]="Tuesday",e[3]="Wednesday",e[4]="Thursday",e[5]="Friday",e[6]="Saturday",e[new Date(t).getDay()]}}render(t){return n.a.createElement("div",{className:"weather-box"},n.a.createElement("h1",null,this.props.date?this.getDay(this.props.date):""),n.a.createElement("img",{src:this.props.icon?a(3)(`./${this.props.icon}.svg`):a(1),alt:"sun"}),n.a.createElement("span",{className:"temp"},Math.round(this.props.temp-273.15),"\xb0C"))}}class d extends n.a.Component{constructor(){super(...arguments),this.state={city:void 0,days:new Array(5)},this.updateState=t=>{const e=t.city.name,a=[],s=this.getDayIndices(t);for(let n=0;n<5;n++)a.push({date:t.list[s[n]].dt_txt,weather_desc:t.list[s[n]].weather[0].description,icon:t.list[s[n]].weather[0].icon,temp:t.list[s[n]].main.temp});this.setState({city:e,days:a})},this.makeApiCall=async t=>{const e=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${t}&APPID=6557810176c36fac5f0db536711a6c52`).then(t=>t.json());return"200"===e.cod&&(await this.updateState(e),!0)},this.getDayIndices=t=>{let e=[];e.push(0);let a=0,s=t.list[a].dt_txt.slice(8,10);for(let n=0;n<4;n++){for(;s===t.list[a].dt_txt.slice(8,10)||"15"!==t.list[a].dt_txt.slice(11,13);)a++;e.push(a),s=t.list[a].dt_txt.slice(8,10)}return e}}render(){const t=()=>{const t=this.state.days.slice(1).map(t=>n.a.createElement("li",null,n.a.createElement(p,t)));return n.a.createElement("ul",{className:"weather-box-list"},t)};return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(o,{data:this.state.days[0],city:this.state.city},n.a.createElement(c,{city:this.state.city,makeApiCall:this.makeApiCall.bind(this)}),n.a.createElement(t,null))))}}var l=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(t=>{t.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.ed60951b.chunk.js.map