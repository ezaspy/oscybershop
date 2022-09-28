//sidebar code
function w3_open() {
    var x = document.getElementById("osSidebar");
    x.style.width = "100%";
    x.style.fontSize = "20px";
    x.style.display = "block";
}
function w3_close() {
    document.getElementById("osSidebar").style.display = "none";
}

// search code
function search_site() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let result = document.getElementById("output");

    if (input.includes("abnormal")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Know Abnormal Find Evil</a></li></ul>';
    }
    else if (input.includes("note taking") || input.includes("check lists") || input.includes("check list") || input.includes("checklists") || input.includes("checklist") || input.includes("text editor") || input.includes("text editors") || input.includes("case management") || input.includes("incident management")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#notes" target="_blank">Note Taking &amp; Checklists</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#notes" target="_blank">Note Taking &amp; Checklists</a></li></ul>';
    }
    else if (input.includes("abuse")) {
        result.innerHTML = 'Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#abuse_ch" target="_blank">abuse.ch</a></li></ul>';
    }
    else if (input.includes("acm") || input.includes("counter measures") || input.includes("countermeasures") || input.includes("active counter measures") || input.includes("active countermeasures")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">ACM Threat Hunting</a></li></ul>';
    }
    else if (input.includes("actions") || input.includes("artefacts") || input.includes("understanding")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#understanding_actions_and_artefacts" target="_blank">Understanding Actions and Artefacts</a></li></ul>';
    }
    else if (input.includes("active")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#active_directory_security" target="_blank">Active Directory Security</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">ADHD</a></li></ul>';
    }
    else if (input.includes("industrial") || input.includes("systems") || input.includes("industrial control") || input.includes("control systems") || input.includes("industrial control systems") || input.includes("ics") || input.includes("scada") || input.includes("supervisory control and data acquisition")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#industrial_control_systems" target="_blank">Industrial Control Systems</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ics" target="_blank">ICS</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ics" target="_blank">ICS</a></li></ul>';
    }
    else if (input.includes("active directory") || input.includes("ad")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#active_directory_security" target="_blank">Active Directory Security</a></li></ul>';
    }
    else if (input.includes("mentor") || input.includes("cyber mentor") || input.includes("the cyber mentor") || input.includes("tcm") || input.includes("adams") || input.includes("heath") || input.includes("heath adams")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_cyber_mentor" target="_blank">The Cyber Mentor</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tcm" target="_blank">TCM</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#heath_adams" target="_blank">Heath Adams</a></li></ul>';
    }
    else if (input.includes("adhd") || input.includes("active defence") || input.includes("active defense") || input.includes("harbinger") || input.includes("distribution")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">ADHD</a></li></ul>';
    }
    else if (input.includes("ahmia")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ahmia" target="_blank">ahmia</a></li></ul>';
    }
    else if (input.includes("alienvault") || input.includes("alien") || input.includes("vault")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#alienvault" target="_blank">Alienvault</a></li></ul>';
    }
    else if (input.includes("alissa torres") || input.includes("alissa") || input.includes("torres")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#alissa_torres" target="_blank">Alissa Torres</a></li></ul>';
    }
    else if (input.includes("amass")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#amass" target="_blank">Amass</a></li></ul>';
    }
    else if (input.includes("analysis")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#event_log_analysis" target="_blank">Event Log Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#lateral_movement_analysis" target="_blank">Lateral Movement Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#web_proxy_event_analysis" target="_blank">Web Proxy Event Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malware_analysis" target="_blank">Malware Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#anti_virus_event_analysis" target="_blank">Anti Virus Event Analysis</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">PMAT Labs Walkthroughs</a></li></ul><br>Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">REMnux</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Reverse Engineering</a></li></ul>';
    }
    else if (input.includes("analytics") || input.includes("exploiting") || input.includes("ensnare") || input.includes("victims") || input.includes("exploiting analytics") || input.includes("ensnare victims")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#exploiting_web_analytics_to_ensnare_victims" target="_blank">Exploiting Web Analytics to Ensnare Victims</a></li></ul>';
    }
    else if (input.includes("analyzemft")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#analyzemft" target="_blank">analyzemft</a></li></ul>';
    }
    else if (input.includes("anatomy") || input.includes("botnet") || input.includes("bot")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#anatomy_of_botnet_attack" target="_blank">Anatomy of Botnet Attack</a></li></ul>';
    }
    else if (input.includes("angry") || input.includes("angry ip") || input.includes("ip scanner") || input.includes("angry ip scanner")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Angry IP Scanner</a></li></ul>';
    }
    else if (input.includes("anonymize") || input.includes("whonix")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#anonymize_kali_with_whonix" target="_blank">Anonymize Kali with Whonix</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#whonix" target="_blank">Whonix</a></li></ul>';
    }
    else if (input.includes("antisyphon")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#antisyphon" target="_blank">Antisyphon</a></li></ul>';
    }
    else if (input.includes("apps") || input.includes("third") || input.includes("party") || input.includes("parties") || input.includes("third party") || input.includes("third party apps") || input.includes("3rd") || input.includes("3rd party") || input.includes("3rd party apps")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#windows_third_party_apps" target="_blank">Windows Third Party Apps</a></li></ul>';
    }
    else if (input.includes("apt")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#apt_hunter" target="_blank">APT Hunter</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_chinas_cyber_espionage_units" target="_blank">APT1: Exposing One of China\'s Cyber Espionage Units</a></li></ul>';
    }
    else if (input.includes("apt1") || input.includes("espionage") || input.includes("units") || input.includes("exposing") || input.includes("china")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_chinas_cyber_espionage_units" target="_blank">APT1: Exposing One of China\'s Cyber Espionage Units</a></li></ul>';
    }
    else if (input.includes("architecture") || input.includes("architect")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#security_architecture" target="_blank">Security Architecture</a></li></ul>';
    }
    else if (input.includes("armstrong") || input.includes("steve") || input.includes("steve armstrong")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#steve_armstrong" target="_blank">Steve Armstrong</a></li></ul>';
    }
    else if (input.includes("arsenal")) {
        result.innerHTML = 'Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">AWS Arsenal</a></li></ul>';
    }
    else if (input.includes("atomic")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#atomic_red_team" target="_blank">Atomic Red Team</a></li></ul>';
    }
    else if (input.includes("attackdefence")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attackdefence" target="_blank">AttackDefence</a></li></ul>';
    }
    else if (input.includes("attacks")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Common Attacks Defences</a></li></ul>';
    }
    else if (input.includes("avml")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#avml" target="_blank">AVML</a></li></ul>';
    }
    else if (input.includes("awesome")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#awesome-browser_exploit" target="_blank">Awesome-Browser Exploit</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_ctf" target="_blank">Awesome CTF</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_ir" target="_blank">Awesome IR</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_awesomeness" target="_blank">Awesome Awesomeness</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_event_ids" target="_blank">Awesome Event IDs</a></ul>';
    }
    else if (input.includes("aws")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#aws" target="_blank">AWS</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">AWS Arsenal</a></li></ul>';
    }
    else if (input.includes("azure")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#az_900_azure_fundamentals" target="_blank">AZ-900 Azure Fundamentals</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Azurehunter</a></li></ul>';
    }
    else if (input.includes("azurehunter")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Azurehunter</a></li></ul>';
    }
    else if (input.includes("baggett") || input.includes("mark") || input.includes("mark baggett")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#mark_baggett" target="_blank">Mark Baggett</a></li></ul>';
    }
    else if (input.includes("beautifier")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#beautifier" target="_blank">Beautifier</a></li></ul>';
    }
    else if (input.includes("beginner") || input.includes("begin")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfir_beginner_to_expert" target="_blank">DFIR Beginner to Expert</a></li></ul>';
    }
    else if (input.includes("benchmarks")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cis_benchmarks" target="_blank">CIS Benchmarks</a></li></ul>';
    }
    else if (input.includes("betrayed") || input.includes("trust")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">NSA Betrayed the World\'s Trust</a></li></ul>';
    }
    else if (input.includes("build") || input.includes("building")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#build_a_home_lab" target="_blank">Build a Home Lab</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">HomeLabResources</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#building_a_malware_lab" target="_blank">building_a_malware_lab</a></li></ul>';
    }
    else if (input.includes("better")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#building_a_better_soc" target="_blank">Building a Better SOC</a></li></ul>';
    }
    else if (input.includes("bhis") || input.includes("black hills") || input.includes("black hills information security")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">BHIS (Webcast)</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">BHIS (Discord)</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">BHIS (Twitter)</a></li></ul>';
    }
    else if (input.includes("binary")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#binary_ninja" target="_blank">Binary Ninja</a></li></ul>';
    }
    else if (input.includes("bless")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bless" target="_blank">Bless</a></li></ul>';
    }
    else if (input.includes("bloodhound")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#bloodhound" target="_blank">Bloodhound</a></li></ul>';
    }
    else if (input.includes("blueprint")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#blueprint" target="_blank">Blueprint</a></li></ul><br<Pen Testing Blueprints</a></ul>';
    }
    else if (input.includes("bookstack")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#bookstack" target="_blank">Bookstack</a></li></ul>';
    }
    else if (input.includes("bounty")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_bounty_basics" target="_blank">Bug Bounty Basics</a></li></ul>';
    }
    else if (input.includes("breadcrumbs")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#breadcrumbs" target="_blank">Breadcrumbs</a></li></ul>';
    }
    else if (input.includes("brew")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#brew" target="_blank">Brew</a></li></ul>';
    }
    else if (input.includes("brian krebs") || input.includes("brian") || input.includes("krebs")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#brian_krebs" target="_blank">Brian Krebs</a></li></ul>';
    }
    else if (input.includes("bruteshark")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bruteshark" target="_blank">Bruteshark</a></li></ul>';
    }
    else if (input.includes("bug")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_bounty_basics" target="_blank">Bug Bounty Basics</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Bug Hunters Methodology</a></li></ul><brTraining, CTFs &amp; Challengesul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#bugcrowd" target="_blank">Bugcrowd</a></li></ul><br>Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#bugtraq" target="_blank">Bugtraq</a></li></ul>';
    }
    else if (input.includes("bugcrowd")) {
        result.innerHTML = 'Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#bugcrowd" target="_blank">Bugcrowd</a></li></ul>';
    }
    else if (input.includes("bugtraq")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#bugtraq" target="_blank">Bugtraq</a></li></ul>';
    }
    else if (input.includes("bunker")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_bunker" target="_blank">OSINT Bunker</a></li></ul>';
    }
    else if (input.includes("burp") || input.includes("burpsuite")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#burp_suite" target="_blank">Burp Suite</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#burpsuite" target="_blank">Burpsuite</a></li></ul>';
    }
    else if (input.includes("caine")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#caine" target="_blank">Caine</a></li></ul>';
    }
    else if (input.includes("caldera")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#caldera" target="_blank">Caldera</a></li></ul>';
    }
    else if (input.includes("camouflage")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#camouflage" target="_blank">Camouflage</a></li></ul>';
    }
    else if (input.includes("canary")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#red_canary" target="_blank">Red Canary</a></li></ul>';
    }
    else if (input.includes("cape")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cape" target="_blank">Cape</a></li></ul>';
    }
    else if (input.includes("capture")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#process_capture" target="_blank">Process Capture</a></li></ul>';
    }
    else if (input.includes("censys")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#censys" target="_blank">Censys</a></li></ul>';
    }
    else if (input.includes("cfreds")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cfreds" target="_blank">CFREDS</a></li></ul>';
    }
    else if (input.includes("challenge")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Dr Cole Challenge</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#swiss_hacking_challenge" target="_blank">Swiss Hacking Challenge</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#counter_hack_challenges" target="_blank">Counter Hack Challenges</a></li></ul>';
    }
    else if (input.includes("cherrytree") || input.includes("cherry")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#cherrytree" target="_blank">Cherrytree</a></li></ul>';
    }
    else if (input.includes("chimera")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#chimera" target="_blank">Chimera</a></li></ul>';
    }
    else if (input.includes("cisa")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#cisa_ir_playbooks" target="_blank">CISA IR Playbooks</a></li></ul>';
    }
    else if (input.includes("ciso") || input.includes("mind") || input.includes("mindmap") || input.includes("mind map")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#ciso_mind_map" target="_blank">CISO Mind Map</a></li></ul>';
    }
    else if (input.includes("cli")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Windows Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Linux CLI Fundamentals</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli" target="_blank">Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Windows CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#multi_cloud_cli" target="_blank">Multi Cloud CLI</a></li></ul>';
    }
    else if (input.includes("cloud")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#multi_cloud_cli" target="_blank">Multi Cloud CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#cloud_security_devops" target="_blank">Cloud Security DevOps</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#aws" target="_blank"> AWS</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">AWS Arsenal</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#az_900_azure_fundamentals" target="_blank">AZ-900 Azure Fundamentals</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Azurehunter</a></li></ul><br>Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#gcp" target="_blank">GCP</a></li></ul>';
    }
    else if (input.includes("cluley") || input.includes("graham") || input.includes("graham cluley")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#graham_cluley" target="_blank">Graham Cluley</a></li></ul>';
    }
    else if (input.includes("kungfu") || input.includes("cmdline kungfu") || input.includes("cmd line kungfu") || input.includes("command line kungfu") || input.includes("command line")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cmd_line_kungfu" target="_blank">CMD Line Kungfu</a></li></ul>';
    }
    else if (input.includes("cmd") || input.includes("cmd line") || input.includes("cmdline") || input.includes("command line")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_command_line_obfuscation" target="_blank">Windows Command Line Obfuscation</a></li></ul><br>Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cmd_line_kungfu" target="_blank">CMD Line Kungfu</a></li></ul>';
    }
    else if (input.includes("cobalt") || input.includes("strike") || input.includes("cobaltstrike") || input.includes("cobalt strike")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Hunting Cobalt Strike</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cobaltstrike_defence" target="_blank">Frameworks &amp; Projects - CobaltStrike Defence</a></ul>';
    }
    else if (input.includes("coderpad")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#coderpad" target="_blank">Coderpad</a></li></ul>';
    }
    else if (input.includes("colab")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#colab" target="_blank">Colab</a></li></ul>';
    }
    else if (input.includes("colin hardy") || input.includes("colin") || input.includes("hardy")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#colin_hardy" target="_blank">Colin Hardy</a></li></ul>';
    }
    else if (input.includes("collection")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#evidence_collection" target="_blank">Evidence Collection</a></li></ul>';
    }
    else if (input.includes("command")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_commands" target="_blank">Linux Commands</a></li></ul><br>Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#commando" target="_blank">Commando</a></li></ul>';
    }
    else if (input.includes("common")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Common Attacks Defences</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_ports" target="_blank">Common Ports</a></li></ul>';
    }
    else if (input.includes("comptia")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#comptia" target="_blank">Comptia</a></li></ul>';
    }
    else if (input.includes("conrad") || input.includes("eric conrad")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eric_conrad" target="_blank">Eric Conrad</a></li></ul>';
    }
    else if (input.includes("control")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cis_controls" target="_blank">CIS Controls</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#industrial_control_systems" target="_blank">Industrial Control Systems</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ics" target="_blank">ICS</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ics" target="_blank">ICS</a></li></ul>';
    }
    else if (input.includes("controls")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cis_controls" target="_blank">CIS Controls</a></li></ul>';
    }
    else if (input.includes("core")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">SOC Core Skills</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powershell_core" target="_blank">Powershell Core</a></li></ul>';
    }
    else if (input.includes("skills")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">SOC Core Skills</a></li></ul>';
    }
    else if (input.includes("counter")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#counter_hack_challenges" target="_blank">Counter Hack Challenges</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#active_countermeasures" target="_blank">Active Countermeasures</a></li></ul>';
    }
    else if (input.includes("countermeasures")) {
        result.innerHTML = 'Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#active_countermeasures" target="_blank">Active Countermeasures</a></li></ul>';
    }
    else if (input.includes("cracking stuxnet") || input.includes("cracking") || input.includes("stuxnet") || input.includes("iran") || input.includes("natanz") || input.includes("nuclear")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#cracking_stuxnet" target="_blank">Cracking Stuxnet</a></li></ul>';
    }
    else if (input.includes("critical")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#critical_log_review" target="_blank">Critical Log Review</a></li></ul>';
    }
    else if (input.includes("cron") || input.includes("crontab")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#crontab_guru" target="_blank">Crontab Guru</a></li></ul>';
    }
    else if (input.includes("crt") || input.includes("crt.sh")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#crt_sh" target="_blank">crt.sh</a></li></ul>';
    }
    else if (input.includes("cscript")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cscript" target="_blank">Cscript</a></li></ul>';
    }
    else if (input.includes("csi")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#csi_linux" target="_blank">CSI Linux</a></li></ul>';
    }
    else if (input.includes("csoc") || input.includes("strategies") || input.includes("class") || input.includes("world class")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Ten Strategies of a World Class CSOC</a></li></ul>';
    }
    else if (input.includes("ctfs")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ctfs" target="_blank">CTFS</a></li></ul>';
    }
    else if (input.includes("cuckoo")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cuckoo" target="_blank">Cuckoo</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#the_cuckoos_egg" target="_blank">The Cuckoos Egg</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#install_cuckoo" target="_blank">Install Cuckoo</a></li></ul>';
    }
    else if (input.includes("cutter")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cutter" target="_blank">Cutter</a></li></ul>';
    }
    else if (input.includes("cyber")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">How Cyberattacks Threaten Real World</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_is_cybercrime?" target="_blank">What is Cybercrime?</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#everyday_cybercrime_and_what_you_can_do_about_it" target="_blank">Everyday Cybercrime and what you can do about it</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#defining_cyberwarfare" target="_blank">Defining Cyberwarfare</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cyberbattlesim" target="_blank">Cyberbattlesim</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberchef" target="_blank">Cyberchef</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberdefenders" target="_blank">Cyberdefenders</a></li></ul></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#atomic_red_team" target="_blank">Atomic Red Team</a></li></ul>';
    }
    else if (input.includes("cyberattacks") || input.includes("threaten") || input.includes("cyberattacks threaten") || input.includes("real world") || input.includes("threaten real world")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">How Cyberattacks Threaten Real World</a></li></ul>';
    }
    else if (input.includes("cyberbattlesim")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cyberbattlesim" target="_blank">Cyberbattlesim</a></li></ul>';
    }
    else if (input.includes("cyberchef")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberchef" target="_blank">Cyberchef</a></li></ul>';
    }
    else if (input.includes("cybercrime")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_is_cybercrime?" target="_blank">What is Cybercrime?</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#everyday_cybercrime_and_what_you_can_do_about_it" target="_blank">Everyday Cybercrime and what you can do about it</a></li></ul>';
    }
    else if (input.includes("cyberdefenders")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberdefenders" target="_blank">Cyberdefenders</a></li></ul>';
    }
    else if (input.includes("defining cyberwarfare") || input.includes("cyberwarfare") || input.includes("defining")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#defining_cyberwarfare" target="_blank">Defining Cyberwarfare</a></li></ul>';
    }
    else if (input.includes("cyborg hawk") || input.includes("cyborg") || input.includes("hawk")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#cyborg_hawk" target="_blank">Cyborg Hawk</a></li></ul>';
    }
    else if (input.includes("cybrary")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cybrary" target="_blank">Cybrary</a></li></ul>';
    }
    else if (input.includes("d3fend")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#d3fend" target="_blank">D3fend</a></li></ul>';
    }
    else if (input.includes("darknet diaries") || input.includes("darknet") || input.includes("diaries")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#darknet_diaries" target="_blank">Darknet Diaries</a></li></ul>';
    }
    else if (input.includes("dasmalwerk")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dasmalwerk_eu" target="_blank">Dasmalwerk Eu</a></li></ul>';
    }
    else if (input.includes("database")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#urlhaus_database" target="_blank">Urlhaus Database</a></li></ul>';
    }
    else if (input.includes("datasets") || input.includes("dataset") || input.includes("projects")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#pd" target="_blank">Projects &amp; Datasets</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#security_datasets" target="_blank">Security Datasets</a></li></ul>';
    }
    else if (input.includes("deception")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#cyber_deception" target="_blank">Cyber Deception</a></li></ul>';
    }
    else if (input.includes("decode") || input.includes("operation")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#operation_decode" target="_blank">Operation Decode</a></li></ul>';
    }
    else if (input.includes("deep")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#deepbluecli" target="_blank">DeepBlueCLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ssdeep" target="_blank">SSDeep</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Weaponizing the Deep Web</a></li></ul>';
    }
    else if (input.includes("deepbluecli")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#deepbluecli" target="_blank">DeepBlueCLI</a></li></ul>';
    }
    else if (input.includes("defence") || input.includes("defense")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Common Attacks Defences</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sans_cyber_defense" target="_blank">SANS Cyber Defense</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">ADHD</a></li></ul>';
    }
    else if (input.includes("defences") || input.includes("defenses")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Common Attacks Defences</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">ADHD</a></li></ul>';
    }
    else if (input.includes("defending") || input.includes("fighting") || input.includes("viruses") || input.includes("fighting viruses") || input.includes("defending the net")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Fighting Viruses Defending the Net</a></li></ul>';
    }
    else if (input.includes("delivery")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#delivery" target="_blank">Delivery</a></li></ul>';
    }
    else if (input.includes("demystifying")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Demystifying Threat Hunting</a></li></ul>';
    }
    else if (input.includes("deobfuscator") || input.includes("xlm")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xlmmacrodeobfuscator" target="_blank">xlmmacrodeobfuscator</a></li></ul>';
    }
    else if (input.includes("detuxng")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#detuxng" target="_blank">Detuxng</a></li></ul>';
    }
    else if (input.includes("devices")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">All Your Devices can be Hacked</a></li></ul>';
    }
    else if (input.includes("dfir")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">DFIR</a></li></ul>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#dfirmindmaps" target="_blank">DFIRmindmaps</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">DFIRlogbook</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirtrack" target="_blank">DFIRtrack</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfir_beginner_to_expert" target="_blank">DFIR Beginner to Expert</a></li></ul>';
    }
    else if (input.includes("dfirlogbook")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">DFIRlogbook</a></li></ul>';
    }
    else if (input.includes("dfirmindmaps")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#dfirmindmaps" target="_blank">DFIRmindmaps</a></li></ul>';
    }
    else if (input.includes("dfirtrack")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirtrack" target="_blank">DFIRtrack</a></li></ul>';
    }
    else if (input.includes("didier") || input.includes("stevens") || input.includes("didier stevens") || input.includes("didierstevens")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#didier_stevens_dist67" target="_blank">Didier Stevens Dist67</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didier_stevens_dist67" target="_blank">Didier Stevens Dist67</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didierstevens_suite" target="_blank">Didierstevens Suite</a></li></ul>';
    }
    else if (input.includes("dist67")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#didier_stevens_dist67" target="_blank">Didier Stevens Dist67</a></li></ul>';
    }
    else if (input.includes("diva")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dfir_diva" target="_blank">DFIR Diva</a></li></ul>';
    }
    else if (input.includes("dnstwist")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dnstwist" target="_blank">DNStwist</a></li></ul>';
    }
    else if (input.includes("domains") || input.includes("expired") || input.includes("expired domains")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#expired_domains" target="_blank">Expired Domains</a></li></ul>';
    }
    else if (input.includes("domfind")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#domfind" target="_blank">Domfind</a></li></ul>';
    }
    else if (input.includes("dorks")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#shodan_dorks" target="_blank">Shodan Dorks</a></li></ul>';
    }
    else if (input.includes("ddos") || input.includes("dos")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ddos_incident_response" target="_blank">DDOS Incident Response</a></li></ul>';
    }
    else if (input.includes("dotpack")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#dotpack" target="_blank">Dotpack</a></li></ul>';
    }
    else if (input.includes("dr") || input.includes("cole") || input.includes("dr eric cole") || input.includes("dr.") || input.includes("dr. eric cole")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_eric_cole" target="_blank">Dr Eric Cole</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Dr Cole Challenge</a></li></ul>';
    }
    else if (input.includes("duckduckgo")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#duckduckgo" target="_blank">Duckduckgo</a></li></ul>';
    }
    else if (input.includes("dumpster")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dns_dumpster" target="_blank">DNS Dumpster</a></li></ul>';
    }
    else if (input.includes("dvwa")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#dvwa" target="_blank">DVWA</a></li></ul>';
    }
    else if (input.includes("sarah") || input.includes("edwards") || input.includes("sarah edwards")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sarah_edwards" target="_blank">Sarah Edwards</a></li></ul>';
    }
    else if (input.includes("egg")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#the_cuckoos_egg" target="_blank">The Cuckoos Egg</a></li></ul>';
    }
    else if (input.includes("eiab") || input.includes("ncsc") || input.includes("exercise") || input.includes("exercise in a box") || input.includes("ttx") || input.includes("table top") || input.includes("table top exercise") || input.includes("tabletop") || input.includes("tabletop exercise") || input.includes("national cyber security centre")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ncsc_eiab" target="_blank">NCSC EIAB</a></li></ul>';
    }
    else if (input.includes("elastic")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#elastic" target="_blank">Elastic</a></li></ul>';
    }
    else if (input.includes("empire")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#empire" target="_blank">Empire</a></li></ul>';
    }
    else if (input.includes("emu")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#flare_emu" target="_blank">FLARE EMU</a></li></ul>';
    }
    else if (input.includes("endpoint") || input.includes("measures") || input.includes("endpoint security measures")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#endpoint_security_measures" target="_blank">Endpoint Security Measures</a></li></ul>';
    }
    else if (input.includes("engage")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#engage" target="_blank">Engage</a></li></ul>';
    }
    else if (input.includes("enisa")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#enisa" target="_blank">Enisa</a></li></ul>';
    }
    else if (input.includes("enterprise")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Kansa for Enterprise Scale Threat Hunting</a></li></ul>';
    }
    else if (input.includes("epochconverter")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#epochconverter" target="_blank">Epochconverter</a></li></ul>';
    }
    else if (input.includes("eric")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Eric Zimmerman Tools</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_eric_cole" target="_blank">Dr Eric Cole</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Dr Cole Challenge</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eric_conrad" target="_blank">Eric Conrad</a></li></ul>';
    }
    else if (input.includes("eric zimmerman") || input.includes("zimmerman")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Eric Zimmerman Tools</a></li></ul>';
    }
    else if (input.includes("ethical")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#become_an_ethical_hacker_for_0" target="_blank">Become an Ethical Hacker for $0</a></li></ul>';
    }
    else if (input.includes("evil")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Know Normal Hunt Evil</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Know Abnormal Find Evil</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilclippy" target="_blank">Evilclippy</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilginx2" target="_blank">Evilginx2</a></li></ul>';
    }
    else if (input.includes("normal")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Know Normal Hunt Evil</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Know Abnormal Find Evil</a></li></ul>';
    }
    else if (input.includes("evilclippy")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilclippy" target="_blank">Evilclippy</a></li></ul>';
    }
    else if (input.includes("evilginx2")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilginx2" target="_blank">Evilginx2</a></li></ul>';
    }
    else if (input.includes("evtx_dump")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#evtx_dump" target="_blank">EVTX Dump</a></li></ul>';
    }
    else if (input.includes("exiftool")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#exiftool" target="_blank">Exiftool</a></li></ul>';
    }
    else if (input.includes("explorer")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wmi_explorer" target="_blank">WMI Explorer</a></li></ul>';
    }
    else if (input.includes("extracting") || input.includes("extract")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#extracting_value_from_cti" target="_blank">Extracting Value from CTI</a></li></ul>';
    }
    else if (input.includes("eztools") || input.includes("kape") || input.includes("eztools kape")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eztools_kape" target="_blank">EZtools Kape</a></li></ul>';
    }
    else if (input.includes("fakedns")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fakedns" target="_blank">FakeDNS</a></li></ul>';
    }
    else if (input.includes("faster") || input.includes("making") || input.includes("memories")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Making Memories Faster Response</a></li></ul>';
    }
    else if (input.includes("feeds")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#feeds" target="_blank">Feeds</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threatfeeds IO</a></li></ul>';
    }
    else if (input.includes("feodo")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#feodo_tracker" target="_blank">Feodo Tracker</a></li></ul>';
    }
    else if (input.includes("fiddler")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fiddler" target="_blank">Fiddler</a></li></ul>';
    }
    else if (input.includes("field")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">IR Field Guide</a></li></ul>';
    }
    else if (input.includes("fighting")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Fighting Viruses Defending the Net</a></li></ul>';
    }
    else if (input.includes("findings")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#security_assessment_findings_report" target="_blank">Security Assessment Findings Report</a></li></ul>';
    }
    else if (input.includes("flameshot")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#flameshot" target="_blank">Flameshot</a></li></ul>';
    }
    else if (input.includes("flare")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#flare" target="_blank">FLARE</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#flare-on" target="_blank">Flare-On</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#flare_emu" target="_blank">FLARE EMU</a></li></ul>';
    }
    else if (input.includes("florian") || input.includes("roth") || input.includes("florian roth")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#florian_roth" target="_blank">Florian Roth</a></li></ul>';
    }
    else if (input.includes("focusing")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#focusing_security" target="_blank">Focusing Security</a></li></ul>';
    }
    else if (input.includes("forensics")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#macOS_forensics" target="_blank">macOS Forensics</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Memory Forensics</a></li></ul>';
    }
    else if (input.includes("freq")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#freq" target="_blank">freq</a></li></ul>';
    }
    else if (input.includes("ftk") || input.includes("imager")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ftk_imager" target="_blank">FTK Imager</a></li></ul>';
    }
    else if (input.includes("fullhunt")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#fullhunt" target="_blank">Fullhunt</a></li></ul>';
    }
    else if (input.includes("fundamentals")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Linux CLI Fundamentals</a></li></ul>';
    }
    else if (input.includes("game")) {
        result.innerHTML = 'Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#xss_game" target="_blank">XSS Game</a></li></ul>';
    }
    else if (input.includes("gcp")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#gcp" target="_blank">GCP</a></li></ul>';
    }
    else if (input.includes("ghidra")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ghidra" target="_blank">Ghidra</a></li></ul>';
    }
    else if (input.includes("ghost")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ghost_in_the_wires" target="_blank">Ghost in the Wires</a></li></ul>';
    }
    else if (input.includes("google")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking" target="_blank">Google Hacking</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#timesketch" target="_blank">Timesketch</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#grr" target="_blank">grr</a></li></ul>';
    }
    else if (input.includes("greenshot")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#greenshot" target="_blank">Greenshot</a></li></ul>';
    }
    else if (input.includes("greynoise")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#greynoise" target="_blank">Greynoise</a></li></ul>';
    }
    else if (input.includes("group") || input.includes("policy") || input.includes("pwnage") || input.includes("group policy") || input.includes("gpo") || input.includes("gpo pwnage") || input.includes("group policy pwnage")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#group_policy_pwnage" target="_blank">Group Policy Pwnage</a></li></ul>';
    }
    else if (input.includes("growing") || input.includes("human") || input.includes("operated")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Growing Threat of Human Operated Ransomware</a></li></ul>';
    }
    else if (input.includes("grr")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#grr" target="_blank">grr</a></li></ul>';
    }
    else if (input.includes("guru")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#crontab_guru" target="_blank">Crontab Guru</a></li></ul>';
    }
    else if (input.includes("hack")) {
        result.innerHTML = 'Cheatsheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking_int" target="_blank">Google Hacking (Intelligence)</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking_recon" target="_blank">Google Hacking (Reconnaissance)</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#become_an_ethical_hacker_for_0" target="_blank">Become an Ethical Hacker for $0</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Hacker\'s Physical Pentest Toolkit</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackersploit" target="_blank">Hackersploit</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#shehackspurple" target="_blank">Shehackspurple</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">How Russia Hacked the US Election</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">All Your Devices can be Hacked</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackthebox" target="_blank">HackTheBox</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tryhackme" target="_blank">TryHackMe</a></li></ul>';
    }
    else if (input.includes("hacked")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">How Russia Hacked the US Election</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">All Your Devices can be Hacked</a></li></ul>';
    }
    else if (input.includes("hackers") || input.includes("hackersploit")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackersploit" target="_blank">Hackersploit</a></li></ul>';
    }
    else if (input.includes("hacking")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking" target="_blank">Google Hacking</a></li></ul>';
    }
    else if (input.includes("hackinthebox")) {
        result.innerHTML = 'Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#hackinthebox" target="_blank">Hackinthebox</a></li></ul>';
    }
    else if (input.includes("hackthebox")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackthebox" target="_blank">HackTheBox</a></li></ul>';
    }
    else if (input.includes("harmj0y")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#harmj0y" target="_blank">Harmj0y</a></li></ul>';
    }
    else if (input.includes("hatless1der")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hatless1der" target="_blank">Hatless1der</a></li></ul>';
    }
    else if (input.includes("haveibeenpwned") || input.includes("pwned")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#haveibeenpwned" target="_blank">haveibeenpwned</a></li></ul>';
    }
    else if (input.includes("haystak")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#haystak" target="_blank">Haystak</a></li></ul>';
    }
    else if (input.includes("healthcare")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#healthcare" target="_blank">Healthcare</a></li></ul>';
    }
    else if (input.includes("heather") || input.includes("mahalik") || input.includes("heather mahalik")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#heather_mahalik" target="_blank">Heather Mahalik</a></li></ul>';
    }
    else if (input.includes("helk")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#helk" target="_blank">HELK</a></li></ul>';
    }
    else if (input.includes("hex")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hex_regex" target="_blank">HEX/regex</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_regex" target="_blank">Structures and Schemas</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_editors" target="_blank">Hex Editors</a></li></ul>';
    }
    else if (input.includes("hexinator")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hexinator" target="_blank">Hexinator</a></li></ul>';
    }
    else if (input.includes("history")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#30_years_of_history" target="_blank">30 Years of History</a></li></ul>';
    }
    else if (input.includes("home") || input.includes("homelab") || input.includes("home lab")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#build_a_home_lab" target="_blank">Build a Home Lab</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">HomeLabResources</a></li></ul>';
    }
    else if (input.includes("hopper")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hopper" target="_blank">Hopper</a></li></ul>';
    }
    else if (input.includes("hping")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hping" target="_blank">Hping</a></li></ul>';
    }
    else if (input.includes("http") || input.includes("probe") || input.includes("httprobe")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#httprobe" target="_blank">Httprobe</a></li></ul>';
    }
    else if (input.includes("hunt")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Know Normal Hunt Evil</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Know Abnormal Find Evil</a></li></ul><br>Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">DFIR & Threat Hunting</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Demystifying Threat Hunting</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Kansa for Enterprise Scale Threat Hunting</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Threathunting Project</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">ACM Threat Hunting</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#apt_hunter" target="_blank">APT Hunter</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Azurehunter</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Hunting Cobalt Strike</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Threat Hunting via Sysmon</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Threat Hunting via DNS</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#post_exploitation_hunting" target="_blank">Post Exploitation Hunting</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#bug_hunters_methodology" target="_blank">Bug Hunters Methodology</a></li></ul><br>Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#redhunt_os" target="_blank">RedHunt OS</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Hunting Cobalt Strike</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Threat Hunting via Sysmon</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Threat Hunting via DNS</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#post_exploitation_hunting" target="_blank">Post Exploitation Hunting</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#bug_hunters_methodology" target="_blank">Bug Hunters Methodology</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#hunter_io" target="_blank">hunter.io</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#fullhunt" target="_blank">Fullhunt</a></li></ul>';
    }
    else if (input.includes("hunters")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Bug Hunters Methodology</a></li></ul>';
    }
    else if (input.includes("hybrid")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hybrid_analysis" target="_blank">Hybrid Analysis</a></li></ul>';
    }
    else if (input.includes("mikko") || input.includes("hypponen") || input.includes("mikko hypponen")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#mikko_hypponen" target="_blank">Mikko Hypponen</a></li></ul>';
    }
    else if (input.includes("ida") || input.includes("ida pro")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ida_pro" target="_blank">IDA Pro</a></li></ul>';
    }
    else if (input.includes("ids")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ids" target="_blank">IDS</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#awesome_event_ids" target="_blank">Awesome Event IDs</a></li></ul>';
    }
    else if (input.includes("immunity")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#immunity_debugger" target="_blank">Immunity Debugger</a></li></ul>';
    }
    else if (input.includes("impacket")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#impacket" target="_blank">Impacket</a></li></ul>';
    }
    else if (input.includes("inceptor")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#inceptor" target="_blank">Inceptor</a></li></ul>';
    }
    else if (input.includes("incident") || input.includes("response") || input.includes("incident response") || input.includes("ir")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ddos_incident_response" target="_blank">DDOS Incident Response</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">DFIR & Threat Hunting</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ir_lifecycle" target="_blank">IR Lifecycle</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#aws_ir_guide" target="_blank">AWS IR Guide</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">IR Field Guide</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nist_ir_framework" target="_blank">NIST IR Framework</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#ir_playbooks" target="_blank">IR Playbooks</a></li></ul>';
    }
    else if (input.includes("inet") || input.includes("inetsim")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#inetsim" target="_blank">Inetsim</a></li></ul>';
    }
    else if (input.includes("infosec")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#infosec_osint_show" target="_blank">Infosec OSINT Show</a></li></ul>';
    }
    else if (input.includes("ins1gn1a")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ins1gn1a" target="_blank">Ins1gn1a</a></li></ul>';
    }
    else if (input.includes("insertion") || input.includes("usb")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#usb_insertion" target="_blank">USB Insertion</a></li></ul>';
    }
    else if (input.includes("installing") || input.includes("zeek") || input.includes("scratch") || input.includes("installing zeek")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#installing_zeek_from_scratch" target="_blank">Installing Zeek from Scratch</a></li></ul>';
    }
    else if (input.includes("intelligencex")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#intelligencex" target="_blank">IntelligenceX</a></li></ul>';
    }
    else if (input.includes("inteltechniques")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#inteltechniques" target="_blank">IntelTechniques</a></li></ul>';
    }
    else if (input.includes("interactsh")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#interactsh" target="_blank">Interactsh</a></li></ul>';
    }
    else if (input.includes("internet")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_we_take_back_the_internet" target="_blank">How we Take Back the Internet</a></li></ul>';
    }
    else if (input.includes("investigating") || input.includes("wmi attacks")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#investigating_wmi_attacks" target="_blank">Investigating WMI Attacks</a></li></ul>';
    }
    else if (input.includes("investigation")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">SOC Investigation</a></li></ul>';
    }
    else if (input.includes("invisiblesecrets")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#invisiblesecrets" target="_blank">Invisiblesecrets</a></li></ul>';
    }
    else if (input.includes("ioas") || input.includes("iocs")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#iocs_v_ioas" target="_blank">IOCs V IOAs</a></li></ul>';
    }
    else if (input.includes("ios")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ios_macOS_images" target="_blank">iOS/macOS Images</a></li></ul>';
    }
    else if (input.includes("ippsec")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ippsec" target="_blank">Ippsec</a></li></ul>';
    }
    else if (input.includes("jail")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_jail" target="_blank">Malware Jail</a></li></ul>';
    }
    else if (input.includes("jake") || input.includes("williams") || input.includes("jake williams")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#jake_williams" target="_blank">Jake Williams</a></li></ul>';
    }
    else if (input.includes("james") || input.includes("lyne") || input.includes("james lyne")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#james_lyne" target="_blank">James Lyne</a></li></ul>';
    }
    else if (input.includes("jason") || input.includes("fossen") || input.includes("jason fossen")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#jason_fossen" target="_blank">Jason Fossen</a></li></ul>';
    }
    else if (input.includes("java") || input.includes("decompiler")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#java_decompiler" target="_blank">Java Decompiler</a></li></ul>';
    }
    else if (input.includes("joe")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#joe_sandbox" target="_blank">Joe Sandbox</a></li></ul>';
    }
    else if (input.includes("joff") || input.includes("thyer") || input.includes("joff thyer")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#joff_thyer" target="_blank">Joff Thyer</a></li></ul>';
    }
    else if (input.includes("john")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#john_strand" target="_blank">John Strand</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#johntheripper" target="_blank">JohnTheRipper</a></li></ul>';
    }
    else if (input.includes("joplin")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#joplin" target="_blank">Joplin</a></li></ul>';
    }
    else if (input.includes("jq") || input.includes("json")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#json_jq" target="_blank">json/jq</a></li></ul>';
    }
    else if (input.includes("kali")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#kali" target="_blank">Kali</a></li></ul>';
    }
    else if (input.includes("kansa")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Kansa for Enterprise Scale Threat Hunting</a></li></ul>';
    }
    else if (input.includes("karma")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#karma" target="_blank">Karma</a></li></ul>';
    }
    else if (input.includes("keepnote")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#keepnote" target="_blank">Keepnote</a></li></ul>';
    }
    else if (input.includes("kernel") || input.includes("tracing")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#linux_kernel_tracing" target="_blank">Linux Kernel Tracing</a></li></ul>';
    }
    else if (input.includes("kevin") || input.includes("mitnick") || input.includes("kevin mitnick")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#kevin_mitnick" target="_blank">Kevin Mitnick</a></li></ul>';
    }
    else if (input.includes("kioptrix")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#kioptrix" target="_blank">Kioptrix</a></li></ul>';
    }
    else if (input.includes("kodachi")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#kodachi" target="_blank">Kodachi</a></li></ul>';
    }
    else if (input.includes("kql")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#kql" target="_blank">kql</a></li></ul>';
    }
    else if (input.includes("lab")) {
        result.innerHTML = 'Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">HomeLabResources</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#trace_labs" target="_blank">Trace Labs</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#colab" target="_blank">COLAB</a></li></ul>';
    }
    else if (input.includes("lateral") || input.includes("movement") || input.includes("lateral movement")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#lateral_movement_analysis" target="_blank">Lateral Movement Analysis</a></li></ul>';
    }
    else if (input.includes("layer") || input.includes("layer8")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#layer_8" target="_blank">Layer 8</a></li></ul>';
    }
    else if (input.includes("rob") || input.includes("robert") || input.includes("lee") || input.includes("rob lee") || input.includes("robert lee")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#rob_lee" target="_blank">Rob Lee</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#robert_lee" target="_blank">Robert Lee</a></li></ul>';
    }
    else if (input.includes("lenny") || input.includes("zeltser") || input.includes("lenny zeltser")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#lenny_zelster" target="_blank">Lenny Zelster</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#lenny_zeltser" target="_blank">Lenny Zeltser</a></li></ul>';
    }
    else if (input.includes("lifecycle")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ir_lifecycle" target="_blank">IR Lifecycle</a></li></ul>';
    }
    else if (input.includes("lime")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#lime" target="_blank">Lime</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#limelighter" target="_blank">LimeLighter</a></li></ul>';
    }
    else if (input.includes("lighter") || input.includes("limelighter")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#limelighter" target="_blank">LimeLighter</a></li></ul>';
    }
    else if (input.includes("linpmem")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linpmem" target="_blank">linpmem</a></li></ul>';
    }
    else if (input.includes("pmem")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linpmem" target="_blank">linpmem</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#osxpmem" target="_blank">osxpmem</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Winpmem</a></li></ul>';
    }
    else if (input.includes("linux")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Windows Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_commands" target="_blank">Linux Commands</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Linux CLI Fundamentals</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli" target="_blank">Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_shell" target="_blank">Linux Shell</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux" target="_blank">Linux</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#smb_access_from_linux" target="_blank">SMB Access from Linux</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linuxcatscale" target="_blank">Linuxcatscale</a></li></ul>';
    }
    else if (input.includes("linuxcatscale")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linuxcatscale" target="_blank">Linuxcatscale</a></li></ul>';
    }
    else if (input.includes("location") || input.includes("scammer")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_to_get_a_scammers_location" target="_blank">How to get a Scammer\'s Location</a></li></ul>';
    }
    else if (input.includes("log")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#event_log_analysis" target="_blank">Event Log Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#critical_log_review" target="_blank">Critical Log Review</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#log_parsing" target="_blank">Log Parsing</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#what2log" target="_blank">What2Log</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">DFIRlogbook</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#unconventional_logging" target="_blank">Unconventional Logging</a></li></ul>';
    }
    else if (input.includes("logging") || input.includes("unconventional") || input.includes("conventional")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#unconventional_logging" target="_blank">Unconventional Logging</a></li></ul>';
    }
    else if (input.includes("lolbas")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#lolbas" target="_blank">LOLBAS</a></li></ul>';
    }
    else if (input.includes("lorandbodo")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#lorandbodo" target="_blank">lorandbodo</a></li></ul>';
    }
    else if (input.includes("macos")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#macOS_forensics" target="_blank">macOS Forensics</a></li></ul>';
    }
    else if (input.includes("macro pack")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#macro_pack" target="_blank">Macro Pack</a></li></ul>';
    }
    else if (input.includes("macro")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xlmmacrodeobfuscator" target="_blank">XLMMacroDeobfuscator</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#macro_pack" target="_blank">Macro Pack</a></li></ul>';
    }
    else if (input.includes("malapi")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#malapi" target="_blank">Malapi</a></li></ul>';
    }
    else if (input.includes("malicious") || input.includes("malicious documents")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malicious_documents" target="_blank">Malicious Documents</a></li></ul>';
    }
    else if (input.includes("malshare")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malshare" target="_blank">Malshare</a></li></ul>';
    }
    else if (input.includes("maltego")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#maltego" target="_blank">Maltego</a></li></ul>';
    }
    else if (input.includes("malware")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malware_analysis" target="_blank">Malware Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">REMnux</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Reverse Engineering</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">PMAT Labs Walkthroughs</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#building_a_malware_lab" target="_blank">building_a_malware_lab</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwaretrafficanalysis" target="_blank">MalwareTrafficAnalysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware" target="_blank">Malware Analysis</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_analysis_repo" target="_blank">Malware Analysis Repository</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwarebazaar" target="_blank">Malwarebazaar</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_jail" target="_blank">Malware Jail</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_repos" target="_blank">Malware Repositories</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_feed" target="_blank">Malware Feed</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwr" target="_blank">Malwr</a></li></ul>';
    }
    else if (input.includes("malwarebazaar")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwarebazaar" target="_blank">Malwarebazaar</a></li></ul>';
    }
    else if (input.includes("malwaretrafficanalysis")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwaretrafficanalysis" target="_blank">Malwaretrafficanalysis</a></li></ul>';
    }
    else if (input.includes("malwr")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwr" target="_blank">Malwr</a></li></ul>';
    }
    else if (input.includes("mapping")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#osi_mapping" target="_blank">OSI Mapping</a></li></ul>';
    }
    else if (input.includes("mass")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#amass" target="_blank">Amass</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Masscan</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Massdns</a></li></ul>';
    }
    else if (input.includes("masscan")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Masscan</a></li></ul>';
    }
    else if (input.includes("massdns")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">MassDNS</a></li></ul>';
    }
    else if (input.includes("media")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#media" target="_blank">Media</a></li></ul>';
    }
    else if (input.includes("megator")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#megator" target="_blank">Megator</a></li></ul>';
    }
    else if (input.includes("mem")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Memory Forensics</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Making Memories Faster Response</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#memprocfs" target="_blank">MemProcFS</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Volatility</a></li></ul>';
    }
    else if (input.includes("memory")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Memory Forensics</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Volatility</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Making Memories Faster Response</a></li></ul>';
    }
    else if (input.includes("memprocfs")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#memprocfs" target="_blank">MemProcFS</a></li></ul>';
    }
    else if (input.includes("metasploit")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#metasploit" target="_blank">Metasploit</a></li></ul><br>Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable3" target="_blank">Metasploitable3</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable2" target="_blank">Metasploitable2</a></li></ul>';
    }
    else if (input.includes("metasploitable")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable3" target="_blank">Metasploitable3</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable2" target="_blank">Metasploitable2</a></li></ul>';
    }
    else if (input.includes("methodology")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Bug Hunters Methodology</a></li></ul>';
    }
    else if (input.includes("mfasweep")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#mfasweep" target="_blank">mfasweep</a></li></ul>';
    }
    else if (input.includes("mft")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#analyzemft" target="_blank">analyzemft</a></li></ul>';
    }
    else if (input.includes("mirage")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_security_mirage" target="_blank">The Security Mirage</a></li></ul>';
    }
    else if (input.includes("misp")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#misp" target="_blank">MISP</a></li></ul>';
    }
    else if (input.includes("mitigations")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_cred_attacks_mitigations" target="_blank">Windows Cred. Attacks Mitigations</a></li></ul>';
    }
    else if (input.includes("mitm6") || input.includes("mitm") || input.includes("man in the middle") || input.includes("man-in-the-middle")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#mitm6" target="_blank">mitm6</a></li></ul>';
    }
    else if (input.includes("mitre")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Ten Strategies of a World-Class CSOC</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#mitre_attack_mapping" target="_blank">MITRE ATT&CK Mapping</a></li></ul><brTraining, CTFs &amp; Challengesul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#cybrary" target="_blank">Cybrary</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_framework" target="_blank">ATT&CK Framework</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_navigator" target="_blank">ATT&CK Navigator</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#d3fend" target="_blank">D3FEND</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#engage" target="_blank">Engage</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#caldera" target="_blank">Caldera</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attack_framework" target="_blank">ATT&CK Framework</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attack_navigator" target="_blank">ATT&CK Navigator</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#d3fend" target="_blank">D3FEND</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#engage" target="_blank">Engage</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#caldera" target="_blank">Caldera</a></li></ul>';
    }
    else if (input.includes("module")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#running_processes_and_modules" target="_blank">Running Processes and Modules</a></li></ul>';
    }
    else if (input.includes("monitor")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#api_monitor" target="_blank">API Monitor</a></li></ul>';
    }
    else if (input.includes("muraena")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#muraena" target="_blank">Muraena</a></li></ul>';
    }
    else if (input.includes("n00py")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#n00py" target="_blank">N00py</a></li></ul>';
    }
    else if (input.includes("nagios")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nagios" target="_blank">Nagios</a></li></ul>';
    }
    else if (input.includes("nano")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#nano" target="_blank">Nano</a></li></ul>';
    }
    else if (input.includes("navigator")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_navigator" target="_blank">ATT&CK Navigator</a></li></ul>';
    }
    else if (input.includes("necrobrowser")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#necrobrowser" target="_blank">Necrobrowser</a></li></ul>';
    }
    else if (input.includes("needle") || input.includes("needles") || input.includes("needlestack") || input.includes("needlestacks")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#needles_in_needlestacks" target="_blank">Needles in Needlestacks</a></li></ul>';
    }
    else if (input.includes("nessus")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nessus" target="_blank">Nessus</a></li></ul>';
    }
    else if (input.includes("netcat")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#netcat" target="_blank">Netcat</a></li></ul>';
    }
    else if (input.includes("nirsoft")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nirsoft_suite" target="_blank">Nirsoft Suite</a></li></ul>';
    }
    else if (input.includes("nist")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nist_ir_framework" target="_blank">NIST IR Framework</a></li></ul>';
    }
    else if (input.includes("nmap")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#nmap" target="_blank">nmap</a></li></ul>';
    }
    else if (input.includes("node")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#node_red" target="_blank">Node Red</a></li></ul>';
    }
    else if (input.includes("nsa")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">NSA Betrayed the World\'s Trust</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_responds_to_snowdon" target="_blank">NSA Responds to Snowdon</a></li></ul>';
    }
    else if (input.includes("oalabs")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#oalabs" target="_blank">Oalabs</a></li></ul>';
    }
    else if (input.includes("obfuscation")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_command_line_obfuscation" target="_blank">Windows Command Line Obfuscation</a></li></ul>';
    }
    else if (input.includes("offensive")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#offensive_security" target="_blank">Offensive Security</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sans_offensive_ops" target="_blank">SANS Offensive Ops</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#offensive_security" target="_blank">Offensive Security</a></li></ul>';
    }
    else if (input.includes("oledump")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#oledump" target="_blank">oledump</a></li></ul>';
    }
    else if (input.includes("oletools")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#oletools" target="_blank">oletools</a></li></ul>';
    }
    else if (input.includes("ollydbg") || input.includes("olly")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ollydbg" target="_blank">OllyDBG</a></li></ul>';
    }
    else if (input.includes("onion") || input.includes("security onion")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#security_onion" target="_blank">Security Onion</a></li></ul>';
    }
    else if (input.includes("onyphe")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#onyphe" target="_blank">Onyphe</a></li></ul>';
    }
    else if (input.includes("ooda") || input.includes("ooda loop")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#using_ooda_loop_in_ir" target="_blank">Using OODA Loop in IR</a></li></ul>';
    }
    else if (input.includes("open")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#open_soc" target="_blank">Open SOC</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#open_soc" target="_blank">Open SOC</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#openvas" target="_blank">OpenVAS</a></li></ul>';
    }
    else if (input.includes("openvas")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#openvas" target="_blank">OpenVAS</a></li></ul>';
    }
    else if (input.includes("order") || input.includes("search order") || input.includes("search order hijacking") || input.includes("sho") || input.includes("identifying")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#identifying_search_order_hijacking" target="_blank">Identifying Search Order Hijacking</a></li></ul>';
    }
    else if (input.includes("osint")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#infosec_osint_show" target="_blank">Infosec OSINT Show</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_bunker" target="_blank">OSINT Bunker</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_curious" target="_blank">OSINT Curious</a></li></ul>';
    }
    else if (input.includes("ossem")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ossem" target="_blank">ossem</a></li></ul>';
    }
    else if (input.includes("osxpmem")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#osxpmem" target="_blank">osxpmem</a></li></ul>';
    }
    else if (input.includes("owasp")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">OWASP Testing Guide</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#owasp" target="_blank">OWASP</a></li></ul>';
    }
    else if (input.includes("packettotal")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#packettotal" target="_blank">PacketTotal</a></li></ul>';
    }
    else if (input.includes("pafish")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#pafish" target="_blank">Pafish</a></li></ul>';
    }
    else if (input.includes("paladin")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#paladin" target="_blank">Paladin</a></li></ul>';
    }
    else if (input.includes("parrotos")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#parrotos" target="_blank">ParrotOS</a></li></ul>';
    }
    else if (input.includes("pastebin")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#pastebin" target="_blank">Pastebin</a></li></ul>';
    }
    else if (input.includes("payloads")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#payloads_all_the_things" target="_blank">Payloads all the Things</a></li></ul>';
    }
    else if (input.includes("pcodedmp")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pcodedmp" target="_blank">pcodedmp</a></li></ul>';
    }
    else if (input.includes("pdf")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pdf_parser" target="_blank">PDF Parser</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peepdf" target="_blank">Peepdf</a></li></ul>';
    }
    else if (input.includes("pe")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_bear" target="_blank">pe-bear</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_tree" target="_blank">pe-tree</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peframe" target="_blank">peframe</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">petools</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">pestudio</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peepdf" target="_blank">peepdf</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pehash" target="_blank">pehash</a></li></ul>';
    }
    else if (input.includes("pentest") || input.includes("pen test") || input.includes("penetration") || input.includes("penetration testing")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#penetration_testing" target="_blank">Penetration Testing</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Hacker\'s Physical Pentest Toolkit</a></li></ul><brTraining, CTFs &amp; Challengesul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#pentesteracademy" target="_blank">Training, CTFs &amp; ChallengePentesteracademy</a></li></ul><br>Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#pentestbox" target="_blank">Pentestbox</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sample_pen_test_report" target="_blank">Sample Pen Test Report</a></li></ul>';
    }
    else if (input.includes("pentestbox")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#pentestbox" target="_blank">Pentestbox</a></li></ul>';
    }
    else if (input.includes("pentesteracademy")) {
        result.innerHTML = 'Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#pentesteracademy" target="_blank">Pentesteracademy</a></li></ul>';
    }
    else if (input.includes("pestudio")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">pestudio</a></li></ul>';
    }
    else if (input.includes("petools")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">petools</a></li></ul>';
    }
    else if (input.includes("phil") || input.includes("hagen") || input.includes("phil hagen")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#phil_hagen" target="_blank">Phil Hagen</a></li></ul>';
    }
    else if (input.includes("phish")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#phishing" target="_blank">Phishing</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">PhishingKitTracker</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#phishtool" target="_blank">Phishtool</a></li></ul>';
    }
    else if (input.includes("phishing")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#phishing" target="_blank">Phishing</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">PhishingKitTracker</a></li></ul>';
    }
    else if (input.includes("phishingkittracker")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Phishingkittracker</a></li></ul>';
    }
    else if (input.includes("phishtool")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#phishtool" target="_blank">Phishtool</a></li></ul>';
    }
    else if (input.includes("physical")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Hacker\'s Physical Pentest Toolkit</a></li></ul>';
    }
    else if (input.includes("picoctf")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#picoctf" target="_blank">Picoctf</a></li></ul>';
    }
    else if (input.includes("pivot") || input.includes("pivots") || input.includes("pivoting")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pivots_payloads" target="_blank">Pivots Payloads</a></li></ul><br>Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#pivoting" target="_blank">Pivoting</a></li></ul>';
    }
    else if (input.includes("plaso") || input.includes("log2timeline") || input.includes("l2t")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#plaso" target="_blank">Plaso</a></li></ul>';
    }
    else if (input.includes("playbooks") || input.includes("playbook")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#ir_playbooks" target="_blank">IR Playbooks</a></li></ul>';
    }
    else if (input.includes("pmat") || input.includes("walkthroughs")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">PMAT Labs Walkthroughs</a></li></ul>';
    }
    else if (input.includes("ports")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_ports" target="_blank">Common Ports</a></li></ul>';
    }
    else if (input.includes("post exploitation") || input.includes("post")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#post" target="_blank">Post</a></li></ul>';
    }
    else if (input.includes("power") || input.includes("power") || input.includes("powershell") || input.includes("power shell")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powershell_core" target="_blank">Powershell Core</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#blue_team_powershell" target="_blank">Blue Team Powershell</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">PowerForensics</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#empire" target="_blank">PowerShell Empire</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#powershell_wmic" target="_blank">PowerShell &amp; WMIC</a></li></ul>';
    }
    else if (input.includes("powerforensics")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">PowerForensics</a></li></ul>';
    }
    else if (input.includes("powersploit")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#powersploit" target="_blank">PowerSploit</a></li></ul>';
    }
    else if (input.includes("privacytools") || input.includes("privacy")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#privacytools" target="_blank">PrivacyTools</a></li></ul>';
    }
    else if (input.includes("procdot")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#procdot" target="_blank">procdot</a></li></ul>';
    }
    else if (input.includes("processes")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_processes" target="_blank">Windows Processes</a></li></ul>';
    }
    else if (input.includes("protonmail")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#protonmail" target="_blank">Protonmail</a></li></ul>';
    }
    else if (input.includes("proxy")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#web_proxy_event_analysis" target="_blank">Web Proxy Event Analysis</a></li></ul>';
    }
    else if (input.includes("publicwww")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#publicwww" target="_blank">PublicWWW</a></li></ul>';
    }
    else if (input.includes("pulsedive")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#pulsedive" target="_blank">Pulsedive</a></li></ul>';
    }
    else if (input.includes("radare2")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#radare2" target="_blank">radare2</a></li></ul>';
    }
    else if (input.includes("range") || input.includes("rangeforce")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#rangeforce" target="_blank">Rangeforce</a></li></ul>';
    }
    else if (input.includes("ransom") || input.includes("ransomware")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_risk_management" target="_blank">Ransomware Risk Management</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Growing Threat of Human Operated Ransomware</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_response" target="_blank">Ransomware Response</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#no_more_ransom" target="_blank">No More Ransom</a></li></ul>';
    }
    else if (input.includes("rebels")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_rebels_want" target="_blank">What Rebels Want</a></li></ul>';
    }
    else if (input.includes("redhunt")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#redhunt_os" target="_blank">Redhunt OS</a></li></ul>';
    }
    else if (input.includes("redline")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#redline" target="_blank">Redline</a></li></ul>';
    }
    else if (input.includes("regex") || input.includes("regular") || input.includes("expression") || input.includes("regular expression")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hex_regex" target="_blank">HEX/regex</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#regex" target="_blank">regex</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_regex" target="_blank">HEX/regex</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex" target="_blank">regex</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex101" target="_blank">regex101</a></li></ul>';
    }
    else if (input.includes("regex101") || input.includes("101")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex101" target="_blank">regex101</a></li></ul>';
    }
    else if (input.includes("registry")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#registry_viewer" target="_blank">Registry Viewer</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regripper" target="_blank">regripper</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regshot" target="_blank">Regshot</a></li></ul>';
    }
    else if (input.includes("regripper")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regripper" target="_blank">regripper</a></li></ul>';
    }
    else if (input.includes("regshot")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regshot" target="_blank">Regshot</a></li></ul>';
    }
    else if (input.includes("remnux")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">REMnux</a></li></ul>';
    }
    else if (input.includes("remoting") || input.includes("wmi remoting")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#wmi_remoting" target="_blank">WMI Remoting</a></li></ul>';
    }
    else if (input.includes("reply") || input.includes("spam")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#when_you_reply_to_spam" target="_blank">When you Reply to Spam</a></li></ul>';
    }
    else if (input.includes("responds") || input.includes("snowdon")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_responds_to_snowdon" target="_blank">NSA Responds to Snowdon</a></li></ul>';
    }
    else if (input.includes("reverse") || input.includes("engineering") || input.includes("reverse engineering")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Reverse Engineering</a></li></ul>';
    }
    else if (input.includes("riskiq")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#riskiq" target="_blank">RiskIQ</a></li></ul>';
    }
    else if (input.includes("rita")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#rita" target="_blank">RITA</a></li></ul>';
    }
    else if (input.includes("roadmap")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#training_roadmap" target="_blank">Training Roadmap</a></li></ul>';
    }
    else if (input.includes("root")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hacking_exposed_malware_and_rootkits" target="_blank">Hacking Exposed Malware and Rootkits</a></li></ul><br>Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#root_me" target="_blank">Root Me</a></li></ul>';
    }
    else if (input.includes("roundup")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#red_team_tool_roundup" target="_blank">Red Team Tool Roundup</a></li></ul>';
    }
    else if (input.includes("rtfdump")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#rtfdump" target="_blank">rtfdump</a></li></ul>';
    }
    else if (input.includes("run") || input.includes("anyrun") || input.includes("any run")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#any_run" target="_blank">Any Run</a></li></ul>';
    }
    else if (input.includes("russia") || input.includes("us election")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">How Russia Hacked the US Election</a></li></ul>';
    }
    else if (input.includes("sample")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sample_pen_test_report" target="_blank">Sample Pen Test Report</a></li></ul>';
    }
    else if (input.includes("sandworm")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#sandworm" target="_blank">Sandworm</a></li></ul>';
    }
    else if (input.includes("sans") || input.includes("institute")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#sans_institute" target="_blank">SANS Institute</a></li></ul>';
    }
    else if (input.includes("scanner") || input.includes("scanners")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Angry IP Scanner</a></li></ul>';
    }
    else if (input.includes("scapy")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#scapy" target="_blank">Scapy</a></li></ul>';
    }
    else if (input.includes("schneier") | input.includes("bruce") || input.includes("bruce schneier")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#schneier_on_security" target="_blank">Schneier on Security</a></li></ul>';
    }
    else if (input.includes("scylla")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#scylla" target="_blank">Scylla</a></li></ul>';
    }
    else if (input.includes("seatbelt")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#seatbelt" target="_blank">Seatbelt</a></li></ul>';
    }
    else if (input.includes("secjuice")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#secjuice" target="_blank">Secjuice</a></li></ul>';
    }
    else if (input.includes("seclists")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#seclists" target="_blank">Seclists</a></li></ul>';
    }
    else if (input.includes("secure")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_devops" target="_blank">Secure Devops</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_web_app_testing" target="_blank">Secure Web App Testing</a></li></ul>';
    }
    else if (input.includes("security")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#securityzines" target="_blank">Securityzines</a></li></ul><br>Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#cloud_security_devops" target="_blank">Cloud Security Devops</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#security_architecture" target="_blank">Security Architecture</a></li></ul>';
    }
    else if (input.includes("securityzines")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#securityzines" target="_blank">Securityzines</a></li></ul>';
    }
    else if (input.includes("sentinel")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sentinel_att_ck" target="_blank">Sentinel ATT&CK</a></li></ul>';
    }
    else if (input.includes("sharphound")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sharphound" target="_blank">Sharphound</a></li></ul>';
    }
    else if (input.includes("shehackspurple")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#shehackspurple" target="_blank">Shehackspurple</a></li></ul>';
    }
    else if (input.includes("shellter")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#shellter" target="_blank">Shellter</a></li></ul>';
    }
    else if (input.includes("sherlock")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#sherlock" target="_blank">Sherlock</a></li></ul>';
    }
    else if (input.includes("shimcacheparser")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#shimcacheparser" target="_blank">ShimcacheParser</a></li></ul>';
    }
    else if (input.includes("shodan")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#shodan_dorks" target="_blank">Shodan Dorks</a></li></ul>';
    }
    else if (input.includes("force")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#powershell_light_side_of_the_force" target="_blank">Powershell Light Side of the Force</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#rangeforce" target="_blank">Rangeforce</a></li></ul>';
    }
    else if (input.includes("the force") || input.includes("side")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#powershell_light_side_of_the_force" target="_blank">Powershell Light Side of the Force</a></li></ul>';
    }
    else if (input.includes("sift")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sift" target="_blank">SIFT</a></li></ul>';
    }
    else if (input.includes("sigma")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma" target="_blank">SIGMA</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma2splunkalert" target="_blank">Sigma2SplunkAlert</a></li></ul>';
    }
    else if (input.includes("signatures")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#file_signatures" target="_blank">File Signatures</a></li></ul>';
    }
    else if (input.includes("silk")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#silk" target="_blank">SILK</a></li></ul>';
    }
    else if (input.includes("skoudis") || input.includes("ed") || input.includes("ed skoudis")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#ed_skoudis" target="_blank">Ed Skoudis</a></li></ul>';
    }
    else if (input.includes("skyark")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#skyark" target="_blank">Skyark</a></li></ul>';
    }
    else if (input.includes("sleuth")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#the_sleuth_kit" target="_blank">The Sleuth Kit</a></li></ul>';
    }
    else if (input.includes("slingshot")) {
        result.innerHTML = 'Virtual Machines<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#slingshot" target="_blank">Slingshot</a></li></ul>';
    }
    else if (input.includes("smartphone")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#smartphone_forensics" target="_blank">Smartphone Forensics</a></li></ul>';
    }
    else if (input.includes("smb")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#smb_access_from_linux" target="_blank">SMB Access from Linux</a></li></ul>';
    }
    else if (input.includes("snaffler")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#snaffler" target="_blank">Snaffler</a></li></ul>';
    }
    else if (input.includes("snort")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#snort" target="_blank">Snort</a></li></ul>';
    }
    else if (input.includes("soar") || input.includes("shuffle")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#soar_with_shuffle" target="_blank">SOAR with Shuffle</a></li></ul>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Ten Strategies of a World Class CSOC</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">SOC Investigation</a></li></ul>';
    }
    else if (input.includes("spectreops")) {
        result.innerHTML = 'Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#spectreops" target="_blank">Spectreops</a></li></ul>';
    }
    else if (input.includes("spidermonkey")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#spidermonkey" target="_blank">Spidermonkey</a></li></ul>';
    }
    else if (input.includes("spl")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#spl_splunk" target="_blank">SPL Splunk</a></li></ul>';
    }
    else if (input.includes("splunk")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#spl_splunk" target="_blank">SPL Splunk</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma2splunkalert" target="_blank">Sigma2SplunkAlert</a></li></ul>';
    }
    else if (input.includes("spyse")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#spyse" target="_blank">Spyse</a></li></ul>';
    }
    else if (input.includes("sqlite")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sqlite" target="_blank">Sqlite</a></li></ul>';
    }
    else if (input.includes("ssdeep")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ssdeep" target="_blank">SSDeep</a></li></ul>';
    }
    else if (input.includes("steghide")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#steghide" target="_blank">Steghide</a></li></ul>';
    }
    else if (input.includes("strand")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#john_strand" target="_blank">John Strand</a></li></ul>';
    }
    else if (input.includes("studio")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">pestudio</a></li></ul>';
    }
    else if (input.includes("subbrute")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#subbrute" target="_blank">Subbrute</a></li></ul>';
    }
    else if (input.includes("subdomain") || input.includes("enumeration")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#subdomain_enumeration" target="_blank">Subdomain Enumeration</a></li></ul>';
    }
    else if (input.includes("suite")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#burp_suite" target="_blank">Burp Suite</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didierstevens_suite" target="_blank">Didierstevens Suite</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nirsoft_suite" target="_blank">Nirsoft Suite</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sysinternals_suite" target="_blank">Sysinternals Suite</a></li></ul>';
    }
    else if (input.includes("sumrecon")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sumrecon" target="_blank">Sumrecon</a></li></ul>';
    }
    else if (input.includes("supermem")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#supermem" target="_blank">Supermem</a></li></ul>';
    }
    else if (input.includes("suricata")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#suricata" target="_blank">Suricata</a></li></ul>';
    }
    else if (input.includes("swiss")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#swiss_hacking_challenge" target="_blank">Swiss Hacking Challenge</a></li></ul>';
    }
    else if (input.includes("synapsint")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#synapsint" target="_blank">Synapsint</a></li></ul>';
    }
    else if (input.includes("sysinternals")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sysinternals_suite" target="_blank">Sysinternals Suite</a></li></ul>';
    }
    else if (input.includes("sysmon")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sysmon" target="_blank">Sysmon</a></li></ul>';
    }
    else if (input.includes("tails")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#tails" target="_blank">Tails</a></li></ul>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tcp_ip_tcpdump" target="_blank">TCP/IP Tcpdump</a></li></ul>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tcpdump" target="_blank">Tcpdump</a></li></ul>';
    }
    else if (input.includes("technology")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#basis_technology" target="_blank">Basis Technology</a></li></ul>';
    }
    else if (input.includes("theharvester")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#theharvester" target="_blank">TheHarvester</a></li></ul>';
    }
    else if (input.includes("thehive")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#thehive" target="_blank">TheHive</a></li></ul>';
    }
    else if (input.includes("thephish")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#thephish" target="_blank">ThePhish</a></li></ul>';
    }
    else if (input.includes("thezoo")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#thezoo" target="_blank">TheZoo</a></li></ul>';
    }
    else if (input.includes("threat") || input.includes("threats")) {
        result.innerHTML = 'Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Threathunting Project</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">ThreatCrowd</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threatfeeds IO</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threatpursuit</a></li></ul>';
    }
    else if (input.includes("threatcrowd")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">ThreatCrowd</a></li></ul>';
    }
    else if (input.includes("threatfeeds")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threatfeeds IO</a></li></ul>';
    }
    else if (input.includes("threathunting")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Threathunting Project</a></li></ul>';
    }
    else if (input.includes("threatpursuit")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threatpursuit</a></li></ul>';
    }
    else if (input.includes("online") || input.includes("three") || input.includes("types")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#three_types_of_online_attacks" target="_blank">Three Types of Online Attacks</a></li></ul>';
    }
    else if (input.includes("timesketch")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#timesketch" target="_blank">Timesketch</a></li></ul>';
    }
    else if (input.includes("tls") || input.includes("decrypt") || input.includes("decrypting") | input.includes("streams") || input.includes("decrypting tls") || input.includes("tls streams")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#decrypt_tls_streams" target="_blank">Decrypt TLS Streams</a></li></ul>';
    }
    else if (input.includes("tools") || input.includes("tool")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Eric Zimmerman Tools</a></li></><li></ul><br>Media &amp; Socials<ul><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eztools_kape" target="_blank">EZtools Kape</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#oletools" target="_blank">Oletools</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">petools</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#privacytools" target="_blank">PrivacyTools</a></li></ul>';
    }
    else if (input.includes("trace") || input.includes("labs")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#trace_labs" target="_blank">Trace Labs</a></li></ul>';
    }
    else if (input.includes("track") || input.includes("tracker")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tracking_our_online_trackers" target="_blank">Tracking our Online Trackers</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#feodo_tracker" target="_blank">Feodo Tracker</a></li></ul>';
    }
    else if (input.includes("training") || input.includes("train")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#training" target="_blank"Training, CTFs &amp; Challenges/a></li></ul>';
    }
    else if (input.includes("tree")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_tree" target="_blank">pe-tree</a></li></ul>';
    }
    else if (input.includes("triage") || input.includes("cyber triage") || input.includes("cybertriage")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#cyber_triage" target="_blank">Cyber Triage</a></li></ul>';
    }
    else if (input.includes("trid")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#trid" target="_blank">TrID</a></li></ul>';
    }
    else if (input.includes("trilium")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#trilium" target="_blank">Trilium</a></li></ul>';
    }
    else if (input.includes("TryHackMe")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tryhackme" target="_blank">TryHackMe</a></li></ul>';
    }
    else if (input.includes("tsurugi")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#tsurugi" target="_blank">Tsurugi</a></li></ul>';
    }
    else if (input.includes("tweetscraper")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#tweetscraper" target="_blank">TweetScraper</a></li></ul>';
    }
    else if (input.includes("tzworks")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tzworks" target="_blank">TZworks</a></li></ul>';
    }
    else if (input.includes("udemy")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#udemy" target="_blank">Udemy</a></li></ul>';
    }
    else if (input.includes("uniq") || input.includes("sort")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sort_uniq" target="_blank">Sort/Uniq</a></li></ul>';
    }
    else if (input.includes("unit")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_chinas_cyber_espionage_units" target="_blank">APT1: Exposing One of China\'s Cyber Espionage Units</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unit42_playbook_viewer" target="_blank">Unit42 Playbook Viewer</a></li></ul>';
    }
    else if (input.includes("unit42") || input.includes("playbook") || input.includes("viewer") || input.includes("playbook viewer")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unit42_playbook_viewer" target="_blank">Unit42 Playbook Viewer</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#unit42_playbook_viewer" target="_blank">Unit42 Playbook Viewer</a></li></ul>';
    }
    else if (input.includes("unprotect")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unprotect" target="_blank">Unprotect</a></li></ul>';
    }
    else if (input.includes("url")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlhaus" target="_blank">urlhaus</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">urlscan</a></li></ul>';
    }
    else if (input.includes("urlhaus")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlhaus" target="_blank">Urlhaus</a></li></ul>';
    }
    else if (input.includes("urlscan")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Urlscan</a></li></ul>';
    }
    else if (input.includes("velociraptor")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#velociraptor" target="_blank">Velociraptor</a></li></ul>';
    }
    else if (input.includes("via")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Threat Hunting via Sysmon</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Threat Hunting via DNS</a></li></ul>';
    }
    else if (input.includes("vim")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#vim" target="_blank">Vim</a></li></ul>';
    }
    else if (input.includes("viper")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#viper" target="_blank">Viper</a></li></ul>';
    }
    else if (input.includes("virus")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Fighting Viruses Defending the Net</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#virussign" target="_blank">virussign</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#virustotal" target="_blank">VirusTotal</a></li></ul>';
    }
    else if (input.includes("virussign")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#virussign" target="_blank">virussign</a></li></ul>';
    }
    else if (input.includes("virustotal")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#virustotal" target="_blank">VirusTotal</a></li></ul>';
    }
    else if (input.includes("volatility")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Volatility</a></li></ul>';
    }
    else if (input.includes("vscode")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#vscode" target="_blank">vscode</a></li></ul>';
    }
    else if (input.includes("vt") || input.includes("file") || input.includes("modifiers")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#vt_file_search_modifiers" target="_blank">VT File Search Modifiers</a></li></ul>';
    }
    else if (input.includes("vulnhub")) {
        result.innerHTML = 'Training, CTFs &amp; Challenges<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/training.html#vulnhub" target="_blank">Vulnhub</a></li></ul>';
    }
    else if (input.includes("weaponizing") || input.includes("weapon") || input.includes("deep web") || input.includes("dark web")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Weaponizing the Deep Web</a></li></ul>';
    }
    else if (input.includes("wela")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wela" target="_blank">WELA</a></li></ul>';
    }
    else if (input.includes("what2log")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#what2log" target="_blank">What2Log</a></li></ul>';
    }
    else if (input.includes("whatsmyname")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#whatsmyname" target="_blank">WhatsMyName</a></li></ul>';
    }
    else if (input.includes("wigle")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#wigle" target="_blank">Wigle</a></li></ul>';
    }
    else if (input.includes("wiki")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#wiki" target="_blank">Wiki</a></li></ul>';
    }
    else if (input.includes("win")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Windows & Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Windows CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#powershell_wmic" target="_blank">PowerShell & WMIC</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ids" target="_blank">Intrusion Detection</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">DFIR & Threat Hunting</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_forensics" target="_blank">Windows Forensics</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_third_party_apps" target="_blank">Windows Third Party Apps</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_cred_attacks_mitigations" target="_blank">Windows Cred. Attacks Mitigations</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Winpmem</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Windbg</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_cli" target="_blank">Windows CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_linux_cli" target="_blank">Windows Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_processes" target="_blank">Windows Processes</a></li></ul>';
    }
    else if (input.includes("windbg")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Windbg</a></li></ul>';
    }
    else if (input.includes("windows")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Windows Linux CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Windows CLI</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows" target="_blank">Windows</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_2k" target="_blank">Windows 2k</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_processes" target="_blank">Windows Processes</a></li></ul>';
    }
    else if (input.includes("winpmem")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Winpmem</a></li></ul>';
    }
    else if (input.includes("wireshark")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wireshark" target="_blank">Wireshark</a></li></ul>';
    }
    else if (input.includes("wondersmith_rae")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#wondersmith_rae" target="_blank">Wondersmith Rae</a></li></ul>';
    }
    else if (input.includes("wql")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wql_sql_for_wmi)" target="_blank">WQL/SQL for WMI)</a></li></ul>';
    }
    else if (input.includes("writing")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#writing_tips" target="_blank">Writing Tips</a></li></ul>';
    }
    else if (input.includes("wscript")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wscript" target="_blank">Wscript</a></li></ul>';
    }
    else if (input.includes("x64dbg")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#x64dbg" target="_blank">X64dbg</a></li></ul>';
    }
    else if (input.includes("xiao")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xiao_steganography" target="_blank">Xiao Steganography</a></li></ul>';
    }
    else if (input.includes("xss")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_xss_rat" target="_blank">The XSS Rat</a></li></ul>';
    }
    else if (input.includes("xxd")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xxd" target="_blank">XXD</a></li></ul>';
    }
    else if (input.includes("yara")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#yara" target="_blank">Yara</a></li></ul>';
    }
    else if (input.includes("yeti")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#yeti" target="_blank">Yeti</a></li></ul>';
    }
    else if (input.includes("yomi")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#yomi" target="_blank">Yomi</a></li></ul>';
    }
    else if (input.includes("yuki")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#yuki_chan" target="_blank">Yuki Chan</a></li></ul>';
    }
    else if (input.includes("zero") || input.includes("zeroday") || input.includes("zero day") || input.includes("0day") || input.includes("0 day")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#countdown_to_zero_day" target="_blank">Countdown to Zero Day</a></li></ul>';
    }
    else if (input.includes("zoomeye")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#zoomeye" target="_blank">Zoomeye</a></li></ul>';
    }
    else if (input.includes("api")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#malapi" target="_blank">Malapi</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#api_monitor" target="_blank">API Monitor</a></li></ul>';
    }
    else if (input.includes("assessment")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#security_assessment_findings_report" target="_blank">Security Assessment Findings Report</a></li></ul>';
    }
    else if (input.includes("dark")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#darknet_diaries" target="_blank">Darknet Diaries</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Weaponizing the Deep Web</a></li></ul>';
    }
    else if (input.includes("dbg")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ollydbg" target="_blank">OllyDBG</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Windbg</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#x64dbg" target="_blank">X64dbg</a></li></ul>';
    }
    else if (input.includes("dns")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fakedns" target="_blank">FakeDNS</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Threat Hunting via DNS</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Massdns</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dnstwist" target="_blank">DNStwist</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dns_dumpster" target="_blank">DNS Dumpster</a></li></ul>';
    }
    else if (input.includes("hound")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#bloodhound" target="_blank">Bloodhound</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sharphound" target="_blank">Sharphound</a></li></ul>';
    }
    else if (input.includes("mail")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#protonmail" target="_blank">Protonmail</a></li></ul>';
    }
    else if (input.includes("sandbox") || input.includes("sandboxes") || input.includes("sand box") || input.includes("sand boxes")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#joe_sandbox" target="_blank">Joe Sandbox</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#any_run" target="_blank">Any Run</a></li></ul>';
    }
    else if (input.includes("scan") || input.includes("scanner") || input.includes("scanners")) {
        result.innerHTML = 'Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Angry IP Scanner</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Masscan</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Urlscan</a></li></ul>';
    }
    else if (input.includes("shark")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bruteshark" target="_blank">Bruteshark</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wireshark" target="_blank">Wireshark</a></li></ul>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#building_a_better_soc" target="_blank">Building a Better SOC</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Ten Strategies of a World Class CSOC</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">SOC Core Skills</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#open_soc" target="_blank">Open SOC</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#open_soc" target="_blank">Open SOC</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">SOC Investigation</a></li></ul>';
    }
    else if (input.includes("testing")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pen_testing_blueprints" target="_blank">Pen Testing Blueprints</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#penetration_testing" target="_blank">Penetration Testing</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_web_app_testing" target="_blank">Secure Web App Testing</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">OWASP Testing Guide</a></li></ul>';
    }
    else if (input.includes("threat")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">DFIR & Threat Hunting</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Demystifying Threat Hunting</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Kansa for Enterprise Scale Threat Hunting</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Growing Threat of Human Operated Ransomware</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_response" target="_blank">Ransomware Response</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">How Cyberattacks Threaten Real World</a></li></ul><br>Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Threathunting Project</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">ACM Threat Hunting</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Threat Hunting via Sysmon</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Threat Hunting via DNS</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">ThreatCrowd</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threatfeeds IO</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threatpursuit</a></li></ul>';
    }
    else if (input.includes("world")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Ten Strategies of a World Class CSOC</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">NSA Betrayed the World\'s Trust</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">How Cyberattacks Threaten Real World</a></li></ul>';
    }
    else if (input.includes("tor")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#megator" target="_blank">Megator</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Weaponizing the Deep Web</a></li></ul>';
    }
    else if (input.includes("posters")) {
        result.innerHTML = 'Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#posters" target="_blank">Posters</a></li></ul>';
    }
    else if (input.includes("slide") || input.includes("slides") || input.includes("slide deck") || input.includes("slide decks")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#slides" target="_blank">Slides</a></li></ul>';
    }
    else if (input.includes("blogs")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#blogs" target="_blank">Blogs</a></li></ul>';
    }
    else if (input.includes("guide") || input.includes("guides")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#aws_ir_guide" target="_blank">AWS IR Guide</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">OWASP Testing Guide</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">IR Field Guide</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#guides" target="_blank">Guides</a></li></ul>';
    }
    else if (input.includes("templates") || input.includes("template")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#templates" target="_blank">Templates</a></li></ul>';
    }
    else if (input.includes("keynote") || input.includes("keynotes") || input.includes("speech") || input.includes("speeches")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#keynotes" target="_blank">Keynotes</a></li></ul>';
    }
    else if (input.includes("steganography")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#steghide" target="_blank">Steghide</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xiao_steganography" target="_blank">Xiao Steganography</a></li></ul>';
    }
    else if (input.includes("white papers") || input.includes("papers") || input.includes("reports") || input.includes("report")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#reps" target="_blank">Reports</a></li></ul>';
    }
    else if (input.includes("book") || input.includes("books")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#books" target="_blank">Books</a></li></ul>';
    }
    else if (input.includes("documentation") || input.includes("documents")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#techdocs" target="_blank">Documentation</a></li></ul>';
    }
    else if (input.includes("tutorials") || input.includes("tutorial")) {
        result.innerHTML = 'Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#guides" target="_blank">Guides</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#vids" target="_blank">Videos &amp; Tutorials</a></li></ul>';
    }
    else if (input.includes("tooling")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#tools" target="_blank">Tooling</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#tools" target="_blank">Tooling</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#tools" target="_blank">Tooling</a></li></ul>';
    }
    else if (input.includes("frameworks")) {
        result.innerHTML = 'Frameworks &amp; Projects<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#fw" target="_blank">Frameworks</a></li></ul>';
    }
    else if (input.includes("ctf") || input.includes("challenges")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ctfs" target="_blank">CTFs &amp; Ranges</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ctfs" target="_blank">CTFs &amp; Ranges</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ctfs" target="_blank">CTFs &amp; Ranges</a></li></ul>';
    }
    else if (input.includes("code") || input.includes("coding") || input.includes("scripting")) {
        result.innerHTML = 'Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#code" target="_blank">Coding Environments</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#code" target="_blank">Coding Environments</a></li></ul><br>Threat Intelligence<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/int.html#code" target="_blank">Coding Environments</a></li></ul>';
    }
    else if (input.includes("management")) {
        result.innerHTML = 'Posters<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#mgmt" target="_blank">Management</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_risk_management" target="_blank">Ransomware Risk Management</a></li></ul>';
    }
    else if (input.includes("video" || input.includes("videos"))) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#vids" target="_blank">Videos &amp; Tutorials</a></li></ul>';
    }
    else if (input.includes("channel") || input.includes("channels") || input.includes("playlist") || input.includes("playlists")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#lists" target="_blank">Channels &amp; Playlists</a></li></ul>';
    }
    else if (input.includes("webcast") || input.includes("webcasts") || input.includes("podcast") || input.includes("podcasts")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#casts" target="_blank">Webcasts &amp; Podcasts</a></li></ul>';
    }
    else if (input.includes("image") || input.includes("images") || input.includes("diagram") || input.includes("diagrams") || input.includes("picture") || input.includes("pictures")) {
        result.innerHTML = 'Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/media.html#imgs" target="_blank">Images &amp; Diagrams</a></li></ul>';
    }
    else if (input.includes("disassembler") || input.includes("disassemblers") || input.includes("debugger") || input.includes("debuggers")) {
        result.innerHTML = 'Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#static" target="_blank">Disassemblers/Debuggers</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#static" target="_blank">Disassemblers/Debuggers</a></li></ul>';
    }
    else if (input.includes("repository") || input.includes("repositories") || input.includes("malware repository") || input.includes("malware repositories")) {
        result.innerHTML = 'Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#malware_repos" target="_blank">Malware Repositories</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_repos" target="_blank">Malware Repositories</a></li></ul>';
    }
    else if (input.includes("network enumeration")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#enum" target="_blank">Network Interception/Enumeration</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#enum" target="_blank">Network Emuneration</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#subdomain_enumeration" target="_blank">Subdomain Enumeration</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#enum" target="_blank">Network Enumeration</a></li></ul>';
    }
    else if (input.includes("exploitation")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#post" target="_blank">Post Exploitation</a></li></ul><br>Publications<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hacking_the_art_of_exploitation" target="_blank">Hacking: The Art of Exploitation</a></li></ul><br>Media &amp; Socials<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#post_exploitation_hunting" target="_blank">Post Exploitation Hunting</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#post" target="_blank">Post Exploitation</a></li></ul><br>Cyber Defence (Blue Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#post_exploitation_hunting" target="_blank">Post Exploitation Hunting</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#post_cs" target="_blank">Post Exploitation (Cheat Sheets)</a></li><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#post_tools" target="_blank">Post Exploitation (Tooling)</a></li></ul>';
    }
    else if (input.includes("credential harvesting") || input.includes("cred harvesting")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#creds" target="_blank">Credential Harvesting</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#creds" target="_blank">Credential Harvesting</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#creds" target="_blank">Credential Harvesting</a></li></ul>';
    }
    else if (input.includes("c2") || input.includes("cnc") || input.includes("command and control") || input.includes("command & control")) {
        result.innerHTML = 'Cheat Sheets<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#c2" target="_blank">Command &amp; Control</a></li></ul><br>Tooling<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#c2" target="_blank">Command &amp; Control</a></li></ul><br>Offensive Cyber (Red Team)<ul><li><a href="https://oscybershop.herokuapp.com/main/pages/red.html#c2" target="_blank">Command &amp; Control</a></li></ul>';
    }
    else {
        result.innerHTML = "";
    }
}