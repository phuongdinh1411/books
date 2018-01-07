//By Aloft, aloft@126.com

if (document.all)    {n=0;ie=1;fShow="visible";fHide="hidden";}
if (document.layers) {n=1;ie=0;fShow="show";   fHide="hide";}

topY = 0;rightX = 0;bottomY = 0;leftX = 0;
lastMenu = null;
var mstyle;

function MenuStyle()
	{
	this.bgColor     = "#FFFFFF";
	this.subbgColor  = "#FFFFFF";

	this.clsMenuItemIE = "class=clsMenuItemIE";
	this.clsMenuItemNS = "class=clsMenuItemNS";

	this.mainMenuWidth = "100%";
	this.mainMenuHeight = "";
	this.subMenuWidth = 80;

	this.mainMenuBorder = 0;
	this.subMenuBorder  = 0;
	this.menuDelta = 0;

	this.bMenuAligned = 0;
	this.bLeftAligned = -1;

	this.bMenuStatic = 0; 
	}

function Menu(ms)
	{
	mstyle = ms;

	this.addSeparator = addSeparator;
	this.addItem    = addItem;
	this.addSubItem = addSubItem;
	this.showMenu   = showMenu;
	this.displaySubMenu = displaySubMenu;

	HTMLstr = "";
	HTMLstr += "<!-- MENU PANE DECLARATION BEGINS -->\n";
	HTMLstr += "\n";

	if (ie)
	{
	  if (mstyle.bMenuStatic > 0) HTMLstr += "<div id='SmartMenu' style='position: absolute;'";
	  else HTMLstr += "<div id='SmartMenu'";
	  if (mstyle.bMenuAligned == 0) HTMLstr += " align='center'>\n";
	  if (mstyle.bMenuAligned == 1) HTMLstr += " align='right'>\n";
	  if (mstyle.bMenuAligned == -1) HTMLstr += " align='left'>\n";
	}
	if (n)
	{
	  if (mstyle.bMenuStatic > 0) HTMLstr += "<layer name='SmartMenu'><layer name='SmartMenuPane'>\n";
	  else  HTMLstr += "<ilayer name='SmartMenu'><layer name='SmartMenuPane'>\n";
	}

	HTMLstr += "<table";
	if (mstyle.mainMenuWidth != null)
	{
	  HTMLstr += " width='"+mstyle.mainMenuWidth+"'";
	}
	if (mstyle.mainMenuHeight != null)
	{
	  HTMLstr += " height='"+mstyle.mainMenuHeight+"'";
	}
	HTMLstr += " bgcolor='"+mstyle.bgColor+"' border='"+mstyle.mainMenuBorder+"' cellspacing=0 cellpading=0>\n";
	HTMLstr += "<tr><td>\n";

	HTMLstr += "<table border=0";
	if (mstyle.bLeftAligned == 0) HTMLstr += " width='100%'";
	if (mstyle.bLeftAligned == 1) HTMLstr += " align='right'";
	if (mstyle.bLeftAligned == -1) HTMLstr += " align='left'";
	HTMLstr += " bgcolor='"+mstyle.bgColor+"' cellspacing=0 cellpading=0><tr>\n";
	HTMLstr += "<!-- MAIN MENU STARTS -->\n";
	HTMLstr += "<!-- MAIN_MENU -->\n";
	HTMLstr += "<!-- MAIN MENU ENDS -->\n";
	HTMLstr += "</tr></table>\n";

	HTMLstr += "</td></tr>\n";
	HTMLstr += "</table>\n";

	if (ie) HTMLstr+= "</div>\n";
	if (n)
	{
	  if (mstyle.bMenuStatic > 0) HTMLstr+= "</layer></layer>\n";
	  else HTMLstr+= "</layer></ilayer>\n";
	}
	HTMLstr += "\n";
	HTMLstr += "<!-- SUB MENU STARTS -->\n";
	HTMLstr += "<!-- SUB_MENU -->\n";
	HTMLstr += "<!-- SUB MENU ENDS -->\n";
	HTMLstr += "\n";

	HTMLstr += "<!-- MENU PANE DECALARATION ENDS -->\n";
	}

function addSeparator(text)
	{
	var MENUitem = "";
	MENUitem += "\n<!-- SEPARATOR -->\n";
	if (n)
	{
		MENUitem += "<td>\n";
		MENUitem += "<ilayer>";
		MENUitem += text;
		MENUitem += "</ilayer>\n";
		MENUitem += "</td>\n";
	}
	if (ie)
	{
		MENUitem += "<td>\n";
		MENUitem += "<div align='center'>\n";
		MENUitem += text;
		MENUitem += "</div>\n";
		MENUitem += "</td>\n";
	}
	MENUitem += "<!-- END OF SEPARATOR -->\n\n";
	MENUitem += "<!-- MAIN_MENU -->\n";

	HTMLstr = HTMLstr.replace("<!-- MAIN_MENU -->\n", MENUitem);
	}

function addItem(idItem, text, hint, location, frame)
	{
	var Lookup = "<!-- ITEM "+idItem+" -->";
	if (HTMLstr.indexOf(Lookup) != -1)
	{
		alert(idParent + " already exist");
		return;
	}
	var MENUitem = "";
	MENUitem += "\n<!-- ITEM "+idItem+" -->\n";
	if (n)
	{
		MENUitem += "<td>\n";
		MENUitem += "<ilayer name="+idItem+">";
		MENUitem += "<a href='"+location+"' ";
		if (frame!=null) MENUitem += " target='"+frame+"'";
		MENUitem += mstyle.clsMenuItemNS+" onmouseover=\"hideAll();displaySubMenu('"+idItem+"')\">";
		MENUitem += text;
		MENUitem += "</a>";
		MENUitem += "</ilayer>";
		MENUitem += "</td>\n";
	}
	if (ie)
	{
		MENUitem += "<td>\n";
		MENUitem += "<div id='"+idItem+"' align='center'>\n";
		MENUitem += "<a href='"+location+"' ";
		if (frame!=null) MENUitem += " target='"+frame+"'";
		if (hint!=null)
			MENUitem += "title=\""+hint+"\" ";
		MENUitem += mstyle.clsMenuItemIE+" onmouseover=\"hideAll();displaySubMenu('"+idItem+"')\">";
		MENUitem += text+"</a>\n";
		MENUitem += "</div>\n";
		MENUitem += "</td>\n";
	}
	MENUitem += "<!-- END OF ITEM "+idItem+" -->\n\n";
	MENUitem += "<!-- MAIN_MENU -->\n";

	HTMLstr = HTMLstr.replace("<!-- MAIN_MENU -->\n", MENUitem);
	}

function addSubItem(idParent, text, hint, location, frame)
	{
	var MENUitem = "";
	Lookup = "<!-- ITEM "+idParent+" -->";
	if (HTMLstr.indexOf(Lookup) == -1)
	{
		alert(idParent + " not found");
		return;
	}
	Lookup = "<!-- NEXT ITEM OF SUB MENU "+ idParent +" -->";
	if (HTMLstr.indexOf(Lookup) == -1)
	{
		if (n)
		{
			MENUitem += "\n";
			MENUitem += "<layer id='"+idParent+"submenu' visibility=hide bgcolor='"+mstyle.subbgColor+"'>\n";
			MENUitem += "<table border='"+mstyle.subMenuBorder+"' bgcolor='"+mstyle.subbgColor+"' width="+mstyle.subMenuWidth+" cellspacing=0 cellpading=0>\n";
			MENUitem += "<!-- NEXT ITEM OF SUB MENU "+ idParent +" -->\n";
			MENUitem += "</table>\n";
			MENUitem += "</layer>\n";
			MENUitem += "\n";
		}
		if (ie)
		{
			MENUitem += "\n";
			MENUitem += "<div id='"+idParent+"submenu' style='position:absolute; visibility: hidden; width: "+mstyle.subMenuWidth+"; top: -300;' align='center'>\n";
			MENUitem += "<table border='"+mstyle.subMenuBorder+"' bgcolor='"+mstyle.subbgColor+"' width="+mstyle.subMenuWidth+" cellspacing=0 cellpading=0>\n";
			MENUitem += "<!-- NEXT ITEM OF SUB MENU "+ idParent +" -->\n";
			MENUitem += "</table>\n";
			MENUitem += "</div>\n";
			MENUitem += "\n";
		}
		MENUitem += "<!-- SUB_MENU -->\n";
		HTMLstr = HTMLstr.replace("<!-- SUB_MENU -->\n", MENUitem);
	}

	Lookup = "<!-- NEXT ITEM OF SUB MENU "+ idParent +" -->\n";
	if (n)
        {
	  MENUitem = "<tr><td><a "+mstyle.clsMenuItemNS+" href='"+location+"'";
	  if (frame!=null) MENUitem += " target='"+frame+"'";
	  MENUitem += ">"+text+"</a><br></td></tr>\n";
        }
	if (ie)
        {
	  MENUitem = "<tr><td><a "+mstyle.clsMenuItemIE+" href='"+location+"'";
	  if (hint!=null)  MENUitem += " title=\""+hint+"\"";
	  if (frame!=null) MENUitem += " target='"+frame+"'";
	  MENUitem += ">"+text+"</a><br></td></tr>\n";
        }
	MENUitem += Lookup;
	HTMLstr = HTMLstr.replace(Lookup, MENUitem);
	}

function showMenu()
	{
	document.writeln(HTMLstr);
	if (mstyle.bMenuStatic > 0) UpdateIt();
	}

function displaySubMenu(idMainMenu)
	{
	var menu;
	var submenu;
	if (n)
	{
		submenu = document.layers[idMainMenu+"submenu"];
		smp = document.layers["SmartMenu"].document.layers["SmartMenuPane"];

		submenu.left = smp.document.layers[idMainMenu].pageX;
		submenu.top  = document.layers["SmartMenu"].pageY+smp.clip.height+3;
		submenu.visibility = fShow;

		leftX  = submenu.left;
		rightX = leftX + submenu.clip.width;

		topY    = document.layers["SmartMenu"].pageY;
		bottomY = topY+document.layers["SmartMenu"].clip.height+submenu.clip.height;
	} else if (ie) {
		menu = eval(idMainMenu);
		submenu = eval(idMainMenu+"submenu.style");
		smp = document.all["SmartMenu"];

		submenu.left = calculateSumOffset(menu, 'offsetLeft');
		submenu.top = calculateSumOffset(document.all["SmartMenu"], 'offsetTop')+smp.offsetHeight+mstyle.menuDelta;
		submenu.visibility = fShow;

		leftX  = document.all[idMainMenu+"submenu"].style.posLeft;
		rightX = leftX + document.all[idMainMenu+"submenu"].offsetWidth;

		topY    = document.all["SmartMenu"].offsetTop;
		bottomY = topY+document.all["SmartMenu"].offsetHeight+
				document.all[idMainMenu+"submenu"].offsetHeight;
	}
	lastMenu = submenu;
	}

function hideAll()
	{
	if (lastMenu != null) {lastMenu.visibility = fHide;lastMenu.left = 0;}
	}

function calculateSumOffset(idItem, offsetName)
	{
	var totalOffset = 0;
	var item = eval('idItem');
	do
	{
		totalOffset += eval('item.'+offsetName);
		item = eval('item.offsetParent');
	} while (item != null);
	return totalOffset;
	}

function updateIt(e)
	{
	if (ie)
	{
		var x = window.event.clientX;
		var y = window.event.clientY+document.body.scrollTop;

		if (x > rightX || x < leftX) hideAll();
		else if (y < topY || y > bottomY) hideAll();
	}
	if (n)
	{
		var x = e.pageX;
		var y = e.pageY;

		if (x > rightX || x < leftX) hideAll();
		else if (y > bottomY || y < topY) hideAll();
	}
	}

function UpdateIt()
	{
  	if (ie) document.all["SmartMenu"].style.top = document.body.scrollTop;
  	if (n)  document.layers["SmartMenu"].top    = top.pageYOffset;
  	setTimeout("UpdateIt()", 200);
	}


	if (document.all)
	{
	document.body.onclick=hideAll;
	document.body.onscroll=hideAll;
	document.body.onmousemove=updateIt;
	}
	if (document.layers)
	{
	document.onmousedown=hideAll;
	window.captureEvents(Event.MOUSEMOVE);
	window.onmousemove=updateIt;
	}