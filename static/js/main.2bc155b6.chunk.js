(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){var a=n(63);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(65)(a,r);a.locals&&(e.exports=a.locals)},34:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},63:function(e,t,n){(t=e.exports=n(64)(!1)).push([e.i,"body {\n  font-family: sans-serif;\n  background-image: linear-gradient(to bottom, #d2b48c, #ffefd5 100%);\n  background-attachment: fixed;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n}\n.src-stylesheets-__main__container--3K7u1 {\n  max-width: 95%;\n  margin: 0 auto;\n  min-height: 100%;\n}\n.src-stylesheets-__main__options--2TuI1 {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.src-stylesheets-__main__sorting-criteria--2qH4E {\n  cursor: pointer;\n  float: left;\n  display: inline-block;\n  padding-left: 30px;\n}\n.src-stylesheets-__main__sorting-criteria--2qH4E span {\n  padding: 0 16px;\n}\n.src-stylesheets-__main__sorting-criteria--2qH4E .src-stylesheets-__main__active--G60g4 {\n  background-color: #d2b48c;\n}\n.src-stylesheets-__main__sorting-criteria--2qH4E > * {\n  line-height: 2em;\n}\nform {\n  margin: 40px;\n}\n.src-stylesheets-__main__search-input--20Q0t {\n  float: right;\n  padding-right: 30px;\n}\n.src-stylesheets-__main__search-input--20Q0t > label {\n  line-height: 2em;\n}\n.src-stylesheets-__main__search-input-item--2_xhr {\n  padding: 0 16px;\n}\n.src-stylesheets-__main__search-highlighting--2WdyX {\n  background-color: #b08245;\n}\ntable {\n  width: 90%;\n  border-collapse: collapse;\n  border: 3px solid #808080;\n  margin-left: auto;\n  margin-right: auto;\n}\ntd,\nth {\n  border: 1px solid #808080;\n  padding: 10px 15px;\n}\n.src-stylesheets-__main__mainTable--3U3rF {\n  padding-bottom: 70px;\n}\nheader h2 {\n  text-align: center;\n  padding-top: 25px;\n}\n#src-stylesheets-__main__page-numbers--16nXX {\n  cursor: pointer;\n  float: right;\n  display: inline-block;\n  padding: 25px;\n}\n#src-stylesheets-__main__page-numbers--16nXX span {\n  padding: 8px 16px;\n}\n#src-stylesheets-__main__page-numbers--16nXX .src-stylesheets-__main__active--G60g4 {\n  background-color: #d2b48c;\n}\n",""]),t.locals={container:"src-stylesheets-__main__container--3K7u1",options:"src-stylesheets-__main__options--2TuI1","sorting-criteria":"src-stylesheets-__main__sorting-criteria--2qH4E",sortingCriteria:"src-stylesheets-__main__sorting-criteria--2qH4E",active:"src-stylesheets-__main__active--G60g4","search-input":"src-stylesheets-__main__search-input--20Q0t",searchInput:"src-stylesheets-__main__search-input--20Q0t","search-input-item":"src-stylesheets-__main__search-input-item--2_xhr",searchInputItem:"src-stylesheets-__main__search-input-item--2_xhr","search-highlighting":"src-stylesheets-__main__search-highlighting--2WdyX",searchHighlighting:"src-stylesheets-__main__search-highlighting--2WdyX",mainTable:"src-stylesheets-__main__mainTable--3U3rF","page-numbers":"src-stylesheets-__main__page-numbers--16nXX",pageNumbers:"src-stylesheets-__main__page-numbers--16nXX"}},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(31),i=n.n(s),o=(n(39),n(12)),c=n(13),l=n(17),h=n(14),u=n(18),_=n(3),m=n(11),p=n(33),d=n.n(p),g="SORT_BY_NUMBER",y="SORT_BY_NAME",f="SORT_BY_RATE",v="SORT_BY_DATE",b=n(16),E=function(e){var t=e.children,n=e.onClick;return r.a.createElement("span",{onClick:n},t)},w=function(e){switch(e){case g:return"id";case y:return"name";case f:return"vote_average";case v:return"first_air_date";default:throw new Error("Choose criterion to sort")}},O=Object(b.b)(function(e,t){return{tvshows:e.tvshows}},function(e,t){return{onClick:function(e,t){return e({type:"SET_SORTING_CRITERION",payload:t})}.bind(null,e,w(t.criterion))}})(E),C=n(1),k=n.n(C),T=function(){return r.a.createElement("span",{className:k.a.sortingCriteria},r.a.createElement("strong",null,"Sort by:"),r.a.createElement(O,{criterion:g},"Number"),r.a.createElement(O,{criterion:y},"Title"),r.a.createElement(O,{criterion:f},"Rate"),r.a.createElement(O,{criterion:v},"First Air Date"))},x=function(e){var t=e.tvshow,n=e.search,a="https://image.tmdb.org/t/p/w200"+t.poster_path,s=n.replace(/[\\[.+*?(){|^$]/g,"\\$&"),i=function(e){for(var t=e.split(new RegExp(s,"i")),a=0,i=[],o=0;o<t.length;o++)i.push(t[o]),i.push(r.a.createElement("span",{key:o,className:k.a.searchHighlighting},e.substr(t[o].length+a,n.length))),a+=t[o].length+n.length;return i};return r.a.createElement("tr",null,r.a.createElement("th",null," \u2116 ",t.id," "),r.a.createElement("th",null,r.a.createElement("h2",null," ",i(t.name)," "),r.a.createElement("h3",null," Country: ",t.origin_country," "),r.a.createElement("h3",null," Original Language: ",t.original_language," "),r.a.createElement("p",null," ",i(t.overview)," ")),r.a.createElement("th",null," ",r.a.createElement("img",{src:a,alt:t.name})," "),r.a.createElement("th",null,"Rate: ",t.vote_average,"/10",r.a.createElement("p",null," Voted ",t.vote_count," times")))},N=function(e){var t=e.onClick,n=e.className,a=e.number;return r.a.createElement("span",{onClick:t.bind(void 0,a),className:n},a)},I=function(e){var t=e.onChange;return r.a.createElement("span",{className:k.a.searchInput},r.a.createElement("label",{className:k.a.searchInputItem},r.a.createElement("strong",null,"Search:")),r.a.createElement("input",{type:"search",onChange:t}))},j=function(){return r.a.createElement("div",null,r.a.createElement("strong",null,"Loading..."))},S=function(e){var t=e.error;return r.a.createElement("div",null,r.a.createElement("strong",null,t))},R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={currentPage:1,showsPerPage:6,search:"",pageNumbers:[]},n.handleClick=n.handleClick.bind(Object(_.a)(Object(_.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({currentPage:Number(e)})}},{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"componentWillMount",value:function(){var e;e=this.props.dispatch,d.a.get("https://api.themoviedb.org/3/tv/popular?api_key=eaa4854fc14c0423809d014974235e94&language=en-US&page=1").then(function(t){return console.log(t.data.results),e({type:"FETCH_TVSHOWS",payload:t.data.results})}).catch(function(t){e({type:"FETCH_FAILURE",payload:"An error has occurred while sending the request!"})}).finally(function(){e({type:"LOADING_STATE",payload:!1})})}},{key:"render",value:function(){for(var e=this,t=this.state,n=t.currentPage,a=t.showsPerPage,s=t.search,i=this.state.search?this.props.tvshows.filter(function(t){return!e.state.search||t.name.toLowerCase().indexOf(e.state.search.toLowerCase())>-1||t.overview.toLowerCase().indexOf(e.state.search.toLowerCase())>-1}):this.props.tvshows,o=n*a,c=o-a,l=i.slice(c,o),h=this.props.tvshows&&l.map(function(e,t){return r.a.createElement(x,{key:e.id,tvshow:e,search:s})}),u=[],_=1;_<=Math.ceil(i.length/a);_++)u.push(_);var m=u.map(function(t){return r.a.createElement(N,{key:t,id:t,number:t,onClick:e.handleClick,className:t===e.state.currentPage?k.a.active:""})});return r.a.createElement("div",{className:k.a.mainTable},this.props.isLoading?r.a.createElement(j,null):this.props.error?r.a.createElement(S,{error:this.props.error}):r.a.createElement("div",null,r.a.createElement("div",{className:k.a.options},r.a.createElement(T,null),r.a.createElement(I,{onChange:this.handleChange.bind(this)})),r.a.createElement("table",null,r.a.createElement("tbody",null,h)),r.a.createElement("div",{id:k.a.pageNumbers},m)))}}]),t}(a.Component),L=Object(m.a)(function(e){return{tvshows:e.tvshows,isLoading:e.isLoading,error:e.error}},function(e){return{dispatch:e}})(R,N),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:k.a.container},r.a.createElement("header",null,r.a.createElement("h2",null,"Most recommended TV shows")),r.a.createElement(L,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(8),A=n(23),F={tvshows:[],error:"",isLoading:!0},P=Object(X.b)({tvshows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.tvshows,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TVSHOWS":return[].concat(Object(A.a)(e),Object(A.a)(t.payload));case"SET_SORTING_CRITERION":var n=e.slice(0);return"name"===t.payload?n.sort(function(e,n){return e[t.payload]<n[t.payload]?-1:1}):"vote_average"===t.payload?n.sort(function(e,n){return n[t.payload]-e[t.payload]}):"first_air_date"===t.payload?n.sort(function(e,n){return n[t.payload].replace(/-/g,"")-e[t.payload].replace(/-/g,"")}):n.sort(function(e,n){return e[t.payload]-n[t.payload]}),n;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.error,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FAILURE":return t.payload;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.isLoading,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_STATE":return t.payload;default:return e}}}),W=Object(X.c)(P,F);i.a.render(r.a.createElement(b.a,{store:W},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.2bc155b6.chunk.js.map