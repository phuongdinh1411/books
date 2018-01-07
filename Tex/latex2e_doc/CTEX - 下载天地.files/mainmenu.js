function showToolbar()
{
	mstyle = new MenuStyle();
	mstyle.bgColor="#6699ff";
	mstyle.subbgColor="#6699ff";
	mstyle.mainMenuBorder=0;
	mstyle.subMenuBorder=0;
	mstyle.subMenuWidth=90;
	mstyle.clsMenuItemIE = "class=menu";
	mstyle.clsMenuItemNS = "class=menu";
	mstyle.menuDelta = 1; // distance between mainmenu and submenu
	mstyle.mainMenuWidth = 720;
	mstyle.mainMenuHeight = 20;
	mstyle.bLeftAligned = 0;

	menu = new Menu(mstyle);

	//additem(标识，内容，提示，地址，分栏)
	//***** Add Standard menus *****

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//首页
	menu.addItem("HomePage","首页","本站首页","/","");
	menu.addSubItem("HomePage","主站","http://ctex.dhs.org/","http://ctex.dhs.org/","_top");
	menu.addSubItem("HomePage","Myrice.com站","http://ctex.myrice.com/","http://ctex.myrice.com/","_top");
	menu.addSubItem("HomePage","China.com站","http://ctex.at.china.com/","http://ctex.at.china.com/","_top");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//新手入门
	menu.addItem("Newbie","新手入门","新手入门","/newbie/index.htm","");
	menu.addSubItem("Newbie","什么是TeX","什么是TeX","/newbie/intro.htm","");
	menu.addSubItem("Newbie","快速入门","安装和使用","/newbie/beginning.htm","");
	menu.addSubItem("Newbie","辅助工具","使用TeX/LaTeX的好帮手","/newbie/tools.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//文档资料
	menu.addItem("Document","在线文档","在线TeX文档资料","/document/index.htm","");
	menu.addSubItem("Document","LaTeX","LaTeX命令与技巧","/document/latex/index.htm","");
	menu.addSubItem("Document","常用宏包","TeX/LaTeX常用宏包简介","/document/packages/index.htm","");
	menu.addSubItem("Document","ConTeXt","ConTeXt入门与提高","/document/context/index.htm","");
	
	menu.addSeparator("<font color='#9999FF'>|</font>");

	//中文支持
	menu.addItem("Chinese","中文支持","中文支持","/chinese/index.htm","");
	menu.addSubItem("Chinese","CCT","CCT","/chinese/cct.htm","");
	menu.addSubItem("Chinese","CJK","CJK","/chinese/cjk.htm","");
	menu.addSubItem("Chinese","台湾的中文TeX","台湾的中文TeX","/chinese/taiwan.htm","");
	menu.addSubItem("Chinese","在SWP中使用CCT","在SWP中使用CCT","/chinese/swp_cct.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//下载天地
	menu.addItem("Download","下载天地","下载天地","/download/index.htm","");
	menu.addSubItem("Download","TeX系统","TeX系统","/download/system.htm","");
	menu.addSubItem("Download","Packages","宏包","/download/packages.htm","");
	menu.addSubItem("Download","辅助工具","辅助工具","/download/tools.htm","");
	menu.addSubItem("Download","中文支持","中文支持","/download/chinese.htm","");
	menu.addSubItem("Download","文档资料","文档资料","/download/document.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//网络资源
	menu.addItem("Resource","网络资源","网络资源","/resource/index.htm","");
	menu.addSubItem("Resource","本站邮件列表","本站邮件列表","/resource/maillist.htm","");
	menu.addSubItem("Resource","国内TeX资源","国内TeX资源","/resource/domestic.htm","");
	menu.addSubItem("Resource","国外TeX资源","国外TeX资源","/resource/foreign.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//论坛
	menu.addItem("Forums","论坛","论坛","http://ctex.dhs.org/forums/index.php","");
	menu.addSubItem("Forums","邮件列表","邮件列表","http://ctex.dhs.org/maillist/tex/","");
	menu.addSubItem("Forums","留言簿","请留下你的意见和建议","http://ctex.dhs.org/forums/list.php?f=1","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	menu.showMenu();
}
