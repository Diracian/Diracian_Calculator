//Loads the pull down menu that allows for the selection of individual equations

function cat() {
	sel = document.getElementById("scat");
	opt = sel.options[sel.selectedIndex].value;
	switch(opt) {
		case "1":
			document.getElementById('ocat').innerHTML = "<select id=equsel><option value=1>v = v+at</option><option value=2>x = x+vt+&frac12;at&sup2;</option><option value=3>v&sup2; = v&sup2;+2a(x-x)</option><option value=4>F = ma</option><option value=5>F <= &micro;N</option><option value=6>a = v&sup2;/r</option><option value=7>&tau; = rF sin &theta;</option><option value=8>p = mv</option><option value=9>J = F&Delta;t</option><option value=10>K = &frac12;mv&sup2;</option><option value=11>&Delta;U = mgh</option><option value=12>W = F&Delta;r cos &theta;</option><option value=13>P = W/&Delta;t</option><option value=14>P = Fv cos &theta;</option><option value=15>F = -kx</option><option value=16>U = &frac12;kx&sup2;</option><option value=17>T = 2&pi;(m/k)^.5</option><option value=18>T = 2&pi;(l/g)^.5</option><option value=19>T = 1/f</option><option value=20>F = -Gm1m2/r&sup2;</option><option value=21>U = Gm1m2/r</option></select><br><input type=button value='Select Equation' name=equ id=equ onclick=equt()></input>"
		break;
		case "2":
			document.getElementById('ocat').innerHTML = "<select id=equsel><option value=1>F = kq1q2/r&sup2;</option><option value=2>E = F/q</option><option value=3>U = kq1q2/r</option><option value=4>E = -V/d</option><option value=5>C = Q/V</option><option value=6>C = &epsilon;A/d</option><option value=7>U = &frac12;QV</option><option value=8>U = &frac12;CV&sup2;</option><option value=9>I = &Delta;Q/&Delta;t</option><option value=10>R = pl/A</option><option value=11>V = IR</option><option value=12>P = IV</option><option value=13>F = qvB sin &theta;</option><option value=14>F = BIl sin &theta;</option><option value=15>B = &mu;I/(2r&pi;)</option><option value=16>&Phi; = BA cos &theta;</option><option value=17>e = -&Delta;&Phi;/&Delta;t</option><option value=18>&epsilon; = Blv</option></select><br><input type=button value='Select Equation' name=equ id=equ onclick=equt()></input>"
		break;
		case "3":
			document.getElementById('ocat').innerHTML = "<select id=equsel><option value=1>P = P + pgh</option><option value=2>F = pVg</option><option value=3>Av = Av</option><option value=4>const. = P + pgy + &frac12;pv&sup2;</option><option value=5>&Delta;l = al&Delta;T</option><option value=6>H = kA&Delta;T/L</option><option value=7>P = F/A</option><option value=8>PV = nRT</option><option value=9>PV = NkT</option><option value=10>K = &frac12;3kT</option><option value=11>v = (3RT/M)^.5</option><option value=12>v = (3kT/&mu;)^.5</option><option value=13>W = -P&Delta;V</option><option value=14>&Delta;U = Q + W</option><option value=15>e = |W/Q|</option></select><br><input type=button value='Select Equation' name=equ id=equ onclick=equt()></input>"					
		break;
		case "4":
			document.getElementById('ocat').innerHTML = "<select id=equsel><option value=1>v = f&lambda;</option><option value=2>n = c/v</option><option value=3>n sin &theta; = n sin &theta;</option><option value=4>sin &theta; = n/n</option><option value=5>1/f = 1/x + 1/x</option><option value=6>M = h/h</option><option value=7>M = -x/x</option><option value=8>f = &frac12;R</option><option value=9>d sin &theta; = m&lambda;</option><option value=10>x = m&lambda;L/d</option></select><br><input type=button value='Select Equation' name=equ id=equ onclick=equt()></input>"					
		break;
		case "5":
			document.getElementById('ocat').innerHTML = "<select id=equsel><option value=1>E = hf</option><option value=2>E = pc</option><option value=3>&lambda; = h/p</option><option value=4>&Delta;E = &Delta;mc&sup2;</option></select><br><input type=button value='Select Equation' name=equ id=equ onclick=equt()></input>"
		break;
	}
	document.getElementById('go').innerHTML = "";
	document.getElementById('go2').innerHTML = "";
}