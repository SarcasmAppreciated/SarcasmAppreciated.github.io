(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var Guru;
var Guru_Eyes;

// stage content:
(lib.GuruGuru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119));

	// Legs
	Guru = new lib.gg();
	Guru.setTransform(508.1,354.8,1.555,1.555,0,0,0,388.4,220.8);
    Guru.addEventListener("click", function(event) { guruToggleEyes(); });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:Guru}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(370.5,63.3,275.1,583);

function guruToggleEyes() {
    if(Guru_Eyes.visible == false)
        Guru_Eyes.visible = true;
    else
        Guru_Eyes.visible = false;
}

// symbols:
(lib.eyes_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAAEB3").s().p("AgUgLIArALIgtAMg");
	this.shape.setTransform(50.5,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D46865").s().p("AgZgEIAzgPIgaAng");
	this.shape_1.setTransform(61.3,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAAEB3").s().p("AAfgJIACARIhBACg");
	this.shape_2.setTransform(16.5,40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5DCDD").s().p("AgVgTIArAAIgcAng");
	this.shape_3.setTransform(50.5,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2575F").s().p("AgYAWIAYhCIAZgCIgvBdg");
	this.shape_4.setTransform(59.6,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2D1D2").s().p("AgiAAIBFgvIgWBGIgCAZg");
	this.shape_5.setTransform(47,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6676B").s().p("AgaALIACABIAzgtIgDBBIgYACg");
	this.shape_6.setTransform(59.6,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2575F").s().p("AA5AVIgXAAIhmgRIgCgUICCgGIALAWIgIAXg");
	this.shape_7.setTransform(24.8,52.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0505A").s().p("AgrAwIAWhGIAVgeIADgEQAKgCALADIgYBNIApgNIADAZIgsAYg");
	this.shape_8.setTransform(52.8,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6676B").s().p("AgdAnQgdgIgShHIAaAEIACAWIBmAPIAXAAQhDAogdAAIgKgCg");
	this.shape_9.setTransform(22.8,54.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAAEB3").s().p("Ag4AfIgrgQICGgxIBBA/IiCAGg");
	this.shape_10.setTransform(20.8,47.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE4A54").s().p("AhaAFIAxgkIBXgFIAtAYIiHAxg");
	this.shape_11.setTransform(15.3,45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE4C53").s().p("AhgAVIBRhEIAbgoIA7gmIAaAZIhTBpIAnAOIgPAYQgLgCgKABIgPgSIgHAMIARALIgTAdIhHAyg");
	this.shape_12.setTransform(51.5,22.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1CBCF").s().p("Ag9hqQBVARAaAuQAZArgZBTIg/AWIgWACg");
	this.shape_13.setTransform(14.6,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0C9CE").s().p("AhgBQIgIiXQBBgsAxAlIAnAkQAXAXASAGIAPAnIhRBGg");
	this.shape_14.setTransform(39.2,14.6);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.2,5,57.8,53.7);


(lib.PluginObject_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFC5C9").s().p("AgsAiQgEhgBdAJQABA0gNAVQgSAigwABg");
	this.shape.setTransform(19.5,191.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0505B").s().p("AgSgJIAMgLIAZAhIgKAIg");
	this.shape_1.setTransform(235.5,206.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D35862").s().p("AgRgPQACgKgFgKIApAyIgeAVg");
	this.shape_2.setTransform(89.5,174.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D86972").s().p("AgFgOIALAOIgLAPg");
	this.shape_3.setTransform(73,71.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D86B75").s().p("AgJgsIBBAuIgtAYIhCATg");
	this.shape_4.setTransform(62.4,78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D86972").s().p("AhAgLIArgXIA+AXIAYAqIhtAEg");
	this.shape_5.setTransform(65.8,67);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1525D").s().p("Ag2gDIAAgjIBsgEIABApIgsAtg");
	this.shape_6.setTransform(66.9,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D04D59").s().p("Ag/gZICAgmIABA9IiDBCg");
	this.shape_7.setTransform(57.1,87.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D86B75").s().p("AgYgOIAogNIAJAhIgXAWg");
	this.shape_8.setTransform(179.4,93.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0505B").s().p("AgdAAIAXgUIAkgBIg7Arg");
	this.shape_9.setTransform(182.7,96.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D35862").s().p("AgTgOIAjgiIAEBGIgBAbg");
	this.shape_10.setTransform(173.3,80.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D04D59").s().p("AgHgLIARAVIgTACg");
	this.shape_11.setTransform(242,196.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D86972").s().p("AgJgHQAKgDAJAAIgPAVQgEgKAAgIg");
	this.shape_12.setTransform(239.7,215.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6636C").s().p("AgJAKIACgVIARAWg");
	this.shape_13.setTransform(99.6,169.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DE8089").s().p("AgJgFIAUgDIgVARg");
	this.shape_14.setTransform(47.1,174);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D35862").s().p("AgWAKIAXgUIAVAVg");
	this.shape_15.setTransform(81.2,110.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D35862").s().p("AgQggIASACIAPA+g");
	this.shape_16.setTransform(82.8,154.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D04A57").s().p("AgfgIIA/AAIgBAQIg+ABQgBgJABgIg");
	this.shape_17.setTransform(53.7,196.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1525D").s().p("AgXALIACgiIAiAVIALATQgIgCgCAJg");
	this.shape_18.setTransform(13.6,195.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4D7D9").s().p("AgYgfIAxA+IgmABg");
	this.shape_19.setTransform(223.2,93.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0505B").s().p("AgfgIIBAAAIgBAPIg/ACQgBgJABgIg");
	this.shape_20.setTransform(82.2,189.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D04D59").s().p("AgSgVIATAAIASAnQgKAAgJAEg");
	this.shape_21.setTransform(65.3,149.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D04A57").s().p("AgPgfIAQAAIAPA/g");
	this.shape_22.setTransform(227.5,172);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D0505B").s().p("AgfgFIA/gFIAAAMQgIAIgLABg");
	this.shape_23.setTransform(27.4,198.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D35862").s().p("AgdgVIA7ApIgaACg");
	this.shape_24.setTransform(202.6,149.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D86B75").s().p("AgggOIAVgGIAkADIAIAFIgCAhg");
	this.shape_25.setTransform(8,194.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DE8089").s().p("AgHgqQAIACAJgCIgTBWg");
	this.shape_26.setTransform(209.2,173.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CE4853").s().p("AgcARIAjgwIAWAVIgBATIgpAXIgPgPg");
	this.shape_27.setTransform(60.7,62.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D0505B").s().p("AgcgGIA1gEIAEAVg");
	this.shape_28.setTransform(177.1,99.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D86972").s().p("AgwARQAggkALgFQAYgOAeAkIhJAfg");
	this.shape_29.setTransform(9.2,184.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D55F6B").s().p("AAAAmIgUhLIApBLg");
	this.shape_30.setTransform(63.3,143);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CD444E").s().p("AgTAPIAngyIgTBHg");
	this.shape_31.setTransform(63.5,57.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D04A57").s().p("AgHA2IgGhqIAYgBIADBrg");
	this.shape_32.setTransform(185.1,106.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D0505B").s().p("AgPAQIgQgZQgEgLAAgIIAKgIIA9AIIgeA9QgHAAgNAEIgBgVg");
	this.shape_33.setTransform(240.1,211.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D45D68").s().p("AgRgfIAVgDIAOBFg");
	this.shape_34.setTransform(52.9,128.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D6636C").s().p("AALgWIAkAGIhdAng");
	this.shape_35.setTransform(61.6,166.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D86B75").s().p("AAfgdIADAZIhEAig");
	this.shape_36.setTransform(25.3,176.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D6636C").s().p("AgdAsIA7hYIgqBZIgRgBg");
	this.shape_37.setTransform(205.1,181.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D04D59").s().p("AggAJIArgpIAWBBg");
	this.shape_38.setTransform(235.7,189.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CE4853").s().p("AgTAtIAThtIAUACIgWB/g");
	this.shape_39.setTransform(98.6,177.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D6636C").s().p("Ag0gqIBpBSIgXADg");
	this.shape_40.setTransform(48,120.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D35862").s().p("AgeAEIA+gUIAAAdIg/AEIABgNg");
	this.shape_41.setTransform(33.9,197.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CE4551").s().p("AgTACQAAggAcgtIALCXQgnghAAgpg");
	this.shape_42.setTransform(214,108.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DA727B").s().p("AhWgKICtgCIgBAOIipALg");
	this.shape_43.setTransform(37.2,174.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D2565F").s().p("AAhg7IAAA/IhBA3g");
	this.shape_44.setTransform(44.9,87.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DA727B").s().p("Ageg8IAXAAIAmB5g");
	this.shape_45.setTransform(187.4,117.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D55F6B").s().p("AhBAPIAAgeICDgBQgBAJABAIQgJAHgKgBIhFAKg");
	this.shape_46.setTransform(43.8,196.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DE8089").s().p("AhGAMIAGgZICHAbg");
	this.shape_47.setTransform(186.8,222.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DA727B").s().p("AguAxIBdhhIgNBhg");
	this.shape_48.setTransform(188.1,201);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D04D59").s().p("AgLBiIAGjEIARDEg");
	this.shape_49.setTransform(226.4,139.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D86972").s().p("Ag1ABIBsgVQgCAJABAKIhrAXIAAgVg");
	this.shape_50.setTransform(73.4,190.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D35862").s().p("AgqAgIAwg/IARABIAUA+g");
	this.shape_51.setTransform(201.4,189.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D55F6B").s().p("Ag1AMIBrgpIABAVIhtAmg");
	this.shape_52.setTransform(62.5,193.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D6636C").s().p("AgMA1IgBhpIATgCIAIBtg");
	this.shape_53.setTransform(242.3,202.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDBABF").s().p("AgjAmIAAguIBHggIgjBRg");
	this.shape_54.setTransform(10.4,188.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D45D68").s().p("AglAdIAfh0IAGBjIAmBMg");
	this.shape_55.setTransform(37.8,106.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D2565F").s().p("AAQBWIgziqIAagCIAsCsIgJABIgKgBg");
	this.shape_56.setTransform(206.7,160);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D35862").s().p("Ag+AYIBshAIARAUIh9A9g");
	this.shape_57.setTransform(91.8,186.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D86972").s().p("AgYAAQAFggAngxIAFCIIgGAbQgxgmAGgsg");
	this.shape_58.setTransform(177.7,215.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D86972").s().p("AgnA9IAZh7QAKgEAIAAQACAXAeAtQAQAqg3AXg");
	this.shape_59.setTransform(66.8,157.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DE8089").s().p("AAABhIgThaIAThpQAKACAKgCIgBDFg");
	this.shape_60.setTransform(81.1,141.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D35862").s().p("AgcBiIAYjEQAsApgPA5QgEAOgOAjQgKAfgEASIgKABIgLgBg");
	this.shape_61.setTransform(83.9,121.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D6636C").s().p("AgEBiIgHjEIAXAAIgBDFg");
	this.shape_62.setTransform(226.4,158.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D45D68").s().p("AhBA0IAlhWIBLgqIATBCQhagIAEBfg");
	this.shape_63.setTransform(17.1,187.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D86972").s().p("AiOArQgkgIgRgCIARhPQgCBHBQgLIEpgoIiQAkQhTAWg8ANQgIACgKAAQgPAAgTgEg");
	this.shape_64.setTransform(219.3,219.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CE4853").s().p("AhAAzIBdimIAPAPIAVAwIAAAjIgtBaIg7ASIgZAZg");
	this.shape_65.setTransform(54.8,75.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CD4A4C").s().p("AhKhjIBCABIAmBBIABAoIAsBCIAAAXIg3AEg");
	this.shape_66.setTransform(172.2,89);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E39199").s().p("AhLBDIBBiTIAkACIAxBFIgFAHIgRBOIg2AFg");
	this.shape_67.setTransform(194.3,215.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D2565F").s().p("Ah+CgIhAgXIABgUIAThKICRiSIAegRIAwgVQAegNATgEQA2gKAjA+Ig/BDQglAngVAcQgPAWgOAoIgZBGg");
	this.shape_68.setTransform(82.7,49.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E39199").s().p("AmhIfQACgJAIACQAygBASgiQAMgXAAg0IIGgDIgHgoIB7hYIAIA1IAggVIiki+IhHj9IBHg3IhijOIgYhdIgYAUIhkgqICDhEIAoAuIAQgMIAYBdQAOA2AMAmQACAHAQAGIAbALIAtAAIAAgBIABABIgBAAIgXDGIAAgBIgUBsIAUBYIAjBCIBiBDIAWAVIgBgCIAXAXIgXCFIhtBCIhCAAIhuAXIhuArIjEABIhBAWIhBAFIAuARgAlHGqIgDAAIADAAIAAAAIAAAAg");
	this.shape_69.setTransform(56.9,143.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E3929A").s().p("AhZKAIAFgHIDygaIASiWIhthlIAlhYIgnlLIgBABQAkgygTgrQgMgfg0gtIgpA8IiPh+IBhgtIAgjOIiVAAIg1AvIg+ACIgDgYIA8gtIAshNIA9AMIA8hFICmC0IgpAWQgeAtAAAiQAAApApAhIBhCBIgGDGIAHDEIAhBCIAgAfIAsBNIgtArIBEAXIAVAWIgCAYIAABsIgjgFIgbgjIgNALIAeAgQAAAIAEALIAQAaIABAVQAAAKAEAKIkoAqIgUACQg8AAACg/g");
	this.shape_70.setTransform(210.4,151.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EFC5C9").s().p("AlHG3IBFgkICrgLIAXgSIBVgsIBfgpQA4gYgQgqQgegvgBgXIgSgpIgrhOIhAhHIgNhIIhrhUIgIgCIgBgIIgmhMIgIhlIAsgsIBDg3IAZgZIgCBbIBkAqIAYgUIAYBdIBhDOIhHA3IBHD9IB6CKQAEAKgBAKIh7BYIAHAoIoJADgAlHG3IAAAAIgBAAg");
	this.shape_71.setTransform(54.7,135.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EFC4C8").s().p("AjrJnIgFiKIAkgJIBSAAIANhkIArggIBUAAIgShAIAqhbIgBABIAWhYIguisIg7grIgCghIg3iPIggg2Igph6IgDhtIA1gvICUAAIgfDOIhhAtICNB+IArg8QA0AtAMAfQATArgjAxIABAAIAnFLIglBYIBsBlIgRCWIjyAaIgyhFIgmgCIhACVgACCiPIAAgBIgJgFg");
	this.shape_72.setTransform(203.9,159.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CD444F").s().p("AgjECIghBOIhIhSIgWBVIgYAWIgbgLQgQgGgDgHQgMgmgOg2IgXhdIgQAMIgpguIgBg9IAtgYIAsgsIgBgMIANgQIgNgOIgYgrICQAAIAZhHQAOgnAPgWQAVgfAkgnIA9hCQBugdA3BjQAgA7BFByQAxBigYBKIjGECIg0hEIgoCDg");
	this.shape_73.setTransform(97.6,75.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CD444E").s().p("ABAElIg7BEIg7gLIgtBMIgmABIgJgjIgpANIgQgXIgEiMIglAhIhCgBIgjhjQgVg7gKgpQgKgpgIg5IgMhdQA6irCFhXQBwhKC2gYIBCAFQCHBLArCDQAhBogTCqQgRCgAEA5QAJB7BKBSIhsAOIgzhBIAMBCIgcAXg");
	this.shape_74.setTransform(195.8,51.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC5BC").s().p("AggAHIABgRIBAAAIgBAVg");
	this.shape_75.setTransform(207,3.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E69CA3").s().p("AgVAhIAAhBQAKADAKgDIAWAMIABAuIgVAHg");
	this.shape_76.setTransform(4.5,189.6);

	this.addChild(this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,2.2,241.6,222.3);


(lib.PluginObject_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECB3B8").s().p("AgfAAIAWgVIApACIg9AoQADgLgFgKg");
	this.shape.setTransform(220.1,276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D45B67").s().p("AgeAVQALgwgDgUIA1BaQgSAFgMAAQgeAAgBgbg");
	this.shape_1.setTransform(200.6,462.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86B75").s().p("AgVBDIgoh7IAAg4IA9AfIA+DCg");
	this.shape_2.setTransform(238.9,356.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB3D49").s().p("AALgOQAAAIgCAKIgTALg");
	this.shape_3.setTransform(88.9,124.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CB3D49").s().p("AgJgLIATAPQgIAHgKAAg");
	this.shape_4.setTransform(93,119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1515C").s().p("AgKgHIAWABIgXAOg");
	this.shape_5.setTransform(101.9,114.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D25964").s().p("AgCgEQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIADgDIgBAVQgEgMAAgDg");
	this.shape_6.setTransform(93.3,75.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D25964").s().p("AgHAVIAOgrIABAtg");
	this.shape_7.setTransform(92.8,85.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7A2A8").s().p("AAKgUIACAXIgYASg");
	this.shape_8.setTransform(80,135.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E28F97").s().p("AgKgJIAUgMIACAaIgXARg");
	this.shape_9.setTransform(88.8,127);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E28F97").s().p("AgUAAIAJgUIAggCIgnAtg");
	this.shape_10.setTransform(83.2,133.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E18992").s().p("AgGAtIgEg9IAEgpIARBzg");
	this.shape_11.setTransform(73.3,155.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D45D65").s().p("AgmgHIAbgbIARAOIAhA3g");
	this.shape_12.setTransform(73.8,163.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1515C").s().p("AhBgBQABgKgBgJICDASIgEAXg");
	this.shape_13.setTransform(159.9,127.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D04D59").s().p("AhMgdICYApIABASg");
	this.shape_14.setTransform(121.6,119.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE4853").s().p("AAIAOIh+gbIgBgRIDuArQABAJgBAJg");
	this.shape_15.setTransform(141.3,123.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E18992").s().p("AkEAoQACgMgBgIIgBABIAXgVIgBAAQAMAAAIgGIBbg7QAJgCALABIAqAXIAtgBICZA7ICAAdIjHAHIlAAQg");
	this.shape_16.setTransform(116,120.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D55F6A").s().p("AgKAKIAUgUIABACIgUATg");
	this.shape_17.setTransform(218,275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D55F6A").s().p("AgHAAIANgKIgBgBIABABIAAAAQADAKgCAJIgDADg");
	this.shape_18.setTransform(216.3,277.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D55F6A").s().p("AgsAVIAEgDIA9goIAYAtg");
	this.shape_19.setTransform(221.2,276.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D25661").s().p("AgJgKIgmgCIBPgXIAQAXIgjAwg");
	this.shape_20.setTransform(224.4,275.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE4853").s().p("AhOAJQgFhZBKhfIBCAuIAWDvIhFBCQhShMgGhbgAgwAsQABAlA8gPIg1haQADAUgLAwg");
	this.shape_21.setTransform(202.4,460.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE4853").s().p("AArBkIhshrIgPABIgGgtIAjgxIBeAGIArCtIABAWg");
	this.shape_22.setTransform(247.7,384.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C93A45").s().p("AgHCTIgVjvIAKgkIAYgTIAXA2IAABaIgPCXg");
	this.shape_23.setTransform(211.2,456.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC414D").s().p("Ag/ALIBUhEIAaAcIAQBVIgXg2IgZATIgLAkg");
	this.shape_24.setTransform(207.8,441.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D76670").s().p("AhGCcQgTgsgFhgQgEhRAlhFQAlhDBHguQAEgDAQAMIAcAVIhVBFQhIBfAFBZQAGBbBSBNIAJAtQhQgWgehHg");
	this.shape_25.setTransform(200.3,457.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECB3B8").s().p("AgGgOIAMABIABAaIgHACg");
	this.shape_26.setTransform(222.4,215.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CE4853").s().p("AgrARIABgRQAAgJACgJIA9ABIAXARIgBATg");
	this.shape_27.setTransform(219.1,287.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D76670").s().p("Ag0AiIgYgSIBjgJIAfg8IAXAvIgBA8g");
	this.shape_28.setTransform(229,283.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDB8BD").s().p("AgrDPIgTlaIAMgbIACgDIBvglIAAGdg");
	this.shape_29.setTransform(210.5,364.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D76670").s().p("AggAKIABgUIBAAGQgBAGAAAJg");
	this.shape_30.setTransform(211.5,285.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC404C").s().p("AgJgDIATgLIgTAdIAAgSg");
	this.shape_31.setTransform(99.6,388.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFC2C7").s().p("AgegbIA5ADIAEAmIg5ANg");
	this.shape_32.setTransform(91,307.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFC2C7").s().p("AgJglIAXA1IgbAWg");
	this.shape_33.setTransform(117.4,315.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D55F6A").s().p("AgKgUIAVAUIgRAVg");
	this.shape_34.setTransform(73.5,466.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D55F6A").s().p("AgaALIgCgQIA3gOIACAog");
	this.shape_35.setTransform(137.3,484.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D1515C").s().p("AgUgJIApgBIgBAVg");
	this.shape_36.setTransform(267.3,391.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CB3D49").s().p("AgJgqIAQAAQACAJABAMIgBBAg");
	this.shape_37.setTransform(255.4,387.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E18992").s().p("AgUArIAIhVIAZgBIAIBWIgpABg");
	this.shape_38.setTransform(267.3,385.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D55F6A").s().p("AguAzIABhAIBcgrIgIBVIgjgHIgNAjg");
	this.shape_39.setTransform(261.1,387.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CB3D49").s().p("AgRAUIAAgpIAjAFIgGAmg");
	this.shape_40.setTransform(258.2,394.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E18992").s().p("AhGAlIAGgmIAOgjIAkAHIAAABIApAVIAsAsg");
	this.shape_41.setTransform(266.7,393.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D04B57").s().p("AAECvIgYgCIAAlaIAMgBIAdFZQgGAEgIAAIgDAAg");
	this.shape_42.setTransform(260.8,445.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC414D").s().p("AgKgeIABgCIAUA/IgCACg");
	this.shape_43.setTransform(239.8,351.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D55F6A").s().p("AgRgGIANgFQAFgCAGAAQAEAAAHAKQgDAEgMANg");
	this.shape_44.setTransform(262.2,300.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC414D").s().p("AgWg/IADgCIApCCIgCABg");
	this.shape_45.setTransform(243.1,361.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E28F97").s().p("AgngSIgCgGIA/AAIAUAFQgVAsgUAAQgTAAgVgrg");
	this.shape_46.setTransform(267.2,377.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CB3D49").s().p("AgJCXIAAktIATAAIAAEtg");
	this.shape_47.setTransform(253.1,313.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC404C").s().p("AhLhLIBSAtIADgBIBCAqIAAAWIhegGIgiAxg");
	this.shape_48.setTransform(244.3,371.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CB3D49").s().p("AgdBbIAQjTIArDvIgBACg");
	this.shape_49.setTransform(235.7,336.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC414D").s().p("AgJESIgWhYIAAgWIAJiFQAGhNABg2QAAgjgGgzIgKhXIAVABIAqHKIgYBYg");
	this.shape_50.setTransform(255.3,356.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DD7A84").s().p("Ag3gqIhyAmIAzijQAdhfAZhDQAFgMAagLIArgTIA9AtIAaAtIgBgBIAXAtIgBgCIgRDVIAAA2IAoB9IAdDHIhJgCIgOhMIg5BeIhRAEg");
	this.shape_51.setTransform(222.5,348.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CB3D49").s().p("AgHAAIAOgJQACAJgEAKg");
	this.shape_52.setTransform(76,139.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E7A2A8").s().p("AgKAAQAEgJgBgKIASgDIgUAsg");
	this.shape_53.setTransform(77.7,140.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CB3D49").s().p("AgYggIAyABIgeA8IAAAAIgBABIABgBIgVAEg");
	this.shape_54.setTransform(79.4,134.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC414D").s().p("AgWALIAtgqIgEA/g");
	this.shape_55.setTransform(70.2,150);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D25964").s().p("AhcAVQAlgVAagJQAbgLAngNIBGgVIArAVIAEA8IgbAbQgGgEAEgGIgjgqIjzA1IA9gig");
	this.shape_56.setTransform(57.1,156.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D1515C").s().p("AhXhWICuAqIABAXIgWAVIABAAIgXAeIgBAhIgWAWIhUACg");
	this.shape_57.setTransform(83.2,122.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB3D49").s().p("AgUATIARgmIAYAmQgLgBgJACg");
	this.shape_58.setTransform(103,112);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC414D").s().p("AgJgqIAOACIAFAoIAAArg");
	this.shape_59.setTransform(93.2,92);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CD444F").s().p("AA1APIiugoQgJgCgKgEIEZAFIgBARIhCApg");
	this.shape_60.setTransform(86.6,116.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E18992").s().p("AgPgIIASgCIAWAPIgxAGg");
	this.shape_61.setTransform(95.9,386.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D25661").s().p("AgegbIgBgMIANABIAygHIAAAJIAAAUIgUA9IgsABg");
	this.shape_62.setTransform(95.3,391.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E7A2A8").s().p("Ag/APIA7iAIBEASIg8CGIgMBLg");
	this.shape_63.setTransform(65.6,417);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DE8089").s().p("AgKAZIgWgRIAXgmIAqgDIgYA4IgTALg");
	this.shape_64.setTransform(99.7,384.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC414D").s().p("AgVg2QAJgBAJAGIARAtIAIA7g");
	this.shape_65.setTransform(98.7,42.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D45B67").s().p("AgVAsIAVhUIAWgGIgJA9IgTAgg");
	this.shape_66.setTransform(65.7,469.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F4D7D9").s().p("AgbAZIAKg8IgCAAIACgBIAAABIAngNQgEAGAFAFIAFApIgFAug");
	this.shape_67.setTransform(69.9,468.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DD7A84").s().p("AAAgmIAIBLIgIAAIgHABg");
	this.shape_68.setTransform(47.2,421.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D45B67").s().p("AglBCIgWhCIABAAIA/hWIA3BgIgLAhIgpAqIgcACg");
	this.shape_69.setTransform(58.6,427.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CD4551").s().p("AgTAEIAQgvIAdAXIgKAyIgpAOg");
	this.shape_70.setTransform(70.5,460.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D25661").s().p("AAAgfIAWgBIgrBAg");
	this.shape_71.setTransform(89.7,399.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E18992").s().p("AgYAgIAxhEIgCBIIgXABg");
	this.shape_72.setTransform(89.7,392.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC414D").s().p("AgaAVIALggIAOhKIASAVIABATIAJBDIgJBAg");
	this.shape_73.setTransform(66.3,429.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D45D65").s().p("AgvA5IA6iGIAlADIhKCYg");
	this.shape_74.setTransform(70.8,415.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E18992").s().p("AgLgIIAXgaIAABAIgGAEg");
	this.shape_75.setTransform(99.6,38.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E18992").s().p("AgPANIAAACIgIg7IAHgEIAoBig");
	this.shape_76.setTransform(102.7,46.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EFC2C7").s().p("AgKAYIAFgwIAQAIIgUApg");
	this.shape_77.setTransform(163,254.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D45D65").s().p("AgJArIAAhVQAJgCAJAEIAABTg");
	this.shape_78.setTransform(165.4,240.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#ECB3B8").s().p("AgZBEIABhkIAggjIASASIgIBMIABApg");
	this.shape_79.setTransform(44.5,422.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D25661").s().p("AgPAIIAPgXIAQAPQgNAKgHAGg");
	this.shape_80.setTransform(280.6,462.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D1515C").s().p("AgfAnIAehZIAXAGIAHAUQAEALgCAGQgFALgKASIgQAdg");
	this.shape_81.setTransform(276.8,476.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D25661").s().p("AgUAAIAZgWIAQAsg");
	this.shape_82.setTransform(120.3,70.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E7A2A8").s().p("AgOBDIAAiFIAJgqIAUAYIgXDBg");
	this.shape_83.setTransform(95.2,81.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC414D").s().p("AgsBLIhLheIBlAtIBhjfIApAlIgDAzIgqAjIgWA3IAAAAIgcATIgLAYIgJAqIgEAEQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAADAEAOIAABAIgNAsg");
	this.shape_84.setTransform(93.1,67.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D55F6A").s().p("AgKgSIAMgFIAIAeQACAJgCAIg");
	this.shape_85.setTransform(253.2,462.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D55F6A").s().p("AgLgrIAXACIgGBSQgGADgHAAg");
	this.shape_86.setTransform(260,467);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC404C").s().p("AgagnIALgIIAqABIAAAVIgZBJg");
	this.shape_87.setTransform(253.7,399.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F4D7D9").s().p("AgfAiIAHhSQAKABAHgFIAnAGIgYBjg");
	this.shape_88.setTransform(263.9,467.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC404C").s().p("Ag1AcIAAhVIBsBrIgLAIg");
	this.shape_89.setTransform(246.5,389.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D04B57").s().p("AgKALIAVgVIAAAVg");
	this.shape_90.setTransform(58,189.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E18992").s().p("AgQAAIABAAIgOgXIAuABIANAug");
	this.shape_91.setTransform(79.4,166.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D04B57").s().p("AggAVIBBgqIgrArg");
	this.shape_92.setTransform(66.7,181.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DE8089").s().p("AgOgYIAyAUIhHAdg");
	this.shape_93.setTransform(78.1,177.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D04B57").s().p("AggAfIBBg9QAAAFgBAIIgVAxg");
	this.shape_94.setTransform(73.4,176.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DE8089").s().p("AAAgVIAsABIhXAqg");
	this.shape_95.setTransform(70.1,181.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#ECB3B8").s().p("AjtDcIgQgXIATkYIBVhWIAtgXIgBABIDyg1IAkAqQgFAGAGAEIBQAsIgBABIgKBCIhCA+IhDArIgrArIisCyg");
	this.shape_96.setTransform(52.4,181.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D86B75").s().p("AnvHKIgTgiIgUh1IABgYIARABIAthZIgBAAIABgBIAAABIAZgSIApgwIAAAAIAWgWIAZgRIFBgRIDGgGIDwApIAEgZIiFgSIjwgtIiYgpIgtABIgqgXIgbgoQABgIAEgLIgWgdIAAABIgBgCIABABIgXgsIABABIgegtIgHABIgHgBIABgrIAYjEILrIAQAOAKAYAIIAqANIhBDGQjPgHkDA7QhAAQmDBrg");
	this.shape_97.setTransform(126,118.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC404C").s().p("AgCgIIAIAJIgLAJQAAgKADgIg");
	this.shape_98.setTransform(267.8,251);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CB3D49").s().p("AhNgFIA+gIIBdAbg");
	this.shape_99.setTransform(218.2,257.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D1515C").s().p("AABg1IASAAIglBrg");
	this.shape_100.setTransform(210.2,279.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DE8089").s().p("AgqAeIAqhqIAWgBQAlAsgdApIgdAiQgPAVgFAPg");
	this.shape_101.setTransform(238.8,275.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CD444F").s().p("Ag0AzQAFgPARgVIAdggQAbgrgjgsQAsgTAMAZQAFAJACAwIhABuIgrAsg");
	this.shape_102.setTransform(242.1,277.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EDB8BD").s().p("AhUBaIhCgGIgBABIAnhsQAvg4BMgIQAugFBfAFIgrBqIgfA+IhjAJgAgqgWIgVAVIgPAIIAMAOIBYADIAjgwIgPgXg");
	this.shape_103.setTransform(223.5,276.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DA6D78").s().p("Ah3BJIBChuIBOhbIBfAyIhXDCIiOANg");
	this.shape_104.setTransform(253,277.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D45B67").s().p("AgeAKIAtgrQAJgBAIACIgKBDg");
	this.shape_105.setTransform(187.4,492);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DE8089").s().p("AgtgFIAYgfIBCAdIgtArg");
	this.shape_106.setTransform(184.4,489.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D1515C").s().p("AgbBEIAhiIIAWAZIgZBwg");
	this.shape_107.setTransform(235.7,436);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CC414D").s().p("Ag3AKIBChAIAXABIAWBqIhaAAQgFACgIAAg");
	this.shape_108.setTransform(209.2,476.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D04D59").s().p("AgLBpIgRjqIAUAAQAjA6ACBGQABA1gVBOg");
	this.shape_109.setTransform(237.6,418.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CD444F").s().p("AgRBtIgairIABgvIBWABIAABYIgsCBg");
	this.shape_110.setTransform(236.6,394.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D45D65").s().p("AhAA7IhCgXIC+gEIA4hcIAPBKIgCAvg");
	this.shape_111.setTransform(219.2,381.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CC414D").s().p("AhQhZIChAaIh1CYg");
	this.shape_112.setTransform(192.2,508.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EFC2C7").s().p("AhmFTIBbAIIgqjCIAQiZIAAhXIgRhXIAVl0ICFAHQAhBYgDBdQgDBIgcBnQgXBTgIB6QgFBHgGCNQgDAjABAzIABBYIi5CLg");
	this.shape_113.setTransform(218,455.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C93A45").s().p("AgkJOIhFgdQABgHgDgHIgwldIg/lfIBukFIDJiwIAiAWIAGCCIBBAYIAVCDIgWFyIgagcIgcgUQgQgMgEACQhJAuglBEQgjBEAEBTQAFBhARAsQAeBHBSAVQAHAAAGgCIg4A9IhcAFQgHgCgKABg");
	this.shape_114.setTransform(192.7,429.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E18992").s().p("AgWgWIAtgXIAABWIgFAFg");
	this.shape_115.setTransform(155.4,245.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D45D65").s().p("AhEBNIAsifIBdBhIhRgTIAOA/IgtAYg");
	this.shape_116.setTransform(157.5,235.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D1515C").s().p("AgHANIAPgeIAAABIgDAig");
	this.shape_117.setTransform(227,530.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D25964").s().p("AgCAFIgOgIIAggEIgFAIQgDAGgDABIgCAAQgCAAgDgDg");
	this.shape_118.setTransform(158.3,542.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D04D59").s().p("AgdAmIAahTIAhAOIgiBNg");
	this.shape_119.setTransform(169.7,524.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D25661").s().p("AgwgNIAQgaIBQAxIgSAeg");
	this.shape_120.setTransform(167.8,549.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D25661").s().p("Ag2ABIAHgcIBmAVIgJAig");
	this.shape_121.setTransform(190.8,554.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D45B67").s().p("Ag0ghIAbgbIBOBnIgWASg");
	this.shape_122.setTransform(148.2,525.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D04D59").s().p("AgIgKIATADIgVASg");
	this.shape_123.setTransform(187.4,152.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#ECB3B8").s().p("AgIAYIACgxIAKAAIAFAxIgJACg");
	this.shape_124.setTransform(224.6,231.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D45B67").s().p("AgaAHIArgcIAKAOIgqAdg");
	this.shape_125.setTransform(209.1,174.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E18992").s().p("AgcgGIA0gJIAFAWIg0AJg");
	this.shape_126.setTransform(220.1,203.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E7A2A8").s().p("Ag9gEQAcgrAiALIA9AkIgQAng");
	this.shape_127.setTransform(188.2,127.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D1515C").s().p("AgQB4IAMjxIAVACIAADwg");
	this.shape_128.setTransform(236.4,220.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D45B67").s().p("Ag3haIAogPIBHDFIgmAOg");
	this.shape_129.setTransform(218.4,188.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DC767F").s().p("AAbBVIgMAAIgCAyIg6kNQA9AjAVBSQAUBMgZBMgAAAggIAIgCIgCgcIgMgBg");
	this.shape_130.setTransform(222.3,220.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D76670").s().p("AhXA2IgCgYIBFhqIBvAAIgFBCIABgBIgWAUIiBBEg");
	this.shape_131.setTransform(177.6,154.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D45B67").s().p("AgGA3Qhfgkgsg3IAWgWIgBABIAXgUID3CSQgVAJgcAAQgtAAg6gXg");
	this.shape_132.setTransform(198.7,159.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D45B67").s().p("AAaBhIhdgcIAwifIBXgGIgEDBg");
	this.shape_133.setTransform(223.4,248.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D04D59").s().p("AhhBiIBBjEIABABIAWAAIBsAtIg+CWg");
	this.shape_134.setTransform(183,136.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D25964").s().p("AABgCIABAAIADgCIgJAJIAFgHg");
	this.shape_135.setTransform(177.3,340);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D25964").s().p("AgCgJIAGANQAAACgHAEg");
	this.shape_136.setTransform(136.2,351.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#DE8089").s().p("AAWgKIgCAUIgpABg");
	this.shape_137.setTransform(105.2,380.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D25964").s().p("AgHAJIAOgXIACABIgHAcg");
	this.shape_138.setTransform(176.7,341.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#DD7A84").s().p("AAFgVIATgBIgvAtg");
	this.shape_139.setTransform(157.2,341.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D25964").s().p("AARgWIgcAsIgGABg");
	this.shape_140.setTransform(156,342);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D45B67").s().p("AgUAAIApgQIgBAig");
	this.shape_141.setTransform(140.2,370.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D25964").s().p("AgKgaIAVgWIgKBgIgBABg");
	this.shape_142.setTransform(134.7,357.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D86B75").s().p("AgIgYIANgCIAEAzIgNACg");
	this.shape_143.setTransform(123.8,368.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D55F6A").s().p("AgUgEIAmgGIADAQIgmAFg");
	this.shape_144.setTransform(125.9,360.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CC404C").s().p("AgsgDIAZgTIA/ACIgBATIhUAYg");
	this.shape_145.setTransform(210.3,289.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D25661").s().p("AgcgQIA4AIIACARIg7AJg");
	this.shape_146.setTransform(145.3,370.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C93A45").s().p("AgcADIAmgsIATAJIguBKg");
	this.shape_147.setTransform(177.6,306.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D86B75").s().p("AghANIAAAAIgHglIBOAPIADAig");
	this.shape_148.setTransform(197.3,363.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D25964").s().p("AAgg2IABABQADAygKAUQgOAhgtAFg");
	this.shape_149.setTransform(141.3,360.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D25964").s().p("Ag7ANIBogyIAPAcIhrAvg");
	this.shape_150.setTransform(161,351.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E7A2A8").s().p("AgvAjIA/hcIABgBIAfAkIAAAAIAAAmIhBAqg");
	this.shape_151.setTransform(133.1,368.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D86B75").s().p("AhgAJIAVgoIBUgaIBYACIhVBxg");
	this.shape_152.setTransform(213.7,294.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#DE8089").s().p("AgugiICsg3IAEABIjJCuIg6AEg");
	this.shape_153.setTransform(189,379.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E28F97").s().p("Ai1gJIE0hVIA2BuIABAAIgBABIAAgBIk2BPg");
	this.shape_154.setTransform(175.6,362.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CC404C").s().p("AifGUIgEgCIgFhQQgdh+AZiCQAXhwBCh+QAMgXAPgkIAag7IBUhzIAAgUICDAUIAAAAQhIA5gZAiQgrA5AJBHIgtASQgYALgFANQgZBDgdBcIgzCjIgCADIgLAbIANDag");
	this.shape_155.setTransform(218.1,329.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E28F97").s().p("AicB7IBAAgIA7h1QAhhEAagsQATghAfgtIA2hLIA5AvIALAoIiGEHIgYASIgCABIgTACIgiAvIgbARQgQAKgMACQgZAEgmACIhAACg");
	this.shape_156.setTransform(155.8,325.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D86B75").s().p("AihhOICdgKQBagFBBgCQAHgBAMAQIATAaIgVBsIABgBIgBAWIgYASIlMAEg");
	this.shape_157.setTransform(191.3,279.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D04B57").s().p("AiDDmIABgaIAtldIAVhAIAshZIgBAAIAVgsIAWAAIBuAyIgZA6QgPAlgMAWQhDB+gUBwQgaCCAdB+IhQgQIAHAog");
	this.shape_158.setTransform(201.6,330.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D04B57").s().p("AEjAGIrYBOIAUg/IAVgdIAYg5IgBAAIABgBIAAABIAqgCIAEACIATgBIGyhBIBmgOQA5gGAtAAQAWgBAgALIA1ATIixETg");
	this.shape_159.setTransform(140.4,388);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EDB8BD").s().p("AhGCpQAogxACgNQABgOgigXIgZg3IAPiXIBEgvQA2AbAOBDQAIAlAJBMQAGAXgBAkIgDA9IiNAoQgDgKgKgFg");
	this.shape_160.setTransform(125.1,309.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D55F6A").s().p("AgKgGIAHgGIAOAOIgKALg");
	this.shape_161.setTransform(75.8,280);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CC404C").s().p("AgSAAIAUgVIARAUIgSAXg");
	this.shape_162.setTransform(98.1,271.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D55F6A").s().p("AgVAVIACgCIANgoIAcABIgpAnIgBADg");
	this.shape_163.setTransform(59.2,287.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CE4853").s().p("AgKAWIAEguIARAYIgLAZg");
	this.shape_164.setTransform(67.1,291.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D55F6A").s().p("AgTATIgDgeIAKgLIAjAtg");
	this.shape_165.setTransform(78.2,282.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E28F97").s().p("AgXAKIAhgfIAOAQIgkAbg");
	this.shape_166.setTransform(103.4,279.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D55F6A").s().p("AgUAAIApgWIgDAtg");
	this.shape_167.setTransform(94,297.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D55F6A").s().p("AgaANIAeghIAXATIgrAWg");
	this.shape_168.setTransform(75.9,295.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D76670").s().p("AgTAXIATg1IAUAWIgUAng");
	this.shape_169.setTransform(96.1,274.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#DE8089").s().p("AgVgdIAOgGIAdA6IgWANg");
	this.shape_170.setTransform(65.9,256.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CC404C").s().p("Ag2ABIAYgVIBVAdIhcAMg");
	this.shape_171.setTransform(103.8,269);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D25661").s().p("Ag0AlIAAg5IA8gQIAtAcIhCAtg");
	this.shape_172.setTransform(119.3,292.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D76670").s().p("AAAgrIAcALIgOA6IgpASg");
	this.shape_173.setTransform(110.1,313.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D1515C").s().p("AhOALIBgguIAtADIAQAUIgiAUIhoAcg");
	this.shape_174.setTransform(74.3,288.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#DC767F").s().p("AgWAGIgXgSIAZgrIAggVIAiAoIgWBVIgCAcg");
	this.shape_175.setTransform(81,294.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D76670").s().p("AAVAzIgEgnIhBgDIgIgBIgegTIACgcIBUgTIAmAYIAxA/Ig+Aeg");
	this.shape_176.setTransform(92,303.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D45D65").s().p("AhYAYIA4hRIAIABIAIAAIADA4IA6gNIAEAHIApAgIidAgIgVgig");
	this.shape_177.setTransform(89.6,310.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D55F6A").s().p("AAEAwIhXgdIBogvIABABIAdgVQAiAXgBANQgCAMgoAxg");
	this.shape_178.setTransform(113.7,321.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CE4853").s().p("AgkBlIAAjKQBDApAFAsQAGAngxBPg");
	this.shape_179.setTransform(62.2,274.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CD4551").s().p("AhSAuQgpgFgMgXQgMgVATghIDSAAIAugMIANASIhUBMIhFACIgYABQgbAAgTgDg");
	this.shape_180.setTransform(94.6,255.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CE4853").s().p("ABhByIgsgfIAOg8IgdgLIgcBZIhUgtIgqghIA/gdICDhsIAnABIgTDkg");
	this.shape_181.setTransform(106.2,307.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#DE8089").s().p("AgKAYIgCgoIAHgJQAIAFALABIgBArIgWABg");
	this.shape_182.setTransform(141.4,484.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D55F6A").s().p("AgVAMIArgYIgCAZg");
	this.shape_183.setTransform(138.2,445.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EDB8BD").s().p("AgYAKIAMgTIAlgIIgrAjg");
	this.shape_184.setTransform(115.5,481.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CD444F").s().p("AgJAAQADgFADgBQADgBAPALIgdADIAFgHg");
	this.shape_185.setTransform(161.6,480.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D25964").s().p("AgQgEIAfgJIACAUIgcAGg");
	this.shape_186.setTransform(169.3,483.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CA3B47").s().p("AgOAPIAQgdIANANIgcAQg");
	this.shape_187.setTransform(111,445.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E28F97").s().p("AgUAUIgDgoIAoABIAHAog");
	this.shape_188.setTransform(83.5,499.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CB3D49").s().p("AgVgVIAnAWQADAJABALg");
	this.shape_189.setTransform(177.5,493);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#DE8089").s().p("AgagTIA3APIg5AYg");
	this.shape_190.setTransform(108.4,486.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CD444F").s().p("AgWgVIAuAVIgvAWg");
	this.shape_191.setTransform(145.2,484.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CD444F").s().p("AgUAVIgCgVIArgUIACApg");
	this.shape_192.setTransform(173.2,482.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D25964").s().p("AgMg0IAZgCIgVBtg");
	this.shape_193.setTransform(163,435);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CA3B47").s().p("AgngUIBPAaIhOAPg");
	this.shape_194.setTransform(98.2,444.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C93A45").s().p("AgFAVQgFgLgCgIQgBgGABgNIACgVIAOADIAKBFIgLAFIgIgSg");
	this.shape_195.setTransform(84.7,453);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D25964").s().p("AgUgfIApABIAAApIgoAVg");
	this.shape_196.setTransform(87.4,439.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C93A45").s().p("AgNAyIAZhmIACA+IgDArg");
	this.shape_197.setTransform(141.1,432.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#C93A45").s().p("AgbgcIAUgQIAiAaIABA/g");
	this.shape_198.setTransform(82.5,438);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D25964").s().p("AgBhBQAaBFgDAZQgEAZgnAMg");
	this.shape_199.setTransform(122.9,462.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#C93A45").s().p("AgOAuIAbhiIACBUIgFAVg");
	this.shape_200.setTransform(103.8,434.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CB3D49").s().p("AhXAIICsgPQAAAAAAAAQAAAAABAAQAAABAAAAQABABAAABIABAEQAAACgEAGg");
	this.shape_201.setTransform(127.3,476.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E18992").s().p("AggAVQgGgGAFgGIAKgzIAyAFIAJA5IgsAXg");
	this.shape_202.setTransform(75.6,462.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CA3B47").s().p("AgPA4IALhwIAUBWIgJAbg");
	this.shape_203.setTransform(151.8,433);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#DA6D78").s().p("AgVAXIgJhCIA8AAIABBXg");
	this.shape_204.setTransform(71.3,429.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D1515C").s().p("AgXAVIgUg+IBUgCQADAIAAAGIgXAdIgFAsg");
	this.shape_205.setTransform(177.6,488.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D25964").s().p("AgeggIA9gVIAABqIgmABg");
	this.shape_206.setTransform(154.4,430.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D25661").s().p("AAnhBIgpCCIgkACg");
	this.shape_207.setTransform(79.2,416.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C93A45").s().p("AgWAbIgBgoIAHg2IAiAJIAFA+IgBBAg");
	this.shape_208.setTransform(92,437.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C93A45").s().p("AgYAFQgBgjAZg4IABAWIAYCXQgvgigCgwg");
	this.shape_209.setTransform(94.1,455.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D25661").s().p("AgKhsIAVAAIgCDZg");
	this.shape_210.setTransform(134.7,458);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D25964").s().p("AgRBHIgXiXIBRChg");
	this.shape_211.setTransform(98.5,457.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D45B67").s().p("AADBgIgWisIAVgXIABAAIARDDQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFACg");
	this.shape_212.setTransform(109.2,457.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C93A45").s().p("AgVg9IAlgEIAGCDg");
	this.shape_213.setTransform(116.5,436);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D25964").s().p("AgVBBIAViXIAVCsIgqABg");
	this.shape_214.setTransform(131.5,436.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D45B67").s().p("AgmBCIgFiDIBXBsIABAXg");
	this.shape_215.setTransform(122.7,436);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CB3D49").s().p("AgohcIA5ANIAYCsg");
	this.shape_216.setTransform(105.4,457.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C93A45").s().p("AgTBMIgBgWIApiBIgVCXg");
	this.shape_217.setTransform(129.3,435);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CC404C").s().p("AijAWIAWgVIEZgWIAYAVIgsAWg");
	this.shape_218.setTransform(126,490.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#CA3B47").s().p("AgfhIIABgcIArAGIATBtIgEBWg");
	this.shape_219.setTransform(143.5,454.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CD4551").s().p("AhmgTIDOgWIgCApIgZAAIiXAUIgVAWg");
	this.shape_220.setTransform(95.3,488.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#D25964").s().p("AgfBCIABiaIA+gTIAABrIgsBsg");
	this.shape_221.setTransform(156.6,453.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#C93A45").s().p("AAAAhIgWhCIAAhsIAoAtIAEBrIgWCDg");
	this.shape_222.setTransform(159.8,439.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CA3B47").s().p("Agfh2IAqgCIAAAXIAUDag");
	this.shape_223.setTransform(132.5,456.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#CA3B47").s().p("AgbgYQgBg0AfghIAZBZIgBgBIgTCDQgihXgBgvg");
	this.shape_224.setTransform(119.8,458.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DE8089").s().p("AguAFIgGgDIAFgsIATgUIAtgYIAkCsg");
	this.shape_225.setTransform(77.6,473.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#DC767F").s().p("AgGBiIgQgeIgQgtIgHg8IAdhGIAQATIAtCyIAAgBIAAABIAAAAIgSASg");
	this.shape_226.setTransform(183.9,508.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EDB8BD").s().p("AhSA5IgDABIAXguIgBACIBbiVIA6gEIhsEEIg7ATg");
	this.shape_227.setTransform(173.1,401.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#DE8089").s().p("AgECDIAKgHIgDABIg9kTIBFgXIAwFbIg9AAg");
	this.shape_228.setTransform(175.9,466.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#DE8089").s().p("Ah+gLIAtglIAEgQICrAAIAzAkIgIAJIg5AOIADAQIA4AKIACABQAAALgEAIIkZAYg");
	this.shape_229.setTransform(126.3,484.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DC767F").s().p("Ag+ghIABAAIADiGIA6gTIA/FeIhGAXg");
	this.shape_230.setTransform(170.7,432.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#DA6D78").s().p("AmZAmIAAAAIAsg/IAAAAIAshCIAugBILYhOIgeCTIACgCIgXAsIADgBIg6BZIsfBAg");
	this.shape_231.setTransform(124.2,405.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D55F6A").s().p("AgKgCIATgHQADAJgBAKg");
	this.shape_232.setTransform(274.9,397.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#CE4853").s().p("AgHACIAFgFIAKAHg");
	this.shape_233.setTransform(284.9,351.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#D1515C").s().p("AgkgqIA6AYIAPApIhAAUg");
	this.shape_234.setTransform(272.3,385.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DD7A84").s().p("AALApIgrgsIABgWIAAAAIBAgUIgDBTIgUAIg");
	this.shape_235.setTransform(272.7,392.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#DD7A84").s().p("AhbAhIAZhWIAuAGQAoBYAphZIAWgCIAJBVIg8gZIgbABIhdArQgBgMgCgJg");
	this.shape_236.setTransform(265.4,380.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#DA6D78").s().p("AhzA/IBXjDIBlAVIABASIAqAFIhkDdg");
	this.shape_237.setTransform(268.1,282.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#CC414D").s().p("AhqExQACgJgCgJIgDpIIAZhMICsACIgBAFIAXAOIAAAXIiUAAIAJB/QAGBIAFAtQAKBWAfEEIgCAbIgogGIgflYIgLAAIAAFaIAEBag");
	this.shape_238.setTransform(265,434);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D04B57").s().p("AhMgzQgFgtgGhIIgJh+ICUAAIAtIhIiCAsQghkDgKhXg");
	this.shape_239.setTransform(270.8,430.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D04B57").s().p("ABjG9IgsnKIAAkvIgVABIAAEuIAKBVQAGAzgBAiQAAA2gGBQIgKCFIhAgsIhCjFIgtjwIABACIgXgtIABABIgagsIg9gtQgIhIAqg5QAZghBIg5IAsgsIAKA5ICOgOICFBGIApKFQACAcgBArIgCBHIgWACIgUgGIhBAAIACAHgACCk0IgNAFIAWAWQAMgNADgGQgHgKgEAAQgGAAgHACg");
	this.shape_240.setTransform(248.6,330.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D04B57").s().p("AgoAHIBRgRIg+AVQgLgBgIgDg");
	this.shape_241.setTransform(59.1,110.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#DA6D78").s().p("AieE8IgmgoIgsgZIhChBIgWhDIHJiRIAAkMIBAgWIAaAAIBCAnQAKAEAJABIAYCwIgBBBIgOAIIANAMIABAWIgYAsIgRgCIgwAtIhFAVQgpANgbALQgbALgkAVIg7AiIABgBIgtAXIhVBWg");
	this.shape_242.setTransform(43.9,141.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D04B57").s().p("AgGgIIAOAHIgKALQgEgKAAgIg");
	this.shape_243.setTransform(24.6,104.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D55F6A").s().p("AAGgLIADAWIgRABg");
	this.shape_244.setTransform(16.6,62.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#CB3D49").s().p("AAAgHIAIAMIgPADQAAgIAHgHg");
	this.shape_245.setTransform(61.6,16.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D55F6A").s().p("AAMgUIABAUIgZAVg");
	this.shape_246.setTransform(18.4,59);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D76670").s().p("AgMATIAZgoIgCArg");
	this.shape_247.setTransform(7.3,120.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CB3D49").s().p("AgJAIIATgpIgQBDg");
	this.shape_248.setTransform(59.9,20.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CE4853").s().p("AgLgCIAHgnIAQgBIAABVg");
	this.shape_249.setTransform(16.3,67.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#CC404C").s().p("AgSAjIgCgWIApgwIgUBGIgJABg");
	this.shape_250.setTransform(21.7,55.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#CC414D").s().p("AgXgBIBBACIhTABQAJgEAJABg");
	this.shape_251.setTransform(46,41.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D45B67").s().p("AgWANIAWg7IAXAEIgtBZg");
	this.shape_252.setTransform(6.1,127.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#DE8089").s().p("Ag0AJIBpgWIgDAXIgmAEg");
	this.shape_253.setTransform(48.9,40.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CE4853").s().p("AgMgNIAMgcIANACIgQBRg");
	this.shape_254.setTransform(16.2,85.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CC414D").s().p("AgYBjIADgZIAriuIADAaIgWCvg");
	this.shape_255.setTransform(56.6,31.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D1515C").s().p("AAUERIABABIgrgXIABABIgtgWIABAAIhuhuIgWgsIAAABIgWgtIAWiuIAShEIAPgDIgIgOIBihcIC2AZIAuDFIgBgBIAWBYIAAgBIAsBsIhiDfgADbBhIABgCIgBADgADbBhg");
	this.shape_256.setTransform(79,38.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D1515C").s().p("ABkFlIhCgmIBHgQIA9jQIo6kYIAUhIICzhjIBUgBIAmgEIAeACIAAgBIAWAtIgBgBIAXAsIBrBuIAAAAIAsAWIAAAAIAsAWIAAgBIAAABIAAAAIBKBfIA5DRIAHABIAHgBIAeAtIgBgBIAXAtIAWAcQgEALgBAIIgRAog");
	this.shape_257.setTransform(62.4,77.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D86B75").s().p("Aj7DcIAZgWIAMgMIgQgIIACABIgXgXIg8hxIAShQIgPgDIgMAcIACikIAZAvIAAhXIgCgZIgDABIAbgVIALABIALgBII5EYIg8DRIhHAPIgaAAIhTATg");
	this.shape_258.setTransform(47,85.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D04B57").s().p("AgMgIIAFgEIAUAUIgFAFg");
	this.shape_259.setTransform(14,161.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#CB3D49").s().p("AgKgHIAbABIghAOg");
	this.shape_260.setTransform(287.4,248.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#D25661").s().p("AgHgLIAMgBIADAWIgEADg");
	this.shape_261.setTransform(167.9,158.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#D25661").s().p("AgMgJIAEgCIAVAVIgHACg");
	this.shape_262.setTransform(169.7,161.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D04B57").s().p("AgMgHIAFgEIAUATIgEAFg");
	this.shape_263.setTransform(16.2,163.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#D04B57").s().p("AgLgHIADgEIAVAUIgEADg");
	this.shape_264.setTransform(18.4,165.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#CE4853").s().p("AgIAEIAKgMQAGAIAAAJg");
	this.shape_265.setTransform(111.4,47);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D25964").s().p("AgDAXQgHgGgGgKIAfgeIACAZIgJAWg");
	this.shape_266.setTransform(92.5,385.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D1515C").s().p("AgRAFIAFgfIAdA1g");
	this.shape_267.setTransform(170.1,236);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D45D65").s().p("AgTgJQAHABAHAAIAZASg");
	this.shape_268.setTransform(175.6,119.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#CB3D49").s().p("AgdgYIA7ACIgSAvg");
	this.shape_269.setTransform(282.7,251.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CA3B47").s().p("AgUAMIAYgYIARAZg");
	this.shape_270.setTransform(43.8,434.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#DD7A84").s().p("AgbAIIA3gPIgBAPg");
	this.shape_271.setTransform(58.7,406.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#D55F6A").s().p("AAFAKIgYgVIAnAXQgIAAgHgCg");
	this.shape_272.setTransform(173,117.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DD7A84").s().p("AgUgEIgBgPIArANIgDAag");
	this.shape_273.setTransform(105.1,335.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CE4853").s().p("AgUAVIAUgqIAVArg");
	this.shape_274.setTransform(68,453.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D1515C").s().p("AgUgYIAZgDIAQAXIgCAgg");
	this.shape_275.setTransform(26.4,204.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D55F6A").s().p("AgHAYIgDgwIAVADIgGAug");
	this.shape_276.setTransform(38.4,418.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DD7A84").s().p("AAKgmIAAA/IgTAOg");
	this.shape_277.setTransform(58.2,195.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CB3D49").s().p("AgRgEIgBgPIAlAmIgRABg");
	this.shape_278.setTransform(26,171.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D04B57").s().p("AgWgPIADgDIAqAXIAAAOg");
	this.shape_279.setTransform(21.8,168.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#D25964").s().p("AgcgdIAYgCIAhA9IgcACg");
	this.shape_280.setTransform(65.9,310.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#D45D65").s().p("AgagUIAWgDIAfAtIgXACg");
	this.shape_281.setTransform(62.5,304.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#DE8089").s().p("AgegBIAVgWIAoABIgPAug");
	this.shape_282.setTransform(66.8,458.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D25964").s().p("AAtgGIgBAGIhXAIg");
	this.shape_283.setTransform(199.3,523.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#D04B57").s().p("AgfgSIAkAQIAcAVg");
	this.shape_284.setTransform(84.4,514.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CB3D49").s().p("AgggFIAmgGIAbAKIgEANg");
	this.shape_285.setTransform(185.4,259.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EDB8BD").s().p("AgNAAIAUgSIAXAUIg7ARg");
	this.shape_286.setTransform(172.2,260.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D25661").s().p("AgNgrIAYADIADAoIgUAsg");
	this.shape_287.setTransform(79.9,501.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#D04B57").s().p("AgVggIAWgCIAVBBIgEAEg");
	this.shape_288.setTransform(10.9,156.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#D55F6A").s().p("AgVAIIArgyIgoBWg");
	this.shape_289.setTransform(78.7,402);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#D25661").s().p("AgWAGIAsgmIAAAYIgWAmIgUADg");
	this.shape_290.setTransform(96.4,382.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#D55F6A").s().p("AgggdIAZgFIAoBCIgWACg");
	this.shape_291.setTransform(58.6,298.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D1515C").s().p("AggAKIBBgzIgcAwIghAjg");
	this.shape_292.setTransform(44.9,415);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E7A2A8").s().p("AgcAAIAKgjIAvAbIgGAmIABgBIgBACIAAgBIgVAGg");
	this.shape_293.setTransform(65.6,461.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#CC404C").s().p("AgMAoIAVhTIAEApIgJAug");
	this.shape_294.setTransform(233.2,177.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#D25964").s().p("AgPglIAQgFQAIADAJgBIgjBTg");
	this.shape_295.setTransform(63.2,409.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#D25964").s().p("AgdAsIA7hXIglBYg");
	this.shape_296.setTransform(51.6,232.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#D76670").s().p("AgogrIAcgCIA0BYIgbADg");
	this.shape_297.setTransform(70.1,317.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#D45D65").s().p("AAugnIAGAWIhnA5g");
	this.shape_298.setTransform(69.7,210.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#D86B75").s().p("AgkgtIBBAbIAAgBIABABIgBAAIAIA7IgZAFg");
	this.shape_299.setTransform(53.9,291.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D76670").s().p("AgeAiIAihJIAcAoIg/Ang");
	this.shape_300.setTransform(207,518.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CC404C").s().p("AAABUIgGAAIgDiqIATAAIgECtg");
	this.shape_301.setTransform(45,258.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DD7A84").s().p("AhJgYICTAlIh/AMg");
	this.shape_302.setTransform(154.8,225.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#D04D59").s().p("AgcgDIALgSIAuAOIgSAdg");
	this.shape_303.setTransform(215.2,527.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D86B75").s().p("AhcgJIC4AGIABANg");
	this.shape_304.setTransform(93.7,334.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#DA6D78").s().p("Ag2ANIBsguIABAXIhnAsg");
	this.shape_305.setTransform(80,205.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#DC767F").s().p("AgSg3IAHAAIAHACIAXBtg");
	this.shape_306.setTransform(46.2,272.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#D86B75").s().p("AhLABICXgZQAAALgCALIiUAbg");
	this.shape_307.setTransform(93.1,201.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D76670").s().p("AgVgrIAAgHIAGgEIAlBXIgrAWg");
	this.shape_308.setTransform(26.2,426.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#D55F6A").s().p("AgGA3Ig2hrIAbgCIBeBtg");
	this.shape_309.setTransform(77.6,327.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#D25964").s().p("AAqg3QAGAKAIAGIABAMIgzBEIg+APg");
	this.shape_310.setTransform(86.5,391.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#CC414D").s().p("AhcAAIAcgVIBbgCIBCAqIgEAFg");
	this.shape_311.setTransform(80.8,6.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#D04D59").s().p("AgRA1IgFhqIAtBrg");
	this.shape_312.setTransform(103.3,29.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E18992").s().p("AgBAZIgqhDIAsAAIArAiIgYAzg");
	this.shape_313.setTransform(46.3,433.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#D1515C").s().p("AggBBIAriBIAWAAIgtCBIgUAAg");
	this.shape_314.setTransform(47.4,243.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#D76670").s().p("AhCALIADggICBAXIAAAUg");
	this.shape_315.setTransform(35,205.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#DD7A84").s().p("AATAbIhEgSQgJABgHgDQASgrAqAGIAiAKQAVAGANgBIAEAhQgBAMgKABg");
	this.shape_316.setTransform(70.1,404.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#D1515C").s().p("AgrAoIAahnIA8BRQABAKgBAKIgrAYIAAgBIgqADg");
	this.shape_317.setTransform(103,375.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#CC404C").s().p("AgnArIgcgXIAuhAIBYBZg");
	this.shape_318.setTransform(91.7,512.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#D04D59").s().p("AgIALIgqggIgCgpIAJgBIAJAAIAqAVIAAgBIABABIgBAAIAXBBIAQAUQAEAMACAIIhUABg");
	this.shape_319.setTransform(51.6,431.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#DE8089").s().p("AgFA3IgagDQgIgCACgJIA1hgQAIAEAHAAIAHA+IgDAtg");
	this.shape_320.setTransform(81.7,491.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#CC414D").s().p("AgjheIADgFIBEBaIgbBtg");
	this.shape_321.setTransform(93.5,18.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E28F97").s().p("AhuAJQACgJAAgLIDbAXg");
	this.shape_322.setTransform(111.7,200.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D45D65").s().p("AATAAQghgKgdApIgWAAIgWhCICvARIgHA2Ig+gkg");
	this.shape_323.setTransform(186.3,123.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D25661").s().p("AgfBhIAAh+IAmhwIARgBIAIACIgTEYIgZACg");
	this.shape_324.setTransform(25.6,187.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#CE4853").s().p("AAIBkIgOguIhDiaICTDFIhCAEg");
	this.shape_325.setTransform(121.6,62.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#CD4551").s().p("AgDA1QgigIgvhKIAwgYIB6BCQgwApggAAIgJgBg");
	this.shape_326.setTransform(32.2,435);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#DC767F").s().p("AgMBfIAAABIgWhXIABAAIAchtIAjBDIAFBqIgFACIgaAaQgHgHgJABg");
	this.shape_327.setTransform(97.9,27.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#DD7A84").s().p("AggAvIgThCIAWgrIAsAAIATAYIASAeIgCAIIguA/g");
	this.shape_328.setTransform(84.4,508.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#D04D59").s().p("AhWBEICViaIAXAAQACAGgBAGIgUBMIgZASIiABDg");
	this.shape_329.setTransform(50.4,199.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D25661").s().p("AgqiEIARgPIANA1IAOgwIARBHIgUBTIAQAEIAJguIATBtIgiBFg");
	this.shape_330.setTransform(232.1,180.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#D25661").s().p("AhuhdIBDgEICaDEg");
	this.shape_331.setTransform(133.5,82.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E28F97").s().p("AgSBZQgsgHgGg/IAlhtIAfAkIgXBUIAPAEIATghIAzAYIAHAEIgEA6QgjAEgYAAQgOAAgKgCg");
	this.shape_332.setTransform(65.9,470.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#CB3D49").s().p("ABKhhIAEApQACAZgDARQgDAWgJAhIgQA5Ih/AAg");
	this.shape_333.setTransform(205.2,246.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#DA6D78").s().p("AgYBSIgchrQgBgJgEgLIAegCIAngpIAuBBIgEBxg");
	this.shape_334.setTransform(62.3,440.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D04D59").s().p("AhwAuIBGgWIAQhcIAaAHIBBgXIAwACQg0CQisAXg");
	this.shape_335.setTransform(217,547.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#ECB3B8").s().p("Ag0BNIgJhMIgSgRIAdgxIBKghIA4ABIgBBCIgWAqIg/BYg");
	this.shape_336.setTransform(53.4,417.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#DE8089").s().p("AAHCCIgcgWIAAABIgBgBIABAAIgXgsQgEgKADgHIAEhwIAJhBIA0AVQAFAoAUBPQAKBHgnAyg");
	this.shape_337.setTransform(72.4,445);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#ECB3B8").s().p("AhvAJQADgUAcg3IA2gGIACgHIAGAHIBBgHIBBBCIgFAeIgTADQgLgEgJABIhWhZIgIAAIgqCYQgvgcAEgrg");
	this.shape_338.setTransform(157.5,234.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#DE8089").s().p("Ah4BvIAQg5QAJghADgWQADgRgCgZIgEgpIAngaICxAlIgqALIhXAGIgwCfIg9AIg");
	this.shape_339.setTransform(222.3,245.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#D55F6A").s().p("AAwAFIi4gaIAfheQAGA/AsAHQAaAEA5gGIAEg6IBlBRIAEArIg3Bhg");
	this.shape_340.setTransform(69.6,484.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#ECB3B8").s().p("AhpCQIgBgTIBMiYQALgCAAgLIAphYIgDgBIBAgOIAYAFIgVBBIAAAAIgsBCIABAAIhNCEQgIAIgBALg");
	this.shape_341.setTransform(78.8,410.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D1515C").s().p("AByBOIiOgWIhqh2IBPgOIC9B1IABARQgDAIgBAMg");
	this.shape_342.setTransform(253.9,244.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#D76670").s().p("AgmAsQgKACgLgFIADgxIgqhkIAAhBIAFgCIArABIA5BvIgKAOIAQAFIgDAAIAWAsIAAAAIBECaIgbAWg");
	this.shape_343.setTransform(110.9,52.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E28F97").s().p("AgZBdIAXgrIgTgHIgFAyIguhAIAGgFIAAhXIAAABIgRhBIBSAUIAAAAIABABIgBgBIAABYIASAAIAAhWIATgCIAkAWIAMAZIAACrIgXARg");
	this.shape_344.setTransform(164.6,247.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#D04D59").s().p("Ag6AoIgnhWQAtgxAIgFQAhgUAnAfIADAyIAOABIAGgwQAKgFAKgBIAEAfIgBBkIAYAqIgaAaIgIACg");
	this.shape_345.setTransform(34.4,425.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E7A2A8").s().p("AhXAsIAKgbIAphBIgCgEIBRhKIAtDVIhxAog");
	this.shape_346.setTransform(110.1,364.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#CC404C").s().p("AguijQABgaAGgmQAJgqADgVIAeAAIA6FzIhvB8IgKBWQAKlsAEhag");
	this.shape_347.setTransform(235.7,472.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#CC404C").s().p("AiwACIBagtIAZhlIACgbICCgsIBpAAIgNClIhZDeIATALIg3AhgAACAaIAfAMIARgdQAKgQAFgNQACgGgDgLIgIgUIgZgGgAA4iOIAKAIQAJgFANgNIgSgPg");
	this.shape_348.setTransform(273.4,477.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E18992").s().p("AGoFfIgpgNQgZgIgOgKIrroAIgVgXIALgYIAbgVIABgBIAWg2IAqgkQALAFAKgCIBwCFIArAXIAAACIDcC/ICFCCIgCAAIAYAXIgBgBIAWAWIgBAAIAiAXIAGgDIBKBEIAoAWIgBgBIACABIgBAAIAWBDg");
	this.shape_349.setTransform(137.1,91.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#DD7A84").s().p("AiOBCIAZhwQAVhOgBg3QgBhGglg6IAriEIBhAfIAeBZIADJIIgIggIgOAGIAWAsIAxBEQAIAAAHgDIApATIhaAvIiJAZg");
	this.shape_350.setTransform(250.4,436.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#CD4551").s().p("ApDDAQABgFgCgGIAAgXIArgrIAWAAICihKIg0gUQABgHAAgGIAKhAIAvAYIgMgwQGBhsBBgPQEDg7DQAGIAXABIhFBrIgPABIgngLQgYgGgOADQk+BOjKBQQkTBqjMCag");
	this.shape_351.setTransform(117.3,172.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#D04D59").s().p("AGFB9IgBgSIhogVIhggyIhPBbQgDgwgEgJQgNgZguATIgXABQhdgFguAFQhOAIgvA4IgSAAIgUgaQgLgPgHAAQhBAChcAGIidAJIg8haICCggIA/ARIADgNIgbgKIBxgTICAgBIADABICdAUIAlAAIFhhBIASAAIAOgJIgKgLIgBgRIB6ACIArA0IATgxIgBAHIAjgRICWBtIj1CVg");
	this.shape_352.setTransform(236.7,260.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E28F97").s().p("AkfKUIgNgtIBGgNIAkAKIASgTIAAABIB2iaIijgaIgrgpQgBgLgDgJIAEgtIAtAsIA2AZIAKhFIBfgFIA3g9IBaAAIAUBVIhbgIIgZDQIC5iKIgBhZQgBgzACgjQAHiNAEhGQAJh6AXhUQAchnAChIQAEhdghhYIiHgHIgUiEIDDACIAaCtIAQDtIgjCKQgDAVgIAqQgHAngBAZQgEBYgJFvIgTAzIgUAWIABgBIgtAXIgWAfIhZA0IgcgqIgiBLIhaAQIhbAlg");
	this.shape_353.setTransform(206.3,457.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#CA3B47").s().p("AjQIBIgVBmIgSADIgfjPICPgoQA5ABAnglQAYgYAdg9IBMiaIhChKIBMgpQAehAhpicQhoifhrguIB3jqIBEAmIAUA0QgaA3gCAWQgEArAtAcIAZAGIApBGIAuA/IABABIBYAjIgQAVIA8BaIgcCwIgjCDIg1BMQggAtgTAgQgaAtgjBFIg5B1Ig/gfIgqBpIgCAwIgWAVg");
	this.shape_354.setTransform(147.2,287);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#CC404C").s().p("AgsCuIlElvIkRgVQARgEAigKQAegIAUAAQCrgBIAABIAQAeIhGANIAMAtIBTAmIhkAwIAEAnIEIAcIBih2IApAbIASgfIgwgOQAQgHAggSQAcgOATACQALAAAOAbIAZAtIgRAgIAOAFIADgkQAjASABASQABARggAtIgwgCIhCAXIgbgGIgQBdIhFAWIAAAoIhgBAgACzCiIBmAbIAJgkIhngWgAgqBZIBNA3IATgeIhQgzgAhpAfIANAKQAGAEADgBQADgBADgFIAGgKgAjyikIBVBgIAWgSIhQhpgAgFhpIAXAIIAkhPIgjgPg");
	this.shape_355.setTransform(167.2,538.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#CC404C").s().p("AB7HnIAqgLIixglQgGgygGhwQgGhqgIg3Qgei3h9hoIAYgVIhpgYQg+gOgpgLQgUgFgdgMIgvgTIAGgBICDhEQAsA4BeAlQBjAmA4gYIj5iUIgVgDIADgrIBOjBIAGg4IEBFAQALANAYALIApATQAvAagJA2IgQAwIgOg1IgQAPIA0EZIAihDIA5CpIgNDtIBLBGIhPAPIBpB3ICQAWIljBCgAA5G4IAKACIAJgCQAahMgUhOQgVhSg9gjgACnGlIAjABIAAjyIgWgCgAgFCAIAEAYIA0gJIgEgYgAgyhvIBJDEIAmgOIhHjFgAhyiXIALAPIAsggIgKgNg");
	this.shape_356.setTransform(217.9,190.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#CD444F").s().p("AnnHNIACgXQABgJgBgKIB0gpIgujXIhTBLIAph+IgghWIAEgaIA2gCIANhSIAnABQAKAFACAKIAfDMIASgDIAVhlIBKCmIALBNIhBBdIAeAYIBDgrIAAgnIAAAAIgfgkIAKhiQAIgEAAgBIgHgPIABgaIBAgDQAlgCAagDQAMgDAQgJIAbgRIAFgCIAxgxIAZgSICGkHIAwhNIgTgJIgoAuIg6gvIAjiEIFOgDIADAcIgVAqIgWAAIgXAsIAAAAIgsBZIgUBAIgtFdIgBAZIk3BWIA0BqIE6hPIBLAMIACAtIiuA3Ig1gTQgggLgWABQgsAAg6AHIhkANIm0BCIgTABgAizFdIArATIA8gJIgCgTIg5gIgAlLEwIAEA1IAPgBIgEg1gAi0E2QAvgGAOghQAJgWgDgyIAWgXIgXAWIhCBwIAAAAgAlBD1IACAQIApgEIgDgSgAgKC1IAKAZIBtgxIgPgcgADPA2IgKAQIALAGIAGgeIgHAIgADPA2IAJgNIgJANgAjJCwIAAAAIgBABgAjJCwIAAAAg");
	this.shape_357.setTransform(156.1,335.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E28F97").s().p("ABbJkIADg8QABgkgGgXQgJhOgIgmQgOhCg4gcIgrgcIA4inIgjgeIikBnIgOgQIAxhKIhYgfIAogjIgqgcIBUhOIgNgSIguAMIh3hRIADhhQACg6AOgjQAuh1AjgoQA/hHBtAQQAJACAOgJIAXgPIBVAgIAXAiIAAAAIBCBuIgBgBIh3DqQBrAvBqCcQBpCcgeBBIhMAqIBCBKIhLCaQgfA9gZAYQglAlg2AAIgEgBg");
	this.shape_358.setTransform(124.4,262.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#EFC2C7").s().p("ACqKPIi3gGIgGACIhghvIhZiaIhMhyIgIg9IhDgbIACgFIgXhOIABABIgZhtIAEiuIAviDIAnhaIgBAAIBZh5IABgJIAJgBIBpg7IBpgvICVgcIDeACIgXAPQgOAJgJgCQhtgQg/BHQgjAoguB1QgOAjgCA6IgDBhIB3BRIjSAAQgTAhAMAXQAMAXAnAFQAcAEAqgCIBHgCIAqAeIhUBPIgVA2IATAIIAWgoIASgZIBegMIgxBKIgjAhIALAMIAmgdICkhnIAlAeIg6CnIg+AQIAAA7IiEBsIgxhBIACgvIgqAXIhTATIAWhXIhmh7IgHAFIAMAVIADAhIhiAwIgFAwIALADIAMgaIBrgcIgZArIggAjIAKAJIAtgYIAtBHIAdAVIg3BSIAWAiICcgfIBXAsIArgRIArAeIhqAwIBZAdIgOBSIg2ADgAkQCmIgOArIArgqQAzhPgGgpQgFgrhFgogAjciNIAWBDIAWgNIgfg8g");
	this.shape_359.setTransform(85.8,268.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#D04B57").s().p("AknIhIhahbIACgIIgSgeIgTgYIgHgqIADgtIAVgWICagWIAYgBIA7gZIg5gPIjQAVQgHAAgIgDIgEgtIgujnIgrgEQAngygKhHQgUhRgFgoIgBhZQABgLAIgIINDhCIA5hYIgCDZIAAAAIB2HxIACgBIgLAHIgtAWIghAJIAGATIAdgGIAVABIAVBAIBFBBIgdBGIAHA/IAQAtQoCgBioABQgVAAgeAIQgiAJgRAEIgtgCgAhfCZIgFAQIgmAIIgNAVIAGAIIgSBOIgVAVIEbAAIArgWIgXgXQADgIAAgLIAYgBIAwgWIgvgXQgLgBgKgFIgygkQAEgGAAgEIgBgEQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAgAFKCwQgDACgDAFIgFAJIAfgEQgPgMgEAAIgBAAgAhthEQAAAxAkBVQApgMADgZQAEgZgdhFIABABIgYhZQgiAhACA0gAiJlFIAtCAIBnAAIAAAXIBADvIACjaIgXAAIABgXIgXiuIgpCDIhZhugAi4AqIAJAFIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBIgRjCIAegSIgNgNIgSAfIgXAXIg7gOgAlrg7QABAwAxAgIA8ALIhTiiIgBgXQgcA5ACAlgABNiZIAsABIA9CtIAEhUIgThvIgtgGgAE9jEIhAAUIgBCcIAUAnIAthpIAujzIgcACIgpgtIg/AVIgLByIAYABIAKgbIAogBgAm+hvQgCANACAHQABAIAGALIAJASIAMgEIgKhHIgQgDgAlRiyIAAAZIBQgOIhRgdIACguIgGhAIgkgJIgGA2IgrgBIgkgbIgUARIA5BLIArgVgAkBjkIAaAHIAEgVIgBhWgAByj2IAaADIAEgrIgChAg");
	this.shape_360.setTransform(128.1,462.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#C93A45").s().p("AiTPZIgto7QABgMgEgKIADhVIgPgrIgJhXIAChHQABgqgCgcIgoqFIBkjfIDyiYQAMAjAcBCQAXA8ADArQAZExAdGsIAyLSIkrE2gAhwg1IAQACIgMgJg");
	this.shape_361.setTransform(295.4,357.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#DD7A84").s().p("AgGAMIAAgUIAFgJIAJABIAAAgIgIACg");
	this.shape_362.setTransform(3,130.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DD7A84").s().p("AgHgGQAHgIAIACIgPAag");
	this.shape_363.setTransform(3,141);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#DD7A84").s().p("AgKgVIAVAaIgVARg");
	this.shape_364.setTransform(3.3,135.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E18992").s().p("AgrgIIBWAAIADAQIhbABQAEgJgCgIg");
	this.shape_365.setTransform(78.9,3.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#D45D65").s().p("AgfACIAAgqIARgcIAuCJg");
	this.shape_366.setTransform(5.4,146.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#ECB3B8").s().p("AkABcQgJgCgHAIIAAgWIAXgQIgXgcIAAgWIAHAHIAJgDIAvhZIACgtIAAABIAAgBIAAAAIAWgWIAAAAIBshYIFLArQAIACALABIAAEKInJCTIgXACg");
	this.shape_367.setTransform(29.5,130.4);

	this.addChild(this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,2.2,319,560.4);


(lib.PluginObject_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECB3B8").s().p("AgfAAIAWgVIApACIg9AoQADgLgFgKg");
	this.shape.setTransform(220.1,276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D45B67").s().p("AgeAVQAKgwgCgUIA1BaQgSAFgNAAQgeAAAAgbg");
	this.shape_1.setTransform(200.6,462.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D55F6A").s().p("AgrA3IABhBIBWgxIgBBbIgjgGIgNAig");
	this.shape_2.setTransform(260.8,386.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB3D49").s().p("AgJgqIAPAAQAEAMAAAJIgBBAg");
	this.shape_3.setTransform(255.4,387.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D86B75").s().p("AgVA/Ignh7IAMgwIAvAWIA+DDg");
	this.shape_4.setTransform(238.9,357.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CB3D49").s().p("AALgOQAAAIgCAKIgTALg");
	this.shape_5.setTransform(88.9,124.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1515C").s().p("AgKgHIAWABIgXAOg");
	this.shape_6.setTransform(101.9,114.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CB3D49").s().p("AgJgLIATAPQgIAHgKAAg");
	this.shape_7.setTransform(93,119.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E28F97").s().p("AgDgKIALABIgPAUg");
	this.shape_8.setTransform(47.1,491.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D25964").s().p("AgCgEIACgDIADgDIgBAVIgEgPg");
	this.shape_9.setTransform(93.3,75.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D25964").s().p("AgHAVIAOgrIABAtg");
	this.shape_10.setTransform(92.8,85.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E28F97").s().p("AgKgJIAUgMIACAaIgXARg");
	this.shape_11.setTransform(88.8,127);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7A3AA").s().p("AAKgUIACAWIgYATg");
	this.shape_12.setTransform(80,135.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E28F97").s().p("AgUAAIAJgTIAggDIgnAtg");
	this.shape_13.setTransform(83.2,133.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D45D65").s().p("AgagHIAogKIAEAEIAJAgg");
	this.shape_14.setTransform(72.6,163.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1515C").s().p("AhBgBQABgKgBgJICDASIgEAXg");
	this.shape_15.setTransform(159.9,127.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D04D59").s().p("AhMgdICYApIABASg");
	this.shape_16.setTransform(121.6,119.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE4853").s().p("AAIAOIh+gbIgBgRIDuArQABAJgBAJg");
	this.shape_17.setTransform(141.3,123.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E18992").s().p("AkEAoQACgMgBgIIgBABIAXgVIgBAAQAMAAAIgGIBbg7QAJgCALABIAqAXIAtgBICZA7ICAAdIjHAHIlAAQg");
	this.shape_18.setTransform(116,120.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D55F6A").s().p("AgKAKIAUgUIABACIgUATg");
	this.shape_19.setTransform(218,275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D55F6A").s().p("AgHAAIANgKIgBgBIABABIAAAAQADAKgCAJIgDADg");
	this.shape_20.setTransform(216.3,277.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D55F6A").s().p("AgsAVIAEgDIA9goIAYAtg");
	this.shape_21.setTransform(221.2,276.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D25661").s().p("AgJgKIgmgCIBQgXIAPAXIgjAwg");
	this.shape_22.setTransform(224.4,275.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D04B57").s().p("AgWgIIASgCIAbADIgEASIgmAAg");
	this.shape_23.setTransform(239,283.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CE4853").s().p("AhOAJQgFhZBKhfIBCAuIAWDvIhFBCQhShMgGhbgAgwAsQABAlA9gPIg2haQADAUgLAwg");
	this.shape_24.setTransform(202.4,460.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CE4853").s().p("AArBlIhshsIgPABIgGguIAjgwIBeAGIArCtIABAWg");
	this.shape_25.setTransform(247.7,384.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CA3A46").s().p("AgHCTIgVjvIAKgkIAYgTIAXA2IAABaIgPCXg");
	this.shape_26.setTransform(211.2,456.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC414C").s().p("Ag/AUIBYhVIAWAtIAQBVIgXg2IgZATIgLAkg");
	this.shape_27.setTransform(207.8,440.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D76670").s().p("AhDCbQgkhCAGhZQAGhSAyhNQAwhOA5gNQAFgBALAHIATANIhaBWQhIBfAFBZQAGBbBSBNIAJAtQhGgfgkhCg");
	this.shape_28.setTransform(200.4,457);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECB3B8").s().p("AgGgQIAKgBIADAiIgKABg");
	this.shape_29.setTransform(222.4,216);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CE4853").s().p("AgrARIABgRQAAgJACgJIA9ABIAXARIgBATg");
	this.shape_30.setTransform(219.1,287.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D76670").s().p("Ag2AiIgXgSIBjgJIAfg8IAWAuIADASIgDArg");
	this.shape_31.setTransform(229.1,283.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDB8BD").s().p("AgrDPIgTlaIAMgbIACgDIBvglIAAGdg");
	this.shape_32.setTransform(210.5,364.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D76670").s().p("AggAKIABgUIBAAGQgBAGAAAJg");
	this.shape_33.setTransform(211.5,285.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC3F4B").s().p("AgJgIIAUgFIgVAbg");
	this.shape_34.setTransform(99.5,388.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFC2C7").s().p("AgegbIA5ADIAEAmIg5ANg");
	this.shape_35.setTransform(91,307.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFC2C7").s().p("AgJglIAXA1IgbAWg");
	this.shape_36.setTransform(117.4,315.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D55F6A").s().p("AgaALIgCgQIA3gOIACAog");
	this.shape_37.setTransform(137.3,484.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D25661").s().p("AgdAgIA7hCIgmBFIgDAAQgJAAgJgDg");
	this.shape_38.setTransform(95,393.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E18992").s().p("Agdg1IA9AAIABAVIgeBPIgiAHg");
	this.shape_39.setTransform(268.4,384.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1515C").s().p("AgWgGIAigHIAMALIgGAQg");
	this.shape_40.setTransform(267.5,390.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CB3D49").s().p("AgRAUIAAgpIAjAFIgGAmg");
	this.shape_41.setTransform(258.2,394.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E18992").s().p("AhGAlIAGgnIAPgiIAjAHIApAWIAtAsg");
	this.shape_42.setTransform(266.7,393.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D04B57").s().p("AgUCtIAAlaIAMAAIAdFXQgIAFgKAAg");
	this.shape_43.setTransform(260.8,445.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CD444F").s().p("AgUAVIADgpIAmAAIgEAUIglAVg");
	this.shape_44.setTransform(238.8,287.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC414C").s().p("AgKgfIABgBIAUBAIgCABg");
	this.shape_45.setTransform(239.8,351.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D55F6A").s().p("AgLgGIAJgEQAEgCACABQADABABAFIAEAIIgNAKg");
	this.shape_46.setTransform(263.1,300.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E28F97").s().p("AgSAVIgVgjIgDgGIBAAAIAUAFIABAkg");
	this.shape_47.setTransform(267.3,376.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC414C").s().p("AgWhAIADgBIApCCIgCABg");
	this.shape_48.setTransform(243.1,361.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DD7A84").s().p("AgtAhIAahWIAsAHIAVAlIgBANIhWAyQAAgIgEgNg");
	this.shape_49.setTransform(260.7,380.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CB3D49").s().p("AgJCXIAAktIATAAIAAEtg");
	this.shape_50.setTransform(253.1,313.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CB3D49").s().p("AgXBjIAEjbIArDwIgBABg");
	this.shape_51.setTransform(236.4,336.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC3F4B").s().p("AhLhLIBSAuIADgBIBCApIAAAXIhegHIgiAxg");
	this.shape_52.setTransform(244.3,371.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC414C").s().p("AgJESIgWhYIgBgWIALiFQAGhMAAg3QAAgjgFgzIgKhXIAVABIAqHKIgaBYg");
	this.shape_53.setTransform(255.3,356.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DD7A84").s().p("Ag3gbIhyAkQAIh8AlhbQArhrBWhIIBCBKIAaAsIgBgBIAXAtIgBgBIgEDdIgMAuIAnB9IAdDHIhJgCIgOhNIg5BeIhRAFg");
	this.shape_54.setTransform(222.5,346.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CB3D49").s().p("AgHAAIAOgJQACAJgEAKg");
	this.shape_55.setTransform(76,139.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E7A3AA").s().p("AgKAAQAEgJgBgKIASgDIgUAsg");
	this.shape_56.setTransform(77.7,140.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CB3D49").s().p("AgYggIAyABIgeA8IgVAEg");
	this.shape_57.setTransform(79.4,134.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC414C").s().p("AgYALIAxgqIgIA/g");
	this.shape_58.setTransform(70.4,150);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E18992").s().p("AgKgBIAIhBQAGABAHgBIgFCFg");
	this.shape_59.setTransform(73.3,153.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D25964").s().p("AhjAVQAkgVAagJQAcgMAngMIBGgVIArAUIASBGIAAAIIgqAKQgGgEAFgGIgkgqIjyA1IA9gig");
	this.shape_60.setTransform(57.8,156.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D1515C").s().p("AhXhWICuAqIABAXIgWAVIABAAIgXAeIgBAhIgWAWIhUACg");
	this.shape_61.setTransform(83.2,122.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB3D49").s().p("AgUATIARgmIAYAmQgLgBgJACg");
	this.shape_62.setTransform(103,112);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC414C").s().p("AgJgqIAOACIAGAoIgBArgAgKgqIABAAIAAAAg");
	this.shape_63.setTransform(93.1,92);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CD444F").s().p("AA1APIiugoQgJgCgKgEIEZAFIgBARIhCApg");
	this.shape_64.setTransform(86.6,116.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D45D65").s().p("AgQhqIAQgDIAUAWIArBsIgEAwIh5Apg");
	this.shape_65.setTransform(70.1,471.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DE7F89").s().p("AggALIAXgmIAqgDIgYA4IgTAFg");
	this.shape_66.setTransform(99.7,384.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D76670").s().p("AgLggIAYABIgXBAg");
	this.shape_67.setTransform(47.1,476.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E18992").s().p("AgSgrIAlAOIgRBHIgJAAIgLACg");
	this.shape_68.setTransform(32.7,486.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E28F97").s().p("AAgAzIhHhoIAqABIAlBpg");
	this.shape_69.setTransform(37,496.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D55F6A").s().p("Ag3gIIA/hYIAcBUIgDAWIAXAtIhKAqg");
	this.shape_70.setTransform(43,491.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CD4551").s().p("AgNAKIABgpIAaAXIgHAog");
	this.shape_71.setTransform(71.4,459);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E28F97").s().p("AgfgFIgFglIBAANIAJA/IgeAJg");
	this.shape_72.setTransform(71.4,436.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D25661").s().p("AgBgeIAXgBIgrA/g");
	this.shape_73.setTransform(89.7,399.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E18992").s().p("Ag3AyIAyhPIASgWIAVgDIAWAUIgBAYIgEgDIg6BDIgZABg");
	this.shape_74.setTransform(92.9,391.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E18992").s().p("AgKAMIgQg8IA1Bhg");
	this.shape_75.setTransform(102.4,46.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC414C").s().p("AgWg2QANAAAFALIALAjIAQA8IgCACg");
	this.shape_76.setTransform(98.8,42.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EFC2C7").s().p("AgKAYIAFgwIAQAIIgUApg");
	this.shape_77.setTransform(163,254.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D45D65").s().p("AgJArIAAhVQAJgCAJAEIAABTg");
	this.shape_78.setTransform(165.4,240.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EFC2C7").s().p("AgUBCIAIhqIAZgbIAGAGIACCAg");
	this.shape_79.setTransform(28.8,488.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DE7F89").s().p("AgVgsIArAAIgXBYIgQABg");
	this.shape_80.setTransform(54.7,475.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D45D65").s().p("AghACIAegXIAlArg");
	this.shape_81.setTransform(62.6,492.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DD7A84").s().p("AgkgcIARgWQAIgDAIAEQAjApADAIQALAbgrAag");
	this.shape_82.setTransform(50,495.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDB8BD").s().p("AgDBgIgNAAIgbhVIAVgTIAWhCIApgWIADBbIggBmQgJgEgGADg");
	this.shape_83.setTransform(48.4,480.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC3F4B").s().p("AgtBUIgngtIAQhRIB5gqIAIAnIAXAtIABAqIg2Arg");
	this.shape_84.setTransform(70.7,486.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E7A3AA").s().p("AhDAtIAYhYIBYiCIAYAXIg+ErIgcAZg");
	this.shape_85.setTransform(61.4,475.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D25661").s().p("AgOACIASgRIALAJIgNAWg");
	this.shape_86.setTransform(280.4,462.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D1515C").s().p("AgdAqIAXhbIAkAJIgWBag");
	this.shape_87.setTransform(276.9,476.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E7A3AA").s().p("AgOBDIAAiEIAJgrIAUAYIgXDAg");
	this.shape_88.setTransform(95.2,81.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC414C").s().p("AgsBKIhLhdIBkAuIBhjeIACgCIAoAlIgDAyIgqAkIgWA3IAAAAIgcATIgLAYIgJAqIgEAEIgBADIAEARIAABAIgNAsg");
	this.shape_89.setTransform(93.1,67.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D55F6A").s().p("AgIgIIABgBQAKAAAGgCIgQAXQgCgMABgIg");
	this.shape_90.setTransform(255.1,463.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D55F6A").s().p("AgIgIIAJgGIAIAcIgCABg");
	this.shape_91.setTransform(253.3,460.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D55F6A").s().p("AgLAmIAAhaIAXABIgBBog");
	this.shape_92.setTransform(259.9,467.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC3F4B").s().p("AgagoIALgHIAqAAIAAAWIgZBJg");
	this.shape_93.setTransform(253.7,399.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EFC2C7").s().p("AgcgxQAKAAAIgFIAoAGIgYBlIgjACg");
	this.shape_94.setTransform(264.1,467.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC3F4B").s().p("Ag1AcIAAhVIBsBsIgLAHg");
	this.shape_95.setTransform(246.5,389.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D04B57").s().p("AgKALIAVgVIAAAVg");
	this.shape_96.setTransform(58,189.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E18992").s().p("AgbgEIgCgDIAvgOIAMAqg");
	this.shape_97.setTransform(79.3,166.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DE7F89").s().p("AgOgYIAyAUIhHAdg");
	this.shape_98.setTransform(78.1,177.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D04B57").s().p("AggAVIBBgqIgrArg");
	this.shape_99.setTransform(66.7,181.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D04B57").s().p("AggAfIBBg9QAAAFgBAIIgVAxg");
	this.shape_100.setTransform(73.4,176.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DE7F89").s().p("AAAgVIAsABIhYAqg");
	this.shape_101.setTransform(70.1,181.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#ECB3B8").s().p("AjnDcIgQgXIASkYIBVhWIAtgXIgBABIDyg1IAkAqQgFAGAGAEIA4AcQABAJAIgDIACADIACBKIhCA+IhDArIgrArIisCyg");
	this.shape_102.setTransform(51.8,181.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D86B75").s().p("AoBHLIgJghQgFgGABgHIAFiJIAWgsIAAABIAUgtIAagTIAogvIABAAIAWgWIAZgRIFBgQIDGgHIDvAqIAFgZIiFgSIjxgtIiYgqIgtABIgqgXIgagoQABgIAEgLIgXgdIgWgsIAAABIgdgtIgHABIgHgBIAAgsIAZjCILqIAQAOAJAZAIIAqANIhBDGQjQgGkBA7QhBAPmDBsIgxANIgEAAQgEAAgCgGgAneC7IgBABIAAABgAnfC8gAkEiKIABAAIAAABg");
	this.shape_103.setTransform(126.8,119.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC3F4B").s().p("AhNgFIA+gIIBdAbg");
	this.shape_104.setTransform(218.2,257.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D1515C").s().p("AABg1IASAAIglBrg");
	this.shape_105.setTransform(210.2,279.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DE7F89").s().p("AgqAfIAqhqIAVgBQAnAkgeAqIgZAjQgKAUADARIgSADg");
	this.shape_106.setTransform(238.8,275.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CD444F").s().p("AgrBOQgEgRANgUIAYgjQAcgqgkgkQAsgTAMAYQAEAIADAzIg7BZg");
	this.shape_107.setTransform(243,274.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EDB8BD").s().p("AhUBaIhCgGIgBABIAnhsQAvg4BMgIQAugFBfAFIgrBqIgfA+IhjAJgAgqgWIgVAVIgPAIIAMAOIBYADIAjgwIgOgXg");
	this.shape_108.setTransform(223.5,276.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DA6D78").s().p("Ah5BeIAIgpIA+haIBOhcIBfAyIhXDCQgQgIgWAGIgqANQgMAEgLAAQgjAAgSgkg");
	this.shape_109.setTransform(252.8,277.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D45B67").s().p("AgeAKIAsgsIASACIgKBDg");
	this.shape_110.setTransform(187.4,492);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DE7F89").s().p("AgsgFIAXgeIBCAbIgtAsg");
	this.shape_111.setTransform(184.3,489.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D1515C").s().p("AgbBEIAhiIIAWAZIgYBwg");
	this.shape_112.setTransform(235.7,436);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CC414C").s().p("Ag3AKIBChAIAXABIAWBqIhaAAIgMACg");
	this.shape_113.setTransform(209.2,476.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D04D59").s().p("AgLBpIgRjqIAUAAQAjA6ACBGQABA1gVBOg");
	this.shape_114.setTransform(237.6,418.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CD444F").s().p("AgRBtIgairIABgvIBWABIAABYIgsCBg");
	this.shape_115.setTransform(236.6,394.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D45D65").s().p("AhAA7IhCgXIC+gEIA4hcIAPBKIgCAvg");
	this.shape_116.setTransform(219.2,381.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CD444F").s().p("AhRhZICjAbIh2CYg");
	this.shape_117.setTransform(192.2,508.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EFC2C7").s().p("AhmFTIBbAIIgqjCIAQiZIAAhXIgRhXIAVl0ICFAHQAhBYgDBdQgDBIgcBnQgXBTgIB6QgFBHgGCNQgDAjABAzIABBYIi5CLg");
	this.shape_118.setTransform(218,455.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CA3A46").s().p("AglJCIhEgcQABgHgDgIIgwldIg/leIBukGIDLiYIAhgBIAFCCIBCAXIAUCEIgWFyIgVgtIgTgMQgLgIgFABQg5AOgyBNQgwBOgGBSQgGBaAiBCQAkBDBIAeIANgCIg4A9IhcAFg");
	this.shape_119.setTransform(192.7,430.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E18992").s().p("AgWgWIAtgXIAABWIgFAFg");
	this.shape_120.setTransform(155.4,245.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D45D65").s().p("AhEBNIAsifIBdBhIhRgTIAOA/IgtAYg");
	this.shape_121.setTransform(157.5,235.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D25661").s().p("AgFAAIALgKIAAAVg");
	this.shape_122.setTransform(205.3,553.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D1515C").s().p("AgHANIAPgeIAAABIgDAig");
	this.shape_123.setTransform(227,530.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D25964").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_124.setTransform(158.8,542.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D25661").s().p("AgugTIATgXIBKA4IgYAdg");
	this.shape_125.setTransform(167.7,549.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D04D59").s().p("AgfAkIAhhSIAeANIgkBQg");
	this.shape_126.setTransform(169.5,524.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D25661").s().p("Ag1AAIAHgbIBkAUIgPAjg");
	this.shape_127.setTransform(190.8,555.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D45B67").s().p("Ag1glIAZgVIBTBjIgdASg");
	this.shape_128.setTransform(148.2,525.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D04D59").s().p("AgIgKIATADIgVASg");
	this.shape_129.setTransform(187.4,152.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#ECB3B8").s().p("AgIAYIACgxIAKAAIAFAxIgJACg");
	this.shape_130.setTransform(224.6,231.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D45B67").s().p("AgaAGIArgbIAKAOIgrAdg");
	this.shape_131.setTransform(209,174.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E18992").s().p("AgZAKIAAgTIAzAAIAAATg");
	this.shape_132.setTransform(220.2,203.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E7A3AA").s().p("Ag9gDQAdgrAhALIA9AjIgQAng");
	this.shape_133.setTransform(188.2,127.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D1515C").s().p("AgSB3IAQjwIAVACIAADxg");
	this.shape_134.setTransform(236.3,220.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D45B67").s().p("Ag3haIAogPIBHDEIglAPg");
	this.shape_135.setTransform(218.4,188.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#DC767F").s().p("AAbBVIgMAAIgCAyIg6kNQA8AjAWBTQAUBLgZBMgAgGg/IADAjIAKgBIgDgjg");
	this.shape_136.setTransform(222.3,220.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D76670").s().p("AhWA2IgDgYIBFhqIBuAAIgEBCIABgBIgWAUIiBBEg");
	this.shape_137.setTransform(177.5,154.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D45B67").s().p("AgGA3Qhfgkgsg3IAXgWIgBABIAWgUID3CTQgVAIgcAAQgsAAg7gXg");
	this.shape_138.setTransform(198.7,159.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D45B67").s().p("AAaBhIhdgcIAwifIBXgGIgEDBg");
	this.shape_139.setTransform(223.4,248.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D04D59").s().p("AhhBiIBBjEIABABIAXAAIBrAsIg/CXg");
	this.shape_140.setTransform(183,136.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D25964").s().p("AABgCIABAAIADgCIgJAJIAFgHg");
	this.shape_141.setTransform(177.3,340);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D25964").s().p("AgCgJIAGANQAAACgHAEg");
	this.shape_142.setTransform(136.2,351.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D25964").s().p("AgKAKIAVgUIgUAVg");
	this.shape_143.setTransform(145.7,353.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D25964").s().p("AgHAJIAOgXIACABIgHAcg");
	this.shape_144.setTransform(176.7,341.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#DE7F89").s().p("AAWgKIgCAUIgpABg");
	this.shape_145.setTransform(105.2,380.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#DD7A84").s().p("AAFgVIATgBIgvAtg");
	this.shape_146.setTransform(157.2,341.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D25964").s().p("AARgWIgcAsIgGABg");
	this.shape_147.setTransform(156,342);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D45B67").s().p("AgUAAIApgQIgBAig");
	this.shape_148.setTransform(140.2,370.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D55F6A").s().p("AgUgDIAlgJIAEAQIglAIg");
	this.shape_149.setTransform(126,360.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D86B75").s().p("AgHgVIAPgCIAAAuIgIABg");
	this.shape_150.setTransform(123.6,368.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D25964").s().p("AAAAxIgKhLIAVgWIgKBhg");
	this.shape_151.setTransform(134.7,357.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CC3F4B").s().p("AgsgDIAZgTIA/ACIgBATIhUAYg");
	this.shape_152.setTransform(210.3,289.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D25661").s().p("AgcgQIA4AHIACASIg7AJg");
	this.shape_153.setTransform(145.3,370.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CA3A46").s().p("AgcACIAmgsIATAJIguBMg");
	this.shape_154.setTransform(177.6,306.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D86B75").s().p("AghANIAAAAIgHglIBOAPIADAig");
	this.shape_155.setTransform(197.3,363.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D25964").s().p("AAgg2IABABQADAygKAUQgOAhgtAFg");
	this.shape_156.setTransform(141.3,360.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D25964").s().p("Ag7ANIBpgzIANAdIhqAwg");
	this.shape_157.setTransform(160.9,351.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E7A3AA").s().p("AgvAjIA/hcIABAAIAfAjIAAAAIAAAlIhBArg");
	this.shape_158.setTransform(133.1,368.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D86B75").s().p("AhgAJIAVgoIBUgaIBYACIhWBxg");
	this.shape_159.setTransform(213.7,294.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#DE7F89").s().p("AgvgiICtg3IAFAYIjLCXIg6AEg");
	this.shape_160.setTransform(189.1,379.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E28F97").s().p("Ai1gJIE0hVIA2BuIk2BPgAC1AQIABAAIgBABgAC1AQg");
	this.shape_161.setTransform(175.6,362.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CC414C").s().p("AijGSIgFhRQgdh9AZiCQAXhwBCh/QANgXAOgjIAZg8IBVhzIAAgUICDAUIAAABIiIC9QhWBIgrBrQglBZgIB+IgCADIgLAbIAODaIghABg");
	this.shape_162.setTransform(218.1,329.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E28F97").s().p("AibB7IA/AgIA7h1QAhhEAagsQATghAggtIA1hLIA5AvIALAoIiGEHIgYASIgCABIgTACIgiAvIgbARQgQAKgMACQgZAEgmACIhAACg");
	this.shape_163.setTransform(155.8,325.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D86B75").s().p("AifhgICHgBQBNgBA3ADQARABAYAPIAoAbIgVBrIABgBIgBAWIgYATIlMADg");
	this.shape_164.setTransform(191.3,279.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D04B57").s().p("AiDDmIABgaIAtldIAVhAIAshZIAAAAIAUgsIAXAAIBtAxIgZA7QgPAjgMAYQhCB+gVBwQgZCCAcB+IhPgQIAGAog");
	this.shape_165.setTransform(201.6,330.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D04B57").s().p("AEvAFIrxBSIAohHIAEADIAWgbIAYg5IAqgCIAFACIASgBIGyhBIBmgOQA5gGAtAAQAWgBAgALIA1ATIiwETg");
	this.shape_166.setTransform(139.2,388);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EDB8BD").s().p("AhGCpQApgwABgOQABgOgigXIgZg3IAPiXIBEgvQA2AbAOBDQAIAlAJBMQAGAXgBAkIgDA9IiNAoQgDgKgKgFg");
	this.shape_167.setTransform(125.1,309.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D55F6A").s().p("AgKgGIAHgGIAOAOIgKALg");
	this.shape_168.setTransform(75.8,280);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CC3F4B").s().p("AgSAAIAUgVIARAUIgSAXg");
	this.shape_169.setTransform(98.1,271.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E28F97").s().p("AgXAKIAhgfIAOAQIgkAbg");
	this.shape_170.setTransform(103.4,279.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D55F6A").s().p("AgVAUIgCgfIAKgLIAlAsIgKABg");
	this.shape_171.setTransform(78.4,282.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D55F6A").s().p("AgVAVIACgCIANgoIAcABIgpAnIgBADg");
	this.shape_172.setTransform(59.2,287.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CE4853").s().p("AgKAWIAEguIARAYIgLAZg");
	this.shape_173.setTransform(67.1,291.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D76670").s().p("AgTAWIATg0IAUAWIgUAng");
	this.shape_174.setTransform(96.1,274.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D55F6A").s().p("AgUAAIApgWIgDAtg");
	this.shape_175.setTransform(94,297.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D55F6A").s().p("AgaANIAeghIAXATIgrAWg");
	this.shape_176.setTransform(75.9,295.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DE7F89").s().p("AgUgcIAQgGIAZA+IgTAHg");
	this.shape_177.setTransform(65.7,256.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CC3F4B").s().p("Ag2ABIAYgVIBVAdIhcAMg");
	this.shape_178.setTransform(103.8,269.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D76670").s().p("AAAgrIAcALIgOA6IgpASg");
	this.shape_179.setTransform(110.1,313.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D25661").s().p("Ag0AlIAAg5IA8gQIAtAcIhCAtg");
	this.shape_180.setTransform(119.3,292.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D1515C").s().p("Ag9ALIBgguIAaADIABAoIhoAcg");
	this.shape_181.setTransform(72.6,288.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#DC767F").s().p("AgVARIgYgSIAZgrIAAgqIAKAAIAKgBIAuBBIgWBSIgCAcg");
	this.shape_182.setTransform(81,293.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D76670").s().p("AAVAzIgEgnIhBgDIgIgBIgegTIACgcIBUgTIAmAYIAxA/Ig+Aeg");
	this.shape_183.setTransform(92,303.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D45D65").s().p("AhYAYIA4hRIAIABIAIAAIADA4IA6gNIAEAHIApAgIidAgIgVgig");
	this.shape_184.setTransform(89.6,310.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D55F6A").s().p("AAEAwIhXgdIBogvIABABIAdgVQAiAXgBAOQgBAMgpAwg");
	this.shape_185.setTransform(113.7,321.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CE4853").s().p("AgkBlIAAjKQBDApAFAsQAGAngxBPg");
	this.shape_186.setTransform(62.2,274.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CD4551").s().p("AhUAuQgpgFgMgXQgMgVAUghIDSAAIAngLQABgBAFAEIARALIhXBPIhFACIgZABQgaAAgUgDg");
	this.shape_187.setTransform(94.8,255.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CE4853").s().p("ABhByIgsgfIAOg8IgdgLIgcBZIhUgtIgqghIA/gdICDhsIAnABIgTDkg");
	this.shape_188.setTransform(106.2,307.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CE4853").s().p("AgCgJIAGANIgGAGQgCgKACgJg");
	this.shape_189.setTransform(81.6,467.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D55F6A").s().p("AgXAKIAvgUIgGAVg");
	this.shape_190.setTransform(138.4,446);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DE7F89").s().p("AgKAYIgCgoIAHgJQAIAFALABIgBArIgWABg");
	this.shape_191.setTransform(141.4,484.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CA3B47").s().p("AgOAPIAQgdIANANIgcAQg");
	this.shape_192.setTransform(111,445.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CD444F").s().p("AgPAEIAAgGIAfAAIAAAGg");
	this.shape_193.setTransform(161,481);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EDB8BD").s().p("AgYAKIAMgTIAlgIIgrAjg");
	this.shape_194.setTransform(115.4,481.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CD444F").s().p("AgWAAIArgVIABAqg");
	this.shape_195.setTransform(173.2,482.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D25964").s().p("AgQAJQgBgJABgIIAigFIAAAbg");
	this.shape_196.setTransform(146.7,461.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E28F97").s().p("AgUAUIgDgoIAoABIAHAog");
	this.shape_197.setTransform(83.5,499.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CB3D49").s().p("AgPAYIAPgwIAQAxg");
	this.shape_198.setTransform(178.1,492.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CD444F").s().p("AgWgVIAuAVIgvAWg");
	this.shape_199.setTransform(145.2,484.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E28F97").s().p("AgVgSIAogDIADArIgqAAg");
	this.shape_200.setTransform(81.4,488.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DE7F89").s().p("AgagTIA3APIg5AYg");
	this.shape_201.setTransform(108.4,486.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D25964").s().p("AgMg0IAZgCIgVBtg");
	this.shape_202.setTransform(163,434.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CA3B47").s().p("AgYgSIAxASIgBAOIgwAFg");
	this.shape_203.setTransform(96.8,444.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D1515C").s().p("AgggBIABgXIA+AAQADAIgBAHIgXAcIgJAHg");
	this.shape_204.setTransform(178.7,486.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D25964").s().p("AgzABIA5gVIAuAUIgBAVg");
	this.shape_205.setTransform(170.2,484.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D25661").s().p("AgfgVIA8gCIADAsIgoADg");
	this.shape_206.setTransform(80.1,484.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C93A45").s().p("AgIgqIAFgWIAMAAIgRCCg");
	this.shape_207.setTransform(160.8,447.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C93A45").s().p("AgVgqIAqAWIABA/g");
	this.shape_208.setTransform(83.1,438.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D25964").s().p("AgUAVIgBg/IApACIACBTg");
	this.shape_209.setTransform(87.5,440.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C93A45").s().p("AgNAyIAZhmIACA+IgDArg");
	this.shape_210.setTransform(141.1,432.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D25964").s().p("AgBhBQAaBFgDAZQgEAZgnAMg");
	this.shape_211.setTransform(122.9,462.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C93A45").s().p("AgOAuIAbhiIACBUIgFAVg");
	this.shape_212.setTransform(103.8,434.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CA3B47").s().p("AgPA4IALhwIAUBWIgJAbg");
	this.shape_213.setTransform(151.8,433);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#CC3F4B").s().p("AhXAIICsgPQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAABIABAEIgEAIg");
	this.shape_214.setTransform(127.3,476.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D25661").s().p("AAnhBIgoCCIglACg");
	this.shape_215.setTransform(79.1,416.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CA3B47").s().p("AgWg/IAGgWIAmAAIABCYQgCAIABALg");
	this.shape_216.setTransform(142.6,453.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D25964").s().p("AgeggIA9gVIAABqIgmABg");
	this.shape_217.setTransform(154.4,430.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D45B67").s().p("AADBgIgWisIAVgXIABAAIARDDQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFACg");
	this.shape_218.setTransform(109.2,457.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#CA3A46").s().p("AAEBMIgagtIAAhqIAoAtIAEBqg");
	this.shape_219.setTransform(159.8,432.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#C93A45").s().p("AgVg9IAlgEIAGCDg");
	this.shape_220.setTransform(116.5,436);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C93A45").s().p("AgXAGQAJg+gCgeQAGABAIgBIAaCtQgvgaAAg3g");
	this.shape_221.setTransform(94.2,455.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D25661").s().p("AgKhsIAVAAIgCDZg");
	this.shape_222.setTransform(134.7,458);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D25964").s().p("AgRBHIgXiXIBRChg");
	this.shape_223.setTransform(98.5,457.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D25964").s().p("AgVBBIAViXIAVCsIgqABg");
	this.shape_224.setTransform(131.5,436.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D45B67").s().p("AgmBCIgFiDIBXBsIABAXg");
	this.shape_225.setTransform(122.7,436);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E18992").s().p("AghAPIAEguIAqgVIAVBnIg8ACg");
	this.shape_226.setTransform(79.5,476.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#CB3D49").s().p("AgohcIA5ANIAYCsg");
	this.shape_227.setTransform(105.4,457.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C93A45").s().p("AgTBMIgBgWIApiBIgVCXg");
	this.shape_228.setTransform(129.3,435);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CA3A46").s().p("AAEBQIgVgBQgDgKgBgMIgChTIAHg2IAiAJIAFBAIgBBUIgDADIgIABIgHgBg");
	this.shape_229.setTransform(92,439);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#CD4551").s().p("AhkAVQAiguA7gMQAXgFBVABIgCApIgYAAIiYAUIgVAWIgCgVg");
	this.shape_230.setTransform(95.5,488.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#CC3F4B").s().p("AijAWIAVgVIEbgWIAXAVIgsAWg");
	this.shape_231.setTransform(126,490.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D25964").s().p("AgfBDIABiaIA9gUIABBsIgsBrg");
	this.shape_232.setTransform(156.6,453.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#CA3B47").s().p("Agfh2IAqgCIAAAXIAUDag");
	this.shape_233.setTransform(132.5,456.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#CA3B47").s().p("AgbgYQgBg0AfghIAZBZIgBgBIgTCDQgihXgBgvg");
	this.shape_234.setTransform(119.8,458.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DE7F89").s().p("AgsggIAHgrIA4AAIAVAsIAEAqQgBAJACALIgDAYIgrAVg");
	this.shape_235.setTransform(76.7,465.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#DC767F").s().p("AgGBiIgagmIgHgjIgFg/IAchFIARATIAsCyIgSASg");
	this.shape_236.setTransform(183.9,508.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#CE4853").s().p("AghBjIgjiwIgKhBIAIACIA7gBIAqBXIAsAVQABAMADAKIgvACIgWBrIgXAtg");
	this.shape_237.setTransform(82.2,448.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EDB8BD").s().p("AhSA5IgDABIAXguIgBACIBbiVIA6gEIhsEEIg7ATg");
	this.shape_238.setTransform(173.1,401.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#DE7F89").s().p("AgDCtIgBgqIAHgGIg9kTIBFgXIAwFbg");
	this.shape_239.setTransform(175.9,466.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#DE7F89").s().p("Ah+gLIAtglIAEgQICsAAIAyAkIgIAJIg5AOIADAQIA5AKIABABQAAALgDAIIkaAYg");
	this.shape_240.setTransform(126.2,484.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#DC767F").s().p("Ag+ghIABAAIADiGIA6gTIA/FeIhGAXg");
	this.shape_241.setTransform(170.7,432.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#DA6D78").s().p("AmZAmIAAABIBYiCQALADAKAAILxhSIgeCTIACgBIgXArIADAAIg6BYIsfBAg");
	this.shape_242.setTransform(124.2,405.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D55F6A").s().p("AgKgCIATgHIACATg");
	this.shape_243.setTransform(274.9,397.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#CE4853").s().p("AgGABIAAgBIANAAIAAABg");
	this.shape_244.setTransform(284.8,351.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#DD7A84").s().p("AgMATIgCg5QAMgEAIABIAJBTg");
	this.shape_245.setTransform(273.1,379.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D1515C").s().p("AgjAjIAehQIAbAYIAOArIg7AYg");
	this.shape_246.setTransform(272.4,385.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#DD7A84").s().p("AALApIgrgsIAGgSIA7gYIgDBTIgUAIg");
	this.shape_247.setTransform(272.7,392.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#DA6D78").s().p("AhzA/IBXjDIBlAVIABASIAqAFIhkDdg");
	this.shape_248.setTransform(268.1,282.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CC414C").s().p("AhqEwIASgZIgWpCIAahLICsACIgBAFIAXAOIABAXIiWAAIAKB+QAGBIAEAtQAKBUAgEHIgCAaIgogGIgflYIgMABIAAG2g");
	this.shape_249.setTransform(265,434.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D04B57").s().p("AhMgzQgFgtgGhIIgJh/ICVAAIAsIiIiCAtQgikKgJhRg");
	this.shape_250.setTransform(270.8,430.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D04B57").s().p("ABkGyIgsnKIAAkvIgVABIAAEuIAKBVQAGAzAAAjQgBA3gGBOIgKCFIhAgsIhCjFIgsjwIABACIgXgtIABABIgagsIhChLICIi9IAngWQAZAwA0gPIAogOQAYgFAQAHICFBGIApKFQACAcgBArIgCBHQgLgCgLAEIgUgGIhCAAIADAHgACOlAIgJAEIALAUIAOgJIgDgKQgCgFgDgCIgCAAIgGACg");
	this.shape_251.setTransform(248.5,331.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D04B57").s().p("AgoAHIBRgRIg+AVQgLgBgIgDg");
	this.shape_252.setTransform(59.1,110.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#DA6D78").s().p("AieE8IgmgoIgsgZIhChBIgWhDIHJiRIAAkMIBAgWIAaAAIBCAnQAKAEAJABIAYCwIgBBBIgOAIIANAMIABAVIgVAsQgIABgIgBIgzAsIhGAVQgpAMgbAMQgbALgkAVIg7AiIABgBIgtAXIhVBWg");
	this.shape_253.setTransform(43.9,141.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CB3D49").s().p("AAAgHIAIAMIgPADQAAgIAHgHg");
	this.shape_254.setTransform(61.6,16.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D04B57").s().p("AgGgIIAOAHIgKALQgEgKAAgIg");
	this.shape_255.setTransform(24.6,104.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D55F6A").s().p("AAGgLIADAWIgRABg");
	this.shape_256.setTransform(16.6,62.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D76670").s().p("AgMATIAZgoIgCArg");
	this.shape_257.setTransform(7.3,120.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D55F6A").s().p("AAMgUIABAUIgZAVg");
	this.shape_258.setTransform(18.4,59);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#CB3D49").s().p("AgJAIIATgpIgQBDg");
	this.shape_259.setTransform(59.9,20.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#CC414C").s().p("AgXgBIBBACIhTABQAIgDAKAAg");
	this.shape_260.setTransform(46,41.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#CC3F4B").s().p("AgSAjIgCgWIApgwIgVBGIgIABg");
	this.shape_261.setTransform(21.7,55.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#CE4853").s().p("AgLgCIAHgnIAQgBIAABVg");
	this.shape_262.setTransform(16.3,67.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#CE4853").s().p("AgMgNIAMgcIANACIgQBRg");
	this.shape_263.setTransform(16.2,85.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#DE7F89").s().p("Ag0AJIBpgWIgCAXIgnAEg");
	this.shape_264.setTransform(48.9,40.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D45B67").s().p("AABgrIAZADIgzBUg");
	this.shape_265.setTransform(5.8,126.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CC414C").s().p("AgYBjIADgZIAriuIADAaIgWCvg");
	this.shape_266.setTransform(56.6,31.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D1515C").s().p("AAVERIAAABIgqgXIAAAAIgsgVIAAAAIhthuIgXgsIAAABIgVgtIAVivIAShDIAQgEIgJgNIBjhdIC1AaIAuDEIgBAAIAWBYIAAgBIAtBsIhjDgg");
	this.shape_267.setTransform(79,38.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D1515C").s().p("ABkFlIhCgmIBHgQIA9jQIo7kYIAVhIICzhjIBVgBIAmgEIAdACIAAgBIAWAtIAAgBIAWAsIBrBuIAAAAIAsAWIAAAAIAsAWIAAgBIAAABIAAAAIBLBfIA5DRIAGABIAHgBIAeAtIgBgBIAXAtIAWAcQgEALAAAIIgSAog");
	this.shape_268.setTransform(62.4,77.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#D86B75").s().p("Aj7DcIAZgWIAMgMIgQgIIACABIgXgXIg8hxIAShQIgPgDIgMAcIACikIAZAvIAAhXIgCgZIgDABIAbgVIALABIAKgBII6EYIg8DRIhHAPIgaAAIhTATg");
	this.shape_269.setTransform(47,85.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#D25661").s().p("AgNgHIAcADIgdAMg");
	this.shape_270.setTransform(207.4,555.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CB3D49").s().p("AgKgHIAbABIghAOg");
	this.shape_271.setTransform(287.4,248.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#D04B57").s().p("AgLgHIADgEIAUAUIgDADg");
	this.shape_272.setTransform(18.4,165.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#D04B57").s().p("AgMgIIAFgEIAUAUIgFAFg");
	this.shape_273.setTransform(14,161.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#D04B57").s().p("AgMgHIAFgEIAUATIgEAFg");
	this.shape_274.setTransform(16.2,163.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CE4853").s().p("AgIAEIAKgMQAGAIAAAJg");
	this.shape_275.setTransform(111.4,47);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D25661").s().p("AgLgIIADgDIAUAVIgGACg");
	this.shape_276.setTransform(169.7,161.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D25661").s().p("AgHgLIAMgBIADAWIgDADg");
	this.shape_277.setTransform(167.9,158.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CA3B47").s().p("AgUAMIAYgYIARAZg");
	this.shape_278.setTransform(28.5,500.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#E7A3AA").s().p("AABATIgJgoQAGACAGAGIAFAkg");
	this.shape_279.setTransform(67.2,433.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#D1515C").s().p("AgRAFIAFgfIAdA1g");
	this.shape_280.setTransform(170.1,236);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#D25964").s().p("AgQAGIAfgdIACAZIgTAWg");
	this.shape_281.setTransform(92.5,385.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#CB3D49").s().p("AgdgYIA7ACIgSAvg");
	this.shape_282.setTransform(282.7,251.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D55F6A").s().p("AgGAZIgEgxIAVACIgHAvg");
	this.shape_283.setTransform(23,484.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#CE4853").s().p("AgWAUIAWgpIAWArg");
	this.shape_284.setTransform(67.9,453.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#DD7A84").s().p("AAKgmIAAA/IgTAOg");
	this.shape_285.setTransform(58.2,195.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#D04B57").s().p("AgXgPIAEgDIAqAWIAAAPg");
	this.shape_286.setTransform(21.8,168.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#CB3D49").s().p("AgRgEIgBgPIAlAmIgRABg");
	this.shape_287.setTransform(26,171.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#D1515C").s().p("AgUgYIAZgDIAQAXIgCAgg");
	this.shape_288.setTransform(26.4,204.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#DD7A84").s().p("AgUgEIgBgPIArANIgDAag");
	this.shape_289.setTransform(105.1,335.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DD7A84").s().p("AgHAAIgZAAIAVgWIArACIgBAoIgQADgAAggUIAAgBIABABgAAggUg");
	this.shape_290.setTransform(66.8,458.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#D25964").s().p("AgcgdIAYgCIAhA9IgcACg");
	this.shape_291.setTransform(65.9,310.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EDB8BD").s().p("AgNAAIAUgSIAXAUIg7ARg");
	this.shape_292.setTransform(172.2,260.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D25661").s().p("AgWAGIAsgmIAAAYIgWAmIgUADg");
	this.shape_293.setTransform(96.4,382.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#CB3D49").s().p("AgggFIAmgGIAbAKIgEANg");
	this.shape_294.setTransform(185.4,259.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#D45D65").s().p("AgagUIAWgDIAfAtIgXACg");
	this.shape_295.setTransform(62.5,304.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#CE4853").s().p("AgSgaIAlAtIglAIg");
	this.shape_296.setTransform(127.2,70.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#D25964").s().p("AAtgGIgBAGIhXAIg");
	this.shape_297.setTransform(199.3,523.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#D04B57").s().p("AgfgSIAkAQIAbAVg");
	this.shape_298.setTransform(84.3,514.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#D25661").s().p("AgMADIAWgsIADApIgUAqg");
	this.shape_299.setTransform(80,501.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D04B57").s().p("AgVggIAWgCIAVBBIgEAEg");
	this.shape_300.setTransform(10.9,156.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#D55F6A").s().p("AgggdIAZgFIAoBCIgWACg");
	this.shape_301.setTransform(58.6,298.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#CC3F4B").s().p("AgMAoIAVhTIAEApIgJAug");
	this.shape_302.setTransform(233.2,177.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#D1515C").s().p("AggANIBBgzIgbAyIgaAbg");
	this.shape_303.setTransform(29.5,480.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D25964").s().p("AgdAsIA7hXIglBYg");
	this.shape_304.setTransform(51.6,232.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D76670").s().p("AgVgTQgDgJAKgEIAlBBg");
	this.shape_305.setTransform(10.8,489.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#D76670").s().p("AgogrIAcgCIA0BYIgbADg");
	this.shape_306.setTransform(70.1,317.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#D45D65").s().p("AAugnIAGAWIhnA5g");
	this.shape_307.setTransform(69.7,210.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D86B75").s().p("AgkgtIBBAbIAAgBIABABIgBAAIAIA7IgZAFg");
	this.shape_308.setTransform(53.9,291.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#DC767F").s().p("AgSg3QAHgCAHAEIAXBtg");
	this.shape_309.setTransform(46.2,272.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#D04D59").s().p("AgcgDIALgSIAuAOIgSAdg");
	this.shape_310.setTransform(215.2,527.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#D76670").s().p("AgeAiIAihJIAcAoIg/Ang");
	this.shape_311.setTransform(207,518.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#D86B75").s().p("AhcgJIC4AGIABANg");
	this.shape_312.setTransform(93.7,334.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#DA6D78").s().p("Ag2ANIBsguIABAXIhnAsg");
	this.shape_313.setTransform(80,205.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#CC3F4B").s().p("AgGBVIgDiqIATAAIgECsQgGgEgGACg");
	this.shape_314.setTransform(45,258.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#DD7A84").s().p("AhJgYICTAlIh/AMg");
	this.shape_315.setTransform(154.8,225.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#CC414C").s().p("AhcAAIAcgVIBbgCIBCAqIgEAFg");
	this.shape_316.setTransform(80.8,6.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#DA6D78").s().p("Ag2AfIAJgXIAIACIBKgoIARAjIABAbg");
	this.shape_317.setTransform(44.9,500.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D04D59").s().p("AgRA2IgFhrIAtBrg");
	this.shape_318.setTransform(103.3,29.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#D86B75").s().p("AhLABICXgZQAAALgCALIiUAbg");
	this.shape_319.setTransform(93.1,201.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#D55F6A").s().p("AgGA3Ig2hrIAbgCIBeBtg");
	this.shape_320.setTransform(77.6,327.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E18992").s().p("AgBAZIgohDIApABIAqAmIgVAug");
	this.shape_321.setTransform(30.9,499.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#D1515C").s().p("AggBBIAriBIAWAAIgtCBIgUAAg");
	this.shape_322.setTransform(47.4,243.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D25964").s().p("AAqg1IAPASIgyBPIg/AKg");
	this.shape_323.setTransform(86.5,391.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D1515C").s().p("AgrAoIAahnIA8BRQABAKgBAKIgrAYIAAgBIgqADg");
	this.shape_324.setTransform(103,375.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#CC414C").s().p("AgnArIgcgYIAug/IBZBZg");
	this.shape_325.setTransform(91.7,512.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#D04D59").s().p("AgCAQIgqgkIgCgqIALgCIALAAIBHBoIgJAXIg9ACg");
	this.shape_326.setTransform(35.5,497.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#CE4853").s().p("Ag2hMIBtCXIgsACg");
	this.shape_327.setTransform(119.7,60.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#D76670").s().p("AhCALIADggICBAXIgBAUg");
	this.shape_328.setTransform(35,205.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#DC767F").s().p("AgcAmQgHgGgHgDIgBhRIBQARIAHBYg");
	this.shape_329.setTransform(70.6,428.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#CC414C").s().p("AgjheIADgFIBEBaIgbBtg");
	this.shape_330.setTransform(93.5,18.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#D25661").s().p("AgfBhIAAh9IAmhxIARgBIAIACIgTEYIgZACg");
	this.shape_331.setTransform(25.6,187.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#D45D65").s().p("AATACQghgJgcApIgXAAIgVhIICtAWIgHA3Ig9glg");
	this.shape_332.setTransform(186.4,123.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#DE7F89").s().p("AgzAIIgGgUIA1grIArAAQAMAAAFABIACAWIgDArIgqgBIgWAug");
	this.shape_333.setTransform(79.7,496.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E28F97").s().p("AhuAJQACgJAAgLIDbAXg");
	this.shape_334.setTransform(111.7,200.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#DC767F").s().p("AgMBdIAAABIgWhYIABAAIAchsIAjBCIAFBrIggAgQgDgKgMAAg");
	this.shape_335.setTransform(97.9,27.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#DD7A84").s().p("AggAvIgThCIAWgrIAsAAIATAYIASAeIgDAIIgtA/g");
	this.shape_336.setTransform(84.4,508);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#DC767F").s().p("Ah+BLIDjiXIAaACIhaCAIgrAAIgoAXg");
	this.shape_337.setTransform(53.2,465.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#D04D59").s().p("AhWBEICViaIAXAAQACAGgBAGIgUBMIgZASIiBBDg");
	this.shape_338.setTransform(50.4,199.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CD4551").s().p("AgcBDQgvgngNgdQgTgsAjgwIAvA2IgBAVIB6BDQgZAqgiADIgFAAQgeAAgegbg");
	this.shape_339.setTransform(15.8,497.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#D25661").s().p("AgpiEIAQgPIACAxIASgPIAIgdIAQBHIgUBTIAPAEIAJguIATBtIgiBFg");
	this.shape_340.setTransform(232.1,180.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#CE4853").s().p("AhvBLIAAgWIBFgXIANhbIAcAGIBBgWIAvABQghBLgnAhQgvAuhJAAg");
	this.shape_341.setTransform(217.2,546.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#CB3D49").s().p("ABKhhIAEApQACAZgDARQgDAWgJAhIgQA5Ih/AAg");
	this.shape_342.setTransform(205.2,246.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EFC2C7").s().p("AgyBXIARhJIgogOIgFgDIAbgzIBKghIA2ABIABBDIgWATIABAAIg/BYgABOgTIABgBIgBABgABOgTg");
	this.shape_343.setTransform(38.1,482.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#D25661").s().p("AiDheIAbgXIArgDIAAgBIABABIgBAAIAAA3IAogIICZDDg");
	this.shape_344.setTransform(131.4,79.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#ECB3B8").s().p("AhvAJQADgUAcg3IA2gGIACgHIAGAHIBBgHIBBBCIgFAeIgTADQgLgEgJABIhWhZIgIAAIgqCYQgvgcAEgrg");
	this.shape_345.setTransform(157.5,234.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#DE7F89").s().p("Ah4BvIAQg5QAJghADgWQADgRgCgZIgEgpIAngaICxAlIgqALIhXAHIgwCeIg+AIg");
	this.shape_346.setTransform(222.3,245.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#DC767F").s().p("AAABuIgbgWIAAAAIgXgsIgFiZIAIADIAoAyIAcgJIAjCvg");
	this.shape_347.setTransform(73,447);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#D1515C").s().p("Ah6g/IBPgOICmBvIh7Asg");
	this.shape_348.setTransform(252.8,244.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#EDB8BD").s().p("Ah0B/IAMgZIAyhPIBTibIBBgKIAWAEIgUBBIgsBCIAAAAIhNCEQgGAIgCALg");
	this.shape_349.setTransform(77.8,410.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#D76670").s().p("AgZAsQgJABgMgFIADgwIg3hjIgOgjIAgghIAqAAIA6BwIgMANIASAGIgDAAIAWAsIAAAAIBECZIgbAXg");
	this.shape_350.setTransform(109.6,52.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E28F97").s().p("AgZBdIAXgrIgTgHIgFAyIguhAIAGgFIAAhXIAAABIgRhBIBSAUIAABYIASAAIAAhWIATgCIAkAWIAMAZIAACrIgXARgAgBhrIAAAAIABABgAgBhrg");
	this.shape_351.setTransform(164.6,247.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#D04D59").s().p("Ag6AoIABgVIgohBQAsgwAJgGQAhgUAnAfIAEAyIAMAAIAHgwQAKgEAKgCIAMAaIgIBpIAXArIgaAaIgIACg");
	this.shape_352.setTransform(19,491.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E7A3AA").s().p("AhXAsIAKgbIAphBIgCgDIBRhLIAtDVIhxAog");
	this.shape_353.setTransform(110.1,364.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#D04D59").s().p("AhzBZIAAgbQArgZgLgdQgDgIglgoIAhhoIAQgBIAvCBIBDASIBOABIAGAVQg8BqgzAOQgIACgHAAQguAAhDg5g");
	this.shape_354.setTransform(62,494.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#CC414C").s().p("AgvijQABgaAHgmIAMhAIAfABIA5FzIhvB8IgKBXQAKl8ADhLg");
	this.shape_355.setTransform(235.7,472.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#CC3F4B").s().p("Ai2AAIBogoIAYhoIACgZICCgtIBpAAIgNCmIhZDfIATALIgyAdgAAMAfIAnAIIAVhbIgmgJgAA9iQIASAPIAOgZIgLgJg");
	this.shape_356.setTransform(272.7,477.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E18992").s().p("AGoFfIgpgNQgZgIgOgKIrroAIgVgXIALgYIAbgVIABAAIAWg3IAqgkQAMAFAJgBIBwCEIEHDZICFCBIgCAAIAYAYIgBgCIAWAWIgBAAIAiAXIAGgDIAwAtIAuAYIAUAPIAWBJg");
	this.shape_357.setTransform(137.1,91.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#DD7A84").s().p("AiOBCIAZhwQAVhOgBg3QgChGglg6IAriEIBiAeIAdBaIAWJBQgGACgMAAIgIgeIgLAGIARAZQgBAJADAOIAsBHIAYAOIAlgBIhpArIh7Acg");
	this.shape_358.setTransform(250.4,436.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#CD4551").s().p("ApDDAQABgFgCgGIAAgXIArgrIAVAAICjhKIg0gUQABgHAAgGIgChIIA6AcIgLgsQGBhsBBgPQEDg7DQAGIAXABIhFBrIgPABIgngLQgYgGgOADQk+BOjKBQQkTBqjMCag");
	this.shape_359.setTransform(117.3,172.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#D04D59").s().p("AGFB9IgBgSIhogVIhggyIhPBcQgEgzgDgHQgNgYguASIgXABQhdgFguAFQhOAIgvA4IgSAAIgogaQgZgPgQgBQg3gDhQAAIiGACIg+hHICCggIA/ARIADgNIgbgKIBxgTICAgBIACABICeAUIAlAAICngdQBkgRBFgNQAJgCALgPIASgZIB6ABIArA0IATgxIgBAHIAjgRICWBtIj1CVg");
	this.shape_360.setTransform(236.7,260.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E28F97").s().p("AkfKUIgNgtIBGgNIAkAKIASgTIAAABIB3iaIikgaIgrgpIgQgyQAIgBgBgHIAJgHIAtAsIA2AZIAKhFIBfgFIA3g9IBaAAIAUBVIhbgIIgaDQIC6iKIgBhZQgBgzACgjQAHiNAEhGQAJh6AXhUQAchnAChIQAEhdghhYIiHgHIgUiEIDDACIAaCtIAQDtIgjCJIgLBAQgIAngBAZQgDBKgJF9IgTAzIgUAWIABgBIgtAXIgWAfIhZA0IgcgqIgiBLIhaAQIhbAlg");
	this.shape_361.setTransform(206.3,457.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#CA3B47").s().p("AjRIBIgVBmIgSADIgfjPICPgoQA5ABAnglQAYgYAdg9IBMiaIhChKIBMgpQAehAhpicQhoifhrguIB3jqIBEAmIAUA0QgaA3gCAWQgEArAtAcIAZAGIApBGIAuA/IABABIBYAjIgQAVIA+BHIgeDDIgjCDIg1BMQggAtgTAgQgaAtgjBFIg5B1Ig/gfIgqBpIgCAwIgWAVg");
	this.shape_362.setTransform(147.3,287);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#CC414C").s().p("AgsCxIlFluIkQgWQATgEAlgJQAigIAWgBQCngDHvgEIAaAlIhGANIAMAuIBTAmIhkAwIAEAnIENAdIBdh4IApAbIASgfIgwgNQAQgHAggSQAcgPATABQALABAPAbIAYAtIgRAgIAOAFIADgkQAjATABARQABARggAtIgvgBIhEAWIgbgGIgNBdIhFAXIAAgBIgNAMIANALIgBARIhhBBgAC1ClIBeAeIAPglIhmgVgAgqBZIBGBBIAYgdIhKg7gAhkArIAjAAIAAgJIgjAAgAj0ilIBSBiIAcgSIhUhlgAgIhnIAYAMIAnhTIgfgNg");
	this.shape_363.setTransform(167.2,538.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#CC414C").s().p("ABxHnIAqgLIixglQgGgzgGhvQgFhqgKg3Qgci3h/hoIAYgVIhogYQg+gOgpgLQgUgFgdgMIgvgTIAGgBICDhEQAsA4BeAlQBiAmA5gYIj5iUIgVgDIACgrIBOjAIAHg5IEBFAQALANAYALIApATQAvAagIA2IgKAdIgSAPIgCgxIgQAPIAzEZIAihDIA6CpIgODtIBLBGIhPAOIB8CPIB7gsIAXAIIgSAYQgLAPgJACQhFANhkASIipAdgAAvG4IAKACIAJgCQAahMgUhNQgWhTg8gjgACbGjIAmADIAAjzIgWgCgAgMCNIAzAAIAAgVIgzAAgAg8hvIBKDFIAlgPIhHjEgAh8iYIAKAQIAtgfIgKgOg");
	this.shape_364.setTransform(218.9,190.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#CD444F").s().p("AnnHNIACgXQABgKgBgKIB0goIgujXIhTBLIAph+IgghWIAEgaIA2gCIANhSIAnABQAKAFACAKIAfDMIASgDIAVhlIBKCmIALBNIhBBdIAeAYIBDgrIAAgnIAAAAIgfgjIAKhjQAIgEAAgBIgHgPIABgaIBAgDQAlgCAagDQAMgDAQgJIAbgRIAFgCIAxgxIAZgSICGkGIAwhOIgTgJIgoAuIg6gvIAjiEIFOgDIADAcIgVAqIgWAAIgXAsIAAAAIgsBZIgUBAIgtFdIgBAZIk3BWIA0BqIE6hPIBLAMIADAtIivA3Ig1gTQgggLgWABQgtAAg5AHIhkANIm0BCIgSABgAizFdIArATIA8gJIgCgUIg5gHgAlME0IAIAvIAKgBIAAgxgAi0E2QAvgGAOghQAJgWgDgyIAWgXIgXAWIhCBwIAAAAgAlBD2IAFARIAmgIIgEgSgAgKC1IAKAaIBsgyIgOgcgADPA2IgKAQIALAGIAGgeIgHAIIAJgNIgJANIAAAAgAjJCwIAAAAIgBABgAjJCwIAAAAg");
	this.shape_365.setTransform(156.1,335.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E28F97").s().p("ABbJkIADg8QABgkgGgXQgJhOgIgmQgOhCg4gcIgrgcIA4inIgjgeIikBnIgOgQIAxhKIhYgfIAogjIgqgcIBXhRIgRgLQgEgEgBABIgoALIh3hRIADhhQACg6AOgjQAuh1AjgoQA/hHBtAQQAJACAOgJIAXgPIBVAgIAXAiIAAAAIBCBuIgBgBIh3DqQBrAvBqCcQBpCcgeBBIhMAqIBCBKIhLCaQgfA9gZAYQglAlg2AAIgEgBg");
	this.shape_366.setTransform(124.4,262.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#EFC2C7").s().p("ACqKPIi3gGIgGACIhghvIhZiaIhMhyIgIg9IhDgbIACgFIgXhOIABABIgZhtIAEiuIAviDIAnhaIgBAAIBZh5IABgJIAJgBIBpg7IBpgvICVgcIDeACIgXAPQgOAJgJgCQhtgQg/BHQgjAoguB1QgOAjgCA6IgDBhIB3BRIjSAAQgTAhAMAXQAMAXAnAFQAcAEAqgCIBHgCIAqAeIhUBPIgVA2IATAJIAWgpIASgZIBegMIgxBKIgjAhIALAMIAmgdICkhnIAlAeIg6CnIg+AQIAAA7IiEBsIgxhBIACgvIgqAXIhTATIAWhUIgvhBIg3g9IgHAFIAMAVIADAhIhiAwIgFAwIALADIAMgaIBrgcIgZArIggAjIAKAJIAtgYIAtBHIAdAVIg3BSIAWAiICcgfIBXAsIArgRIArAeIhqAwIBZAdIgOBSIg2ADgAkQCmIgOArIArgqQAzhPgGgpQgFgrhFgogAjdiMIAYBBIATgHIgbhAg");
	this.shape_367.setTransform(85.8,268.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#D04B57").s().p("AkoIhIhbhbIADgIIgSgeIgTgYIgHgqIADgtIAVgWICagWIAYgBIA7gZIg5gPQhVgBgZAFQg7AMgiAwQgFgCgMABIgHhbIgVhpIAEgYIAHgFIgIgPIgEgrIAZgsIAVhtIAvgBIAXABQADAegJBBQAAA2AxAZIA8ALIhTiiIgFgXIADgDIAzgGIABgPIg0gTIACguIgGhAIgkgJIgGA2IgrgCIgsgVIg7ABIgHhaQACgLAHgIINDhCIA6hYIgCDZIgBAAIB3HxIgJAGIhoAuIBnATIAkAdQAAAIgHAAIgRAyIAgABIAZAVIgdBGIAFBAIAIAkQnxAFilADQgWAAgiAIQglAJgTAEgAhhCZIgEAQIgnAIIgMAVIAGAIIgSBOIgVAVIEbAAIArgWIgXgXQADgIAAgLIAYgBIAwgWIgwgXQgKgBgKgFIgygkIAEgKIgBgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAgAE3C9IAhAAIAAgIIghAAgAhvhEQABAxAkBVQAogMAEgZQAEgZgdhFIABABIgZhZQghAhABA0gAiKlFIAsCAIBoAAIAAAXIBADvIACjaIgXAAIABgXIgXiuIgpCDIhZhugAi6AqIAKAFIAFgCQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIgSjCIAfgSIgOgNIgRAfIgXAXIg7gOgAFAjaIgFAWIg/AUIgBCcIATAnIAuhpIATiEIADAAIAXhvIgbACIgqgtIg+AVIgLByIAYABIAJgbIAogBgAB+iuIgyAVIAsABIAuCXIAkADIAAgbIgjAFIgBiagAkCjkIAaAHIAEgVIgChWgABxj2IAaADIAEgrIgChAg");
	this.shape_368.setTransform(128.2,462.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#C93A45").s().p("AiTPZIgwpRIADhVIgPgtIgJhVIAChHQABgqgCgcIgoqFIBkjfIDyiYQAMAjAcBCQAXA8ADArQAZExAdGsIAyLSIkrE2gAhvg3IAAADIAOAAIAAgEg");
	this.shape_369.setTransform(295.4,357.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#DD7A84").s().p("AgLgrIAXA1IgXAig");
	this.shape_370.setTransform(3.4,138.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E18992").s().p("AgrgIIBWAAIADAQIhbABQAEgJgCgIg");
	this.shape_371.setTransform(78.9,3.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#D45D65").s().p("AgfAEIAAgpIAaghIAlCOg");
	this.shape_372.setTransform(5.4,146.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#ECB3B8").s().p("Aj3BXIgZg3IAAgWIAFgEIAEAEIA2hVIACgtIAAABIAAgBIAAAAIAWgWIAAAAIBshYIFLArQAIACALABIAAEKInJCTIgXACg");
	this.shape_373.setTransform(29.5,130.4);

	this.addChild(this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,2.2,319,560.5);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.PluginObject_1();
	this.instance.setTransform(88.5,155.5,0.555,0.555,0,0,0,161.6,282.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(12));

	// Layer 1
	this.instance_1 = new lib.PluginObject_2();
	this.instance_1.setTransform(88.5,155.5,0.555,0.555,0,0,0,161.6,282.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,311);


(lib.gg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23));

	// Eyes
	Guru_Eyes = new lib.eyes_mc();
    Guru_Eyes.visible = false;
	Guru_Eyes.setTransform(344.7,183.3,0.555,0.555,0,0,0,35.1,31.8);

	this.timeline.addTween(cjs.Tween.get(Guru_Eyes).wait(6).to({rotation:-14.8,x:323.1,y:193.8},0).wait(6).to({rotation:0,x:344.7,y:183.3},0).wait(6).to({regY:31.9,rotation:15,x:368.2,y:175.3},0).wait(6));

	// Body
	this.instance_1 = new lib.Body();
	this.instance_1.setTransform(391.2,304.9,1,1,0,0,0,91.3,271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({rotation:-10},0).wait(6).to({rotation:0},0).wait(6).to({regX:91.4,regY:271.8,rotation:10.5,x:391.3,y:305.1},0).wait(6));

	// Legs
	this.instance_2 = new lib.PluginObject_3();
	this.instance_2.setTransform(391.3,346.7,0.555,0.555,0,0,0,123,113.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.9,33.3,177,375);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;