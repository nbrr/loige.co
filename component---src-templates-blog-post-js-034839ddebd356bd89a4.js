(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(e,t,n){"use strict";n.r(t);var i=n(10),a=n.n(i),r=n(179),o=n(7),c=n(0),l=n(188),s=n.n(l),d=n(180),p=n(185),m=n(181),u=n(69),h=n(281),b=n(183),f=n(44),g=n.n(f),j=function(e){return Object(o.c)("svg",g()({"aria-hidden":"true","data-prefix":"fas","data-icon":"comments",className:"svg-inline--fa fa-comments fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"}))},v=n(205),O=n(192),x=n(193),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.shouldComponentUpdate=function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier},t}(h.DiscussionEmbed),w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.shouldComponentUpdate=function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier},t}(h.CommentCount),k=Object(r.a)("div",{target:"ep8980s0"})({name:"1qj4z9r",styles:"margin:2em 0;line-height:25px;padding:0 1em;a{text-decoration:none;color:inherit;&:hover{text-decoration:underline;}}@media (min-width:780px){padding:0 2em;}"}),z=Object(r.a)("div",{target:"ep8980s1"})({name:"1l1pps0",styles:"margin:2em 0;line-height:25px;padding:1em;font-size:small;border-radius:8px;background:rgba(255,229,100,0.3);a{text-decoration:none;border-bottom:2px solid #ffe564;color:inherit;&:hover{border-bottom:2px solid #ff9b51;}}@media (min-width:780px){padding:2em 2em;}"}),C=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.post,n=e.site,i=e.disqusShortName,a=e.githubLink,r={url:""+n+t.frontmatter.slug,title:t.frontmatter.title};return Object(o.c)(c.Fragment,null,Object(o.c)(k,null,Object(o.c)(O.a,{style:{marginLeft:0},date:t.frontmatter.date}),Object(o.c)(x.a,{tags:t.frontmatter.tags}),Object(o.c)("a",{href:"#comments",title:"Read comments"},Object(o.c)(j,{style:{margin:"0 .25em 0 1em"}}),Object(o.c)(w,{postId:t.frontmatter.slug,shortname:i,config:r},"comments")),Object(o.c)("p",null,"— Published by"," ",Object(o.c)("em",null,Object(o.c)(u.Link,{to:"/about"},"Luciano Mammino")))),Object(o.c)(b.a,{dangerouslySetInnerHTML:{__html:t.html}}),a&&Object(o.c)(z,null,Object(o.c)("strong",null,"Found a typo or something that can be improved?"),Object(o.c)("br",null),"In the spirit of Open Source, you can contribute to this article by"," ",Object(o.c)("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"submitting a PR on ",Object(o.c)(v.a,null)," GitHub")),Object(o.c)(k,{style:{borderTop:"1px solid #ececec",marginTop:"2em",paddingTop:"2em",lineHeight:"1.2"}},Object(o.c)("h2",{id:"comments"},Object(o.c)(j,{style:{margin:"0 .25em 0 0"}})," Comments"),Object(o.c)(y,{postId:t.frontmatter.slug,shortname:i,config:r})))},t}(c.Component),N=n(210),I=n(303),R=n.n(I),M=Object(r.a)("div",{target:"eu4hp7r0"})({name:"exth3p",styles:"ol{color:#6d6d6d;padding:0 0 0 2em;list-style:decimal-leading-zero;}ol ol{padding:0 0 0 0.3em;}ol li{font-size:0.8rem;font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;margin-top:5px;color:#111;a{font-size:1.2em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;color:#6d6d6d;border-bottom:1px solid transparent;text-decoration:none;font-weight:bold;&:hover{color:#000;outline-width:0;}}&.depth-3{font-size:0.8em;list-style:none;}}"}),U=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.headings.filter(function(e){return e.depth<=3}).map(function(e){return e.children=[],e}).reduce(function(e,t,n,i){var a=e[e.length-1];return a&&t.depth>a.depth?(a.children.push(t),e):(e.push(t),e)},[]),t=R()();return Object(o.c)(M,null,Object(o.c)("h3",null,"Sections"),Object(o.c)("ol",null,e.map(function(e){var n=e.value,i=e.depth,a=e.children;return Object(o.c)("li",{className:"depth-"+i,key:n},Object(o.c)("a",{href:"#"+t.slug(n),dangerouslySetInnerHTML:{__html:n}}),a.length>0&&Object(o.c)("ol",null,a.map(function(e){var n=e.value,i=e.depth;return Object(o.c)("li",{className:"depth-"+i,key:n},Object(o.c)("a",{href:"#"+t.slug(n),dangerouslySetInnerHTML:{__html:n}}))})))})))},t}(c.Component),S=n(206),L=function(e){return Object(o.c)("svg",g()({"aria-hidden":"true","data-prefix":"fab","data-icon":"facebook-square",className:"svg-inline--fa fa-facebook-square fa-w-14",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"}))},V=function(e){return Object(o.c)("svg",g()({"aria-hidden":"true","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"}))},_=function(e){return Object(o.c)("svg",g()({"aria-hidden":"true","data-prefix":"fab","data-icon":"pinterest",className:"svg-inline--fa fa-pinterest fa-w-16",viewBox:"0 0 496 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"}))},H=function(e){return Object(o.c)("svg",g()({"aria-hidden":"true","data-prefix":"far","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}))},B=Object(r.a)("ul",{target:"ey4v4xz0"})({name:"125xt49",styles:"list-style:none;font-size:30px;padding:0.2em 0;li{display:inline-block;margin:0 0.2em 0 0;a{color:#6d6d6d;}a.twitter:hover{color:#00aced;}a.facebook:hover{color:#3b5998;}a.linkedin:hover{color:#007bb6;}a.pinterest:hover{color:#cb2027;}a.email:hover{color:black;}}"}),P={twitter:Object(o.c)(S.a,null),facebook:Object(o.c)(L,null),linkedin:Object(o.c)(V,null),pinterest:Object(o.c)(_,null),email:Object(o.c)(H,null)},T={twitter:function(e,t,n,i,a){return"https://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&url="+encodeURIComponent(e)+"&source="+encodeURIComponent(n)+"&related="+a+"&via="+a},facebook:function(e,t,n,i,a){return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e)},linkedin:function(e,t,n,i,a){return"http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(e)+"&title="+encodeURIComponent(t)+"&source="+encodeURIComponent(n)},pinterest:function(e,t,n,i,a){return"https://pinterest.com/pin/create/button/?media="+encodeURIComponent(i)+"&url="+encodeURIComponent(e)+"&is_video=false&description="+encodeURIComponent(t)},email:function(e,t,n,i,a){return"mailto:?&body=%0A"+encodeURIComponent(t)+"%0A%0A"+encodeURIComponent(e)+"&subject="+encodeURIComponent(t)}},q=["twitter","facebook","linkedin","pinterest","email"],A=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.url,n=e.title,i=e.site,a=e.imageUrl,r=e.twitterProfile;return Object(o.c)(B,null,q.map(function(e){return Object(o.c)("li",{key:e},Object(o.c)("a",{rel:"nofollow noopener noreferrer",className:e,target:"_blank",href:T[e](t,n,i,a,r),title:"Share via "+e},P[e]))}))},t}(c.Component),D=Object(r.a)("ul",{target:"e1empo690"})({name:"11m37pp",styles:"color:#6d6d6d;list-style:outside;padding:0 0 0 1.25em;li{margin:0.75em 0 0 0;&:first-of-type{margin-top:0;}}a{color:#6d6d6d;text-decoration:none;font-weight:bold;}a:hover{color:#000;}"}),F=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.similar;return Object(o.c)(D,null,e.map(function(e){return Object(o.c)("li",{key:e.slug},Object(o.c)(u.Link,{to:"/"+e.slug},e.title))}))},t}(c.Component),E=n(184),J=Object(r.a)("ul",{target:"e191jpam0"})({name:"bjcerb",styles:"display:flex;flex-wrap:wrap;list-style:none;padding:0;font-size:14px;min-height:260px;@media (min-width:780px){flex-wrap:nowrap;font-size:16px;}@media (min-width:1024px){height:300px;font-size:18px;}"}),G=Object(r.a)("li",{target:"e191jpam1"})({name:"1c4m9lv",styles:"width:100%;text-align:center;min-height:100%;background:black;background-size:cover;a{text-decoration:none;display:flex;flex-direction:column;justify-content:space-between;background:rgba(0,0,0,0.8);height:100%;transition:background 0.5s ease;padding:1em;&:hover{background:rgba(0,0,0,0.3);}h4{color:#fff;font-size:1.2em;}p{color:rgba(255,255,255,0.8);font-size:0.8em;vertical-align:middle;line-height:1em;svg{vertical-align:text-bottom;}}}"}),Q=Object(r.a)("span",{target:"e191jpam2"})({name:"1mhqlqt",styles:"display:inline-block;padding:4px 10px 5px;text-transform:uppercase;font-size:0.8em;color:rgba(255,255,255,0.8);"}),Y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.previous,n=e.next,i=t&&t.frontmatter.header_img?"url("+t.frontmatter.header_img.publicURL+")":void 0,a=n&&n.frontmatter.header_img?"url("+n.frontmatter.header_img.publicURL+")":void 0;return Object(o.c)(J,null,t&&Object(o.c)(G,{style:{backgroundImage:i}},Object(o.c)(u.Link,{to:t.fields.slug,rel:"prev"},Object(o.c)(Q,null,"Read this next"),Object(o.c)("h4",null,t.frontmatter.title),Object(o.c)("p",null,Object(o.c)(E.a,null)," ",t.timeToRead," minutes read"))),n&&Object(o.c)(G,{style:{backgroundImage:a}},Object(o.c)(u.Link,{to:n.fields.slug,rel:"next"},Object(o.c)(Q,null,"You might enjoy"),Object(o.c)("h4",null,n.frontmatter.title),Object(o.c)("p",null,Object(o.c)(E.a,null)," ",n.timeToRead," minutes read"))))},t}(c.Component);n.d(t,"pageQuery",function(){return te});var $=Object(r.a)("div",{target:"e1kc7zwr0"})({name:"dpbxro",styles:"min-height:100vh;margin:0 auto;padding-left:20px;padding-right:20px;max-width:1260px;display:flex;flex-direction:column;@media (min-width:780px){width:90%;}"}),K=Object(r.a)("section",{target:"e1kc7zwr1"})({name:"i3jcei",styles:"flex:1;display:flex;"}),W=Object(r.a)("div",{target:"e1kc7zwr2"})({name:"11d495d",styles:"flex:1;@media (min-width:780px){display:flex;}"}),X=Object(r.a)("main",{target:"e1kc7zwr3"})({name:"19yjhy2",styles:"flex:3;width:100%;"}),Z=Object(r.a)("aside",{target:"e1kc7zwr4"})({name:"112aol2",styles:"flex:1;background:#f7f7f7;padding:1em;margin:0 0 2em 0;h3{margin:0 0 0.5em 0;position:relative;color:#111;}@media (min-width:780px){background:transparent;margin:0 0 1em 0;& > div{margin:1em 0 0 0;position:sticky;overflow-y:auto;top:70px;}}"}),ee=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,n=t.previous,i=t.next,a=t.similar,r=e.frontmatter.header_img?e.frontmatter.header_img.publicURL:void 0,l=s()(this.props,"data.site.siteMetadata.disqusShortName"),u=s()(this.props,"data.site.siteMetadata.siteUrl"),h={url:""+u+e.frontmatter.slug+"/",title:e.frontmatter.title,site:u,imageUrl:""+u+r,twitterProfile:s()(this.props,"data.site.siteMetadata.twitterProfile")},b=s()(this.props,"data.markdownRemark.fileAbsolutePath"),f=b?"https://github.com/lmammino/loige.co/blob/master/"+b.substr(b.indexOf("content/")):null;return Object(o.c)(p.a,{location:this.props.location,section:"blog"},Object(o.c)(d.a,{path:e.frontmatter.slug+"/",pageData:e,isBlogPost:!0}),Object(o.c)(m.a,{className:"textOverlay",backgroundImage:r},Object(o.c)("h1",null,Object(o.c)("span",null,e.frontmatter.title))),Object(o.c)($,null,Object(o.c)(K,null,Object(o.c)(W,null,Object(o.c)(X,null,Object(o.c)(C,{post:e,githubLink:f,site:u,disqusShortName:l})),Object(o.c)(Z,null,Object(o.c)(N.a,null),Object(o.c)("div",null,e.headings.length>0&&Object(o.c)(U,{headings:e.headings}),Object(o.c)("h3",{style:{marginTop:"1em"}},"Share"),Object(o.c)(A,h),a.length>0&&Object(o.c)(c.Fragment,null,Object(o.c)("h3",{style:{marginTop:"1em"}},"Similar posts"),Object(o.c)(F,{similar:a}))))))),Object(o.c)(Y,{previous:n,next:i}))},t}(c.Component),te=(t.default=ee,"653128063")},181:function(e,t,n){"use strict";var i=n(10),a=n.n(i),r=n(179),o=n(7),c=n(0),l=n(182),s=n.n(l),d=Object(r.a)("div",{target:"ea1ziiz0"})({name:"vvgs1u",styles:"background-color:#46c9e5;background-repeat:no-repeat;background-position:center;background-size:cover;width:100%;min-height:300px;height:50vh;display:table;&.small{max-height:300px;}&.tiledBg{background-size:auto;background-repeat:repeat;}&.bottomRightBg{background-position:bottom right;}&.gradientOverlay{position:relative;z-index:-2;&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#46c9e5,#d26ac2);opacity:0.6;z-index:-1;}}@media (min-width:780px){height:70vh;}"}),p=Object(r.a)("div",{target:"ea1ziiz1"})({name:"1dbbfk8",styles:"display:table-cell;vertical-align:middle;text-align:center;font-weight:700;color:#fff;padding:0 2em;color:white;text-shadow:1px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;@media (min-width:780px){font-size:1.2em;}h1{font-size:2em;line-height:1.6em;}h2{font-size:1.5em;margin:0.5em 0 0 0;line-height:1.6em;}&.textOverlay > * > span{background:#000000c4;display:inline;padding:0.2em;box-decoration-break:clone;-webkit-box-decoration-break:clone;}"}),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=(e.isSmall,e.children),n=e.className,i=this.props.backgroundImage||s.a;return Object(o.c)(d,{className:n,style:{backgroundImage:"url("+i+")"}},Object(o.c)(p,{className:n},t))},t}(c.Component);t.a=m},182:function(e,t,n){e.exports=n.p+"static/default-bg-e7d1dfbd3202e36e2d9d70dfd5a77122.jpg"},184:function(e,t,n){"use strict";var i=n(44),a=n.n(i),r=n(7);n(0);t.a=function(e){return Object(r.c)("svg",a()({"aria-hidden":"true","data-prefix":"far","data-icon":"eye",className:"svg-inline--fa fa-eye fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),Object(r.c)("path",{fill:"currentColor",d:"M569.354 231.631C512.97 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-102.556 0-192.091-54.701-240-136 44.157-74.933 123.677-127.27 216.162-135.007C273.958 131.078 280 144.83 280 160c0 30.928-25.072 56-56 56s-56-25.072-56-56l.001-.042C157.794 179.043 152 200.844 152 224c0 75.111 60.889 136 136 136s136-60.889 136-136c0-31.031-10.4-59.629-27.895-82.515C451.704 164.638 498.009 205.106 528 256c-47.908 81.299-137.444 136-240 136z"}))}},192:function(e,t,n){"use strict";var i=n(10),a=n.n(i),r=n(179),o=n(7),c=n(0),l=n(44),s=n.n(l),d=function(e){return Object(o.c)("svg",s()({"aria-hidden":"true","data-prefix":"far","data-icon":"calendar-alt",className:"svg-inline--fa fa-calendar-alt fa-w-14",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}))},p={name:"1yorln6",styles:"margin:0 0.25em 0 0;"},m=Object(r.a)("span",{target:"e1r90wi10"})({name:"13sv3zn",styles:"vertical-align:middle;font-size:inherit;margin:0 0.5em;display:inline-block;span{vertical-align:text-bottom;}"}),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.style,i=e.className;return Object(o.c)(o.a,null,function(e){var a=e.css;e.cx;return Object(o.c)(m,{style:n,className:a(i)},Object(o.c)(d,{className:a(p)}),Object(o.c)("span",null,t))})},t}(c.Component);t.a=u},193:function(e,t,n){"use strict";var i=n(10),a=n.n(i),r=(n(209),n(45),n(71),n(179)),o=n(7),c=n(0),l=n(69),s=n(44),d=n.n(s),p=function(e){return Object(o.c)("svg",d()({"aria-hidden":"true","data-prefix":"fas","data-icon":"tags",className:"svg-inline--fa fa-tags fa-w-20",viewBox:"0 0 640 512",width:"1em",height:"1em"},e),Object(o.c)("path",{fill:"currentColor",d:"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"}))},m=Object(r.a)("span",{target:"ex82wp60"})({name:"j1wil6",styles:"vertical-align:middle;margin:0 0.5em 0 1em;display:inline-block;a{color:inherit;font-weight:bold;text-decoration:none;vertical-align:text-bottom;}"}),u={name:"1yorln6",styles:"margin:0 0.25em 0 0;"},h=Object(r.a)("span",{target:"ex82wp61"})({name:"i6dzq1",styles:"vertical-align:text-bottom;"}),b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this,t=this.props.tags;return Object(o.c)(o.a,null,function(n){var i=n.css;n.cx;return Object(o.c)(m,e.props,Object(o.c)(p,{className:i(u)}),t.map(function(e,n){return Object(o.c)(c.Fragment,{key:e},Object(o.c)(l.Link,{to:"/tag/"+(i=e,i.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""))},"#",e),n<t.length-1?Object(o.c)(h,null,", "):"");var i}))})},t}(c.Component);t.a=b},210:function(e,t,n){"use strict";var i=n(10),a=n.n(i),r=n(179),o=n(7),c=n(0),l=n(211),s=n.n(l),d=Object(r.a)("a",{target:"e1pruv500"})({name:"1jztyo0",styles:"background:#ffffcd;padding:0.5em;font-size:12px;display:block;color:inherit;text-decoration:none;border:1px solid #ffffcd;margin:0 0 1em 0;&:hover{border-color:#f89000;}"}),p=Object(r.a)("span",{target:"e1pruv501"})({name:"p58oka",styles:"display:flex;flex-direction:row;flex-wrap:wrap;"}),m=Object(r.a)("span",{target:"e1pruv502"})({name:"13cvdli",styles:"width:50%;padding:0 0 0 1em;display:block;&.left{max-width:125px;padding:0 0 0 1em !important;}@media (max-width:1024px) and (min-width:780px){width:100%;max-width:auto !important;margin:0;&.left{padding:0 0 0 1em;}h4{padding:1em 0 0.5em 0 !important;}}&:first-of-type{padding:0;}h4{padding:0 0 0.5em 0;font-size:14px;}"}),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return Object(o.c)(d,{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://loige.link/nodejs-book-ref-blog"},Object(o.c)(p,null,Object(o.c)(m,{className:"left"},Object(o.c)("img",{src:s.a,style:{width:"100%"},alt:"Node.js Design Patterns Second Edition"})),Object(o.c)(m,null,Object(o.c)("h4",null,"Node.js Design Patterns"),Object(o.c)("p",null,"Master best practices to build modular and scalable server-side web applications guided by"," ",Object(o.c)("em",null,"Node.js Design Patterns Second Edition"),". Available as"," ",Object(o.c)("strong",null,"Digital")," and ",Object(o.c)("strong",null,"Print"),"."))))},t}(c.Component);t.a=u},211:function(e,t,n){e.exports=n.p+"static/200-cb588b738a90b17740d5c8fd47777e73.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-034839ddebd356bd89a4.js.map