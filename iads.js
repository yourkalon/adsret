(function () {

if (!document.getElementById("imoBox")) return;

if (!document.getElementById("imo-ad-style-v2")) {

const css = document.createElement("style");
css.id = "imo-ad-style-v2";

css.textContent = `
.ix-frame{
width:350px;
height:250px;
background:#fff;
border:1px solid #e8e8e8;
box-shadow:0 3px 12px rgba(0,0,0,.08);
display:flex;
overflow:hidden;
font-family:Arial,sans-serif;
position:relative;
}

.ix-photo{
width:40%;
position:relative;
}

.ix-photo img{
width:100%;
height:100%;
object-fit:cover;
display:block;
}

.ix-panel{
width:60%;
padding:12px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
box-sizing:border-box;
}

.ix-head{
font-size:20px;
font-weight:700;
line-height:1.2;
margin-bottom:8px;
color:#111;
}

.ix-head b{
color:#0084ff;
}

.ix-text{
font-size:12px;
line-height:1.5;
color:#555;
margin-bottom:8px;
}

.ix-down{
font-size:22px;
color:#0084ff;
animation:ixMove .8s infinite;
margin-bottom:8px;
}

@keyframes ixMove{
50%{transform:translateY(5px);}
}

.ix-group{
width:100%;
display:flex;
flex-direction:column;
gap:7px;
}

.ix-btn{
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
color:#fff;
font-size:13px;
font-weight:700;
padding:10px;
border-radius:7px;
transition:.2s;
}

.ix-btn:hover{
opacity:.92;
}

.ix-call{
background:#006eff;
}

.ix-chat{
background:#00a2ff;
}

.ix-mini{
position:absolute;
top:6px;
right:8px;
font-size:12px;
color:#999;
}
`;

document.head.appendChild(css);
}

document.getElementById("imoBox").innerHTML = `
<div class="ix-frame">

<div class="ix-mini">Ad</div>

<div class="ix-photo">
<img src="YOUR_IMAGE_URL">
</div>

<div class="ix-panel">

<div class="ix-head">
হ্যালো,<br>
<b>আমি নীলা</b>
</div>

<div class="ix-text">
IMO-তে কথা বলতে নিচের বাটনে ক্লিক করুন
</div>

<div class="ix-down">↓</div>

<div class="ix-group">

<a href="https://t.co/p5TIkcrbmB" class="ix-btn ix-call">
📞 IMO Call
</a>

<a href="https://t.co/p5TIkcrbmB" class="ix-btn ix-chat">
💬 IMO Chat
</a>

</div>

</div>

</div>
`;

})();
