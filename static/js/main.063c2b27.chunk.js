(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(16),o=a.n(n),i=(a(23),a(24),a(18)),s=a(7),l=a(1),j=a(17),d=a.n(j),u=(a(43),a(44),a(0));function O(e){var t=e.imdbID,a=e.Poster,r=e.Title,n=e.Year,o=e.icon,i=Object(c.useContext)(v).dispatch;return Object(u.jsxs)("article",{className:"Card",children:[Object(u.jsxs)("div",{className:"image_container",children:[Object(u.jsx)("img",{src:a,alt:r,className:"Image_Card"}),Object(u.jsx)("div",{className:"overlay blur",onClick:function(e){i("fa-heart"===o?{type:"ADD_FAV",payload:{imdbID:t,Poster:a,Title:r,Year:n},id:t}:{type:"REMOVE_FAV",payload:t})},children:Object(u.jsxs)("button",{children:[Object(u.jsx)("i",{className:"fas ".concat(o," ").concat("fa-heart"===o&&"fill")}),"fa-heart"===o?"Add To Favourites":"Remove From Favourite"]})})]}),Object(u.jsx)("p",{className:"title",children:r}),Object(u.jsx)("p",{children:n})]})}a(46);var m=function(e){var t=e.type,a=e.movies,c=e.icon;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:a&&a.map((function(e){return Object(u.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{icon:c}),e.imdbID)}))})})]})},b=(a(47),function(){var e=Object(c.useContext)(v),t=e.state,a=e.dispatch;return Object(u.jsx)("div",{className:"form_group",children:Object(u.jsx)("input",{className:"form_control",onChange:function(e){a({type:"SET_MOVIE",payload:e.target.value})},placeholder:"Type to search...",defaultValue:t.movie})})}),v=r.a.createContext(null),f=function(e){localStorage.setItem("react-app-fav-movies",JSON.stringify(e))},p={movie:"Toy Story",movieData:[],favmovies:[],loading:!1,err:""},h=function(e,t){var a;switch(t.type){case"FETCH_REQUEST":return Object(l.a)(Object(l.a)({},e),{},{loading:!0,err:t.error});case"FETCH_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,movieData:t.payload,err:t.error});case"FETCH_ERROR":return console.log(t.err),Object(l.a)(Object(l.a)({},e),{},{loading:!1,err:t.error});case"SET_MOVIE":return Object(l.a)(Object(l.a)({},e),{},{movie:t.payload});case"SET_FAV":return Object(l.a)(Object(l.a)({},e),{},{favmovies:Object(s.a)(t.payload)});case"ADD_FAV":return e.favmovies.filter((function(e){return e.imdbID===t.id})).length>0?e:(a=[].concat(Object(s.a)(e.favmovies),[t.payload]),f(a),Object(l.a)(Object(l.a)({},e),{},{favmovies:a}));case"REMOVE_FAV":return a=e.favmovies.filter((function(e){return e.imdbID!==t.payload})),f(a),Object(l.a)(Object(l.a)({},e),{},{favmovies:a});default:return e}};function x(){var e=Object(c.useReducer)(h,p),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){r({type:"FETCH_REQUEST",error:""}),d.a.get("https://www.omdbapi.com/?s=".concat(a.movie,"&apikey=53acb18d")).then((function(e){"False"!==e.data.Response?r({type:"FETCH_SUCCESS",payload:e.data.Search,error:""}):r({type:"FETCH_ERROR",error:"\ud83d\udc80 MOVIE NOT FOUND! \ud83d\udc80"})})).catch((function(e){console.log(e),r({type:"FETCH_ERROR",error:"SOMETHING WENT WRONG :("})}))}),2e3);return function(){clearInterval(e)}}),[a.movie]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-app-fav-movies"));null!==e&&e.length>0&&(r({type:"SET_FAV",payload:e}),console.log(e.length))}),[]),Object(u.jsx)(v.Provider,{value:{state:a,dispatch:r},children:Object(u.jsxs)("div",{className:"fluid_container",children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Mini FakeFlix"}),Object(u.jsx)(b,{})]}),a.loading&&Object(u.jsx)("h1",{className:"messages",children:"Loading \u25d5"}),a.err&&Object(u.jsx)("h1",{className:"messages",children:a.err}),0!==a.movieData.length&&!a.err&&!a.loading&&Object(u.jsx)(m,{type:"Search Results",movies:a.movieData,icon:"fa-heart"}),0!==a.favmovies.length&&null!==a.favmovies&&Object(u.jsx)(m,{type:"Favourites",movies:a.favmovies,icon:"fas fa-times-circle"})]})})}var E=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x,{})})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.063c2b27.chunk.js.map