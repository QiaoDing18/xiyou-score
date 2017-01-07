var login = {
	session : "",
	username : "",
	password : "",

	//验证码
	vercode : function(){
		$.ajax({
			url : "http://scoreapi.xiyoumobile.com/users/verCode",
			dataType : "jsonp",
			success : function(data){
				var verPic = document.getElementById("verPic");
				verPic.setAttribute("src", data.result.verCode);
				login.session = data.result.session;
			}
		});
	},

	//点击
	init : function(){
		var oBtn = document.getElementById('btn');
		oBtn.addEventListener("click", (this.check).bind(this), "false");
	},

	//登录
	check : function(){
		var id = document.getElementById("id").value;
		var keys = document.getElementById("password").value;
		var ver = document.getElementById("vercode").value;
		login.username = id;
		login.password = keys;
		$.ajax({
			type : "GET",
			url : "http://scoreapi.xiyoumobile.com/users/login",
			data : {
				username : id,
				password : keys,
				session : login.session,
				verCode : ver,
			},
			dataType : "jsonp",
			success : function(data){
			alert("登录成功");


	//------登陆成功后执行------//


				login.information();
				login.score();
			},
		});
	},



	//--------登陆后的--------//

	//获取基本信息
	information : function(){
		$.ajax({
			dataType : "jsonp",
			url : "http://scoreapi.xiyoumobile.com/users/info",
			data : {
				username : login.username,
				password : login.password,
			},
			success : function(data){
				console.log(data);

				//---- 基本信息的处理 ----//
				var stuInf = document.getElementById("inf1").getElementsByTagName("span");



			},
		});
	},

	//成绩
	score : function(){
		$.ajax({
			type : "GET",
			dataType : "jsonp",
			url : "http://scoreapi.xiyoumobile.com/score/year",
			data : {
				username : login.username,
				password : login.password,
				session : login.session,
				year : "2015-2016",
				semester : "2",
				updata : "1",
			},
			success : function(data){
				console.log(data);
			}
		});
	}
};

// login.vercode();
// login.init();


window.onload = function(){
	var stuInf = document.getElementById("inf1").getElementsByTagName("span");
	// stuInf[0].innerHTML = data.result.name;
	// stuInf[1].innerHTML = data.result.college;
	// stuInf[3].innerHTML = data.result.class;
	// stuInf[5].innerHTML = data.result.username;
	console.log(stuInf[5].innerHTML);
};
