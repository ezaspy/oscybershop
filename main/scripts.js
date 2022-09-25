// sidebar code
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.fontSize = "20px";
    x.style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// search code
function search_site() {
    let input = document.getElementById('searchbar').value
    let result = document.getElementById("output");
    input = input.toLowerCase();

    if (input.includes("abnormal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("abuse")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a>';
    }
    else if (input.includes("acm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("acquisition")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("actions")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("active")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("adams")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("adfspoof")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("adhd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("admin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ahmia")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("alienvault")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("alissa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("amass")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("analysis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("analysts")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("analytics")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("analyzemft")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("anatomy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("angry")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("anonymize")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("anti-virus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("antisyphon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("apps")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("apt-hunter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("apt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("apt1")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("architecture")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("armstrong")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("army")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("arsenal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a>';
    }
    else if (input.includes("artefacts")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("atomic")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("att&ck")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("attackdefence")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("attacking")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("attacks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("avml")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("awesome-browser-exploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("awesome-ctf")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("awesome")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("awesomeness")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("aws")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("az-900")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("azure")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("azurehunter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("baggett")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("beautifier")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("beginner")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("benchmarks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("betrayed")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("better")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("bhis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("binary")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("bless")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("blogs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("bloodhound")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("blueprint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("bookstack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("botnet")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("bounty")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("breach-parse")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("breadcrumbs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("brew")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("brian")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("bruteshark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("bug")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("bugcrowd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("bugtraq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("bunker")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("burp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("burpsuite")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("caine")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("caldera")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("camouflage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("canary")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("cape")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("capture")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("censys")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("cfreds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("challenges")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("channels")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("checklists")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("cherrytree")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("chimera")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("chinas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("cisa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ciso")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("cli")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("cloud")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("cluley")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("cmd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("cobalt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("cobaltstrike")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("coderpad")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("coding")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("colab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("cole")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("colin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("collection")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("command")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("common")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("compromising")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("comptia")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("computer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("conrad")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("conti")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("controls")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("cookbook")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("core")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("counter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("countermeasures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a>';
    }
    else if (input.includes("cracking")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("crackmapexec")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("crackstation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("create")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("credential")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("critical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("crontab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("crt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("cscript")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("csi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("csoc")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ctfs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("cuckoo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("custom")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("cutter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("cyberattacks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("cyberbattlesim")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("cyberchef")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("cybercrime")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("cyberdefenders")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("cyberwarfare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("cyborg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("cybrary")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("d3fend")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("darknet")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("dasmalwerk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("database")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("datasets")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("ddos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("deadliest")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("debuggers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("deception")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("decode")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("decompiler")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("decrypting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("deep")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("deepbluecli")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("defences")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("defending")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("defense")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("defining")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("delegation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("delivery")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("demystifying")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("deobfuscator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("detection")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("detuxng")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("devices")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("devops")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("dfir")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("dfirlogbook")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("dfirmindmaps")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("dfirtrack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("diagrams")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("diaries")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("didier")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("didierstevens")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("disassemblers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("discovery")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("dist67")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("diva")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("dnstwist")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("documentation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("domains")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("domfind")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("dorks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("dos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("dotpack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("dr")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("duckduckgo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("dumpster")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("dvwa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("edwards")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("egg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("eiab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("elastic")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("empire")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("emu")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("endpoint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("engage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("enisa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ensnare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("enterprise")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("enumeration")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("environments")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("epochconverter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("eric")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("espionage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ethical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("evil")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("evilclippy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("evilginx2")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("evtx_dump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("exiftool")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("expired")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("exploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("exploitation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("exploiting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("explorer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("exposed")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("exposing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("extracting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("eztools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("fakedns")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("faster")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("feeds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("feodo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("fiddler")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("field")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("fighting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("file")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("findings")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("flameshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("flare-on")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("flare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("florian")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("focusing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("forensics")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("formal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("fossen")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("frameworks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("freq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("ftk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("fullhunt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("fundamentals")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("game")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("gathering")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("gcp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("gdb")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ghidra")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("ghost")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("google")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("graham")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("greenshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("greynoise")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("group")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("growing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("grr")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("guide")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("guides")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("guru")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("hacked")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("hackers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("hackersploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("hacking")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("hackinthebox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("hackthebox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("hagen")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("handbook")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("hardy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("harmj0y")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("harvesting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("hashcat")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("hatless1der")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("haveibeenpwned")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("hawk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("haystak")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("healthcare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("heather")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("helk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hex")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hexinator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hidensend")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hierarchy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("hijacking")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("history")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("home")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a>';
    }
    else if (input.includes("homelab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a>';
    }
    else if (input.includes("hopper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hping")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("httprobe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("human")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("hunt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("hunters")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("hunting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("hybrid")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("hypponen")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("ics")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a><br><a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("ida")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("identifiers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("identifying")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ids")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("imager")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("images")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("immunity")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("impacket")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("inceptor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("incident")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("industrial")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("inetsim")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("infosec-resources4all")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a>';
    }
    else if (input.includes("infosec")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ins1gn1a")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("insertion")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("installing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("institute")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("intelligence")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("intelligencex")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("inteltechniques")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("interactsh")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("interception")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("internet")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("into")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("intrusion")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("investigate")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("investigating")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("investigation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("invisiblesecrets")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("ioas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("iocs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ios")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("ippsec")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ipv4")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ipv6")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("jail")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("jake")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("james")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("jason")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("java")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("joe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("joff")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("john")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("johntheripper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("joplin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("jq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("js-beautify")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("json")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("juice-shop")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("kali")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("kansa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("kape")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("karma")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("keepnote")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("kerberos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("kernel")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("kevin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("keylogger")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("keynotes")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("keys")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("kioptrix")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("knife")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("know")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("kodachi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("kql")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("krebs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("kungfu")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("l0phtcrack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("lab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html" target="_blank">Tooling</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("labs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("languages")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("lateral")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("layer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("lee")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("lenny")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("lifecycle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("lime")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("limelighter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("links")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("linpmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("linux")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("linuxcatscale")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("location")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("logging")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("lolbas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("lorandbodo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("lyne")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("machines")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("macos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("macro_pack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("macro")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("mahalik")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("making")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("mal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("malapi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("malicious")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("malshare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("maltego")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("malware")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("malwarebazaar")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("malwaretrafficanalysis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("malwr")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("management")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("mapping")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("mass")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("masscan")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("massdns")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("maturity")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("measures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("media")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("megator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("mem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("memories")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("memory")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("memprocfs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("mentor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("metasploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("metasploitable")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("methodology")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("mfasweep")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("mft")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("mikko")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("mimikatz")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("mind")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("mirage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("misp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("mitigations")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("mitm6")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("mitnick")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("mitre")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("model")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("modifiers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("module")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("monitor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("movement")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("multi-cloud")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("muraena")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("n00py")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("nagios")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("nano")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("navigator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("ncsc")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("necrobrowser")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("needles")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("needlestacks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("nessus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("netcat")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("network")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("networks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("nirsoft")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("nist")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("nmap")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("node-red")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("node")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("normal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("nowhere")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("nsa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("ntlm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("oalabs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("obfuscation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("offensive")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("oledump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("oletools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("ollydbg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("onion")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("onyphe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ooda")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("open")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("openvas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("operated")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("operation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("order")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("osint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ossem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("osxpmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("owasp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("packettotal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("pafish")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("paladin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("parrotos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("passwords")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("pastebin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("payloads")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("pcodedmp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("pdf")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("pe-bear")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("pe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("peepdf")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("peframe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("pehash")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("penetration")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("pentest")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("pentestbox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("pentesteracademy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("pestudio")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("petools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("phil")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("phish")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("phishing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("phishingkittracker")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("phishtool")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("physical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("picoctf")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("pivot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("pivoting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("pivots")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("plaso")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("platforms")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("playbooks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("playlists")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("pmat")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("podcasts")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("policy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ports")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("poshc2")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("post")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("posters")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("power")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("powerforensics")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("powershell")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("powersploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("practical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("preperation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("privacytools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("private")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("procdot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("processes")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("projects")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("protonmail")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("proxy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("publicwww")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("pulsedive")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("pwnage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("pwned")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("python-iocextract")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("python-stix")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("python")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("query")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("radare2")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("range")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("rangeforce")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ranges")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("ransom")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("ransomware")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("real-world")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("rebels")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("reconnaissance")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("redhunt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("redline")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("regex")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("regex101")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("registry")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("regripper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("regshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("remnux")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("remoting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("reply")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("report")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("reports")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("repositories")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("resources")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("responds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("response")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("reverse")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("reversing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("riskiq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("rita")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("roadmap")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("robert")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("root")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("rootkits")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("roth")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("roundup")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("rtfdump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("run")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("russia")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("s-tools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("sample")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("sandboxes")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("sandworm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("sans")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("sarah")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("scada")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("scammers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("scanner")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("scapy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("schemas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("schneier")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("scratch")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("scripting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("scylla")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("seatbelt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("secjuice")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("seclists")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("secure")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("security")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("securityzines")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("sentinel")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("sharphound")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("shehackspurple")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("shellter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("sherlock")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("shimcacheparser")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("shodan")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("shuffle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("side")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("sift")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("sigma")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("signatures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("silk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("skills")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("skoudis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("skyark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("sleuth")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("slide")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("slingshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("smartphone")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("smb")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("snaffler")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("snort")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("snowdon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("soar")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("social")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("sof-elk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("spam")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("spectreops")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("speeches")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("spidermonkey")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("spl")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("splunk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("spyse")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("sqlite")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("ssdeep")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("steganography")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("steghide")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("stevens")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("strand")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("strategies")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("strike")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("structures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("stuxnet")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("subbrute")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("subdomain")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("suite")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("sumrecon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("supermem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("suricata")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("swiss")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("synapsint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("sysinternals")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("sysmon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("systems")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("tails")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("tcm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("team")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("technology")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("templates")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("theharvester")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("thehive")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("thephish")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("thezoo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("third")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html" target="_blank">Posters</a>';
    }
    else if (input.includes("threatcrowd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("threaten")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("threatfeeds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("threathunting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("threatpursuit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("three")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("thyer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("timesketch")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("tls")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("tooling")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("toolkit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("tools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("top")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("torres")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("trace")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("tracing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("track")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("tracker")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("training")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("tree")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("triage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("trid")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("trilium")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("trust")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("tryhackme")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("tsurugi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("tutorials")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("tweetscraper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("types")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("tzworks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("udemy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("unconventional")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("uniq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("unit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("unit42")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("units")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("unprotect")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("urlhaus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("urlscan")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("usb")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("velociraptor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("via")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("victims")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("videos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("viewer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("viewers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("vim")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("violent")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("viper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("virtual")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("virus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("viruses")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("virussign")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("virustotal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("volatility")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("vscode")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("vt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("vulnerability")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("vulnerable")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html" target="_blank">Virtual Machines</a>';
    }
    else if (input.includes("vulnhub")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html" target="_blank">Training, CTFs &amp; Challenges</a>';
    }
    else if (input.includes("vx-underground")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("walkthroughs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("weaponization")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("weaponizing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("webcasts")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("wela")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("what2log")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html" target="_blank">Projects</a>';
    }
    else if (input.includes("whatsmyname")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("whonix")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("wigle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("wiki")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("williams")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("win")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("windbg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("windows")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("winpmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("wireshark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("wmic")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("wondersmith_rae")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("wql")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("writing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("wscript")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("x64dbg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("xiao")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("xlm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("xlmmacrodeobfuscator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("xss")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("xxd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("yara")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("yeti")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else if (input.includes("yomi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html" target="_blank">Cyber Defence (Blue Team)</a>';
    }
    else if (input.includes("yuki")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html" target="_blank">Offensive Cyber (Red Team)</a>';
    }
    else if (input.includes("zeek")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("zelster")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html" target="_blank">Media &amp; Socials Sheets</a>';
    }
    else if (input.includes("zero")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html" target="_blank">Publications</a>';
    }
    else if (input.includes("zimmerman")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html" target="_blank">Cheat Sheets</a>';
    }
    else if (input.includes("zoomeye")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html" target="_blank">Threat Intelligence</a>';
    }
    else {
        result.innerHTML = "";
    }
}