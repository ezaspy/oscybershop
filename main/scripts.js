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
    let result = document.getElementById("output");
    input = input.toLowerCase();

    if (input.includes("abnormal")) {
        // <pre class="tab1">This is a    tab    with 2 spaces.</pre>
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - &quot;Know Abnormal Find Evil&quot;</a></pre>';
    }
    else if (input.includes("abuse")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#abuse_ch" target="_blank">Tooling - &quot;abuse.ch&quot;</a></pre>';
    }
    else if (input.includes("acm") || input.includes("counter measures") || input.includes("countermeasures") || input.includes("active counter measures") || input.includes("active countermeasures")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">Cyber Defence (Blue Team) - &quot;ACM Threat Hunting&quot;</a></pre>';
    }
    else if (input.includes("actions") || input.includes("artefacts") || input.includes("understanding")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#understanding_actions_and_artefacts" target="_blank">Publications - &quot;Understanding Actions and Artefacts&quot;</a></pre>';
    }
    else if (input.includes("active")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#active_directory_security" target="_blank">Publications - &quot;Active Directory Security&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - &quot;ADHD&quot;</a></pre>';
    }
    else if (input.includes("active directory") || input.includes("ad")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#active_directory_security" target="_blank">Publications - &quot;Active Directory Security&quot;</a></pre>';
    }
    else if (input.includes("mentor") || input.includes("cyber mentor") || input.includes("the cyber mentor") || input.includes("tcm") || input.includes("adams") || input.includes("heath") || input.includes("heath adams")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_cyber_mentor" target="_blank">Media &amp; Socials - &quot;The Cyber Mentor&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tcm" target="_blank">Media &amp; Socials - &quot;TCM&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#heath_adams" target="_blank">Media &amp; Socials - &quot;Heath Adams&quot;</a></pre>';
    }
    else if (input.includes("adhd") || input.includes("active defence") || input.includes("active defense") || input.includes("harbinger") || input.includes("distribution")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - &quot;ADHD&quot;</a></pre>';
    }
    else if (input.includes("ahmia")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ahmia" target="_blank">Threat Intelligence - &quot;ahmia&quot;</a></pre>';
    }
    else if (input.includes("alienvault") || input.includes("alien") || input.includes("vault")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#alienvault" target="_blank">Threat Intelligence - &quot;Alienvault&quot;</a></pre>';
    }
    else if (input.includes("alissa torres") || input.includes("alissa") || input.includes("torres")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#alissa_torres" target="_blank">Media &amp; Socials - &quot;Alissa Torres&quot;</a></pre>';
    }
    else if (input.includes("amass")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#amass" target="_blank">Offensive Cyber (Red Team) - &quot;Amass&quot;</a></pre>';
    }
    else if (input.includes("analysis")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#event_log_analysis" target="_blank">Cheat Sheets - &quot;Event Log Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#lateral_movement_analysis" target="_blank">Cheat Sheets - &quot;Lateral Movement Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#web_proxy_event_analysis" target="_blank">Cheat Sheets - &quot;Web Proxy Event Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malware_analysis" target="_blank">Cheat Sheets - &quot;Malware Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#anti_virus_event_analysis" target="_blank">Cheat Sheets - &quot;Anti Virus Event Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">Publications - &quot;PMAT Labs Walkthroughs&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">Cheat Sheets - &quot;REMnux&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Cheat Sheets - &quot;Reverse Engineering&quot;</a></pre>';
    }
    else if (input.includes("analytics") || input.includes("exploiting") || input.includes("ensnare") || input.includes("victims") || input.includes("exploiting analytics") || input.includes("ensnare victims")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#exploiting_web_analytics_to_ensnare_victims" target="_blank">Publications - &quot;Exploiting Web Analytics to Ensnare Victims&quot;</a></pre>';
    }
    else if (input.includes("analyzemft")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#analyzemft" target="_blank">Cyber Defence (Blue Team) - &quot;analyzemft&quot;</a></pre>';
    }
    else if (input.includes("anatomy") || input.includes("botnet") || input.includes("bot")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#anatomy_of_botnet_attack" target="_blank">Media &amp; Socials - &quot;Anatomy of Botnet Attack&quot;</a></pre>';
    }
    else if (input.includes("angry") || input.includes("angry ip") || input.includes("ip scanner") || input.includes("angry ip scanner")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Offensive Cyber (Red Team) - &quot;Angry IP Scanner&quot;</a></pre>';
    }
    else if (input.includes("anonymize") || input.includes("whonix")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#anonymize_kali_with_whonix" target="_blank">Threat Intelligence - &quot;Anonymize Kali with Whonix&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#whonix" target="_blank">Threat Intelligence - &quot;Whonix&quot;</a></pre>';
    }
    else if (input.includes("antisyphon")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#antisyphon" target="_blank">Threat Intelligence - &quot;Antisyphon&quot;</a></pre>';
    }
    else if (input.includes("apps") || input.includes("third") || input.includes("party") || input.includes("parties") || input.includes("third party") || input.includes("third party apps") || input.includes("3rd") || input.includes("3rd party") || input.includes("3rd party apps")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#windows_third_party_apps" target="_blank">Posters - &quot;Windows Third Party Apps&quot;</a></pre>';
    }
    else if (input.includes("apt")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#apt_hunter" target="_blank">Cyber Defence (Blue Team) - &quot;APT Hunter&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_china_s_cyber_espionage_units" target="_blank">Publications - &quot;APT1: Exposing One of China\'s Cyber Espionage Units&quot;</a></pre>';
    }
    else if (input.includes("apt1") || input.includes("espionage") || input.includes("units") || input.includes("exposing") || input.includes("china")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_china_s_cyber_espionage_units" target="_blank">Publications - &quot;APT1: Exposing One of China\'s Cyber Espionage Units&quot;</a></pre>';
    }
    else if (input.includes("architecture") || input.includes("architect")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#security_architecture" target="_blank">Cheat Sheets - &quot;Security Architecture&quot;</a></pre>';
    }
    else if (input.includes("armstrong") || input.includes("steve") || input.includes("steve armstrong")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#steve_armstrong" target="_blank">Media &amp; Socials - &quot;Steve Armstrong&quot;</a></pre>';
    }
    else if (input.includes("arsenal")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">Tooling - &quot;AWS Arsenal&quot;</a></pre>';
    }
    else if (input.includes("atomic")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#atomic_red_team" target="_blank">Frameworks &amp; Projects - &quot;Atomic Red Team&quot;</a></pre>';
    }
    else if (input.includes("attackdefence")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attackdefence" target="_blank">Cyber Defence (Blue Team) - &quot;AttackDefence&quot;</a></pre>';
    }
    else if (input.includes("attacks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - &quot;Common Attacks Defences&quot;</a></pre>';
    }
    else if (input.includes("avml")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#avml" target="_blank">Cyber Defence (Blue Team) - &quot;AVML&quot;</a></pre>';
    }
    else if (input.includes("awesome")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#awesome-browser_exploit" target="_blank">Offensive Cyber (Red Team) - &quot;Awesome-Browser Exploit&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_ctf" target="_blank">Awesome CTF</a><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_ir" target="_blank">Awesome IR</a><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_awesomeness" target="_blank">Awesome Awesomeness</a><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_event_ids" target="_blank">Awesome Event IDs</a>';
    }
    else if (input.includes("aws")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#aws" target="_blank">Cheat Sheets - &quot;AWS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">Tooling - &quot;AWS Arsenal&quot;</a></pre>';
    }
    else if (input.includes("azure")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#az_900_azure_fundamentals" target="_blank">Cyber Defence (Blue Team) - &quot;AZ-900 Azure Fundamentals&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - &quot;Azurehunter&quot;</a></pre>';
    }
    else if (input.includes("azurehunter")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - &quot;Azurehunter&quot;</a></pre>';
    }
    else if (input.includes("baggett") || input.includes("mark") || input.includes("mark baggett")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#mark_baggett" target="_blank">Media &amp; Socials - &quot;Mark Baggett&quot;</a></pre>';
    }
    else if (input.includes("beautifier")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#beautifier" target="_blank">Cyber Defence (Blue Team) - &quot;Beautifier&quot;</a></pre>';
    }
    else if (input.includes("beginner") || input.includes("begin")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfir_beginner_to_expert" target="_blank">Cyber Defence (Blue Team) - &quot;DFIR Beginner to Expert&quot;</a></pre>';
    }
    else if (input.includes("benchmarks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cis_benchmarks" target="_blank">Frameworks &amp; Projects - &quot;CIS Benchmarks&quot;</a></pre>';
    }
    else if (input.includes("betrayed") || input.includes("trust")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">Media &amp; Socials - &quot;NSA Betrayed the World\'s Trust&quot;</a></pre>';
    }
    else if (input.includes("build") || input.includes("building")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#build_a_home_lab" target="_blank">Media &amp; Socials - &quot;Build a Home Lab&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">Tooling - &quot;HomeLabResources&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#building_a_malware_lab" target="_blank">Cyber Defence (Blue Team) - &quot;building_a_malware_lab&quot;</a></pre>';
    }
    else if (input.includes("better")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#building_a_better_soc" target="_blank">Publications - &quot;Building a Better SOC&quot;</a></pre>';
    }
    else if (input.includes("bhis") || input.includes("black hills") || input.includes("black hills information security")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">Media &amp; Socials - &quot;BHIS (Webcast)&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">Media &amp; Socials - &quot;BHIS (Discord)&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">Media &amp; Socials - &quot;BHIS (Twitter)&quot;</a></pre>';
    }
    else if (input.includes("binary")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#binary_ninja" target="_blank">Cyber Defence (Blue Team) - &quot;Binary Ninja&quot;</a></pre>';
    }
    else if (input.includes("bless")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bless" target="_blank">Cyber Defence (Blue Team) - &quot;Bless&quot;</a></pre>';
    }
    else if (input.includes("bloodhound")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#bloodhound" target="_blank">Cheat Sheets - &quot;Bloodhound&quot;</a></pre>';
    }
    else if (input.includes("blueprint")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#blueprint" target="_blank">Media &amp; Socials - &quot;Blueprint&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pen_testing_blueprints" target="_blank">Posters - Pen Testing Blueprints</a>';
    }
    else if (input.includes("bookstack")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#bookstack" target="_blank">Frameworks &amp; Projects - &quot;Bookstack&quot;</a></pre>';
    }
    else if (input.includes("bounty")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_bounty_basics" target="_blank">Media &amp; Socials - &quot;Bug Bounty Basics&quot;</a></pre>';
    }
    else if (input.includes("breadcrumbs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#breadcrumbs" target="_blank">Threat Intelligence - &quot;Breadcrumbs&quot;</a></pre>';
    }
    else if (input.includes("brew")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#brew" target="_blank">Cyber Defence (Blue Team) - &quot;Brew&quot;</a></pre>';
    }
    else if (input.includes("brian krebs") || input.includes("brian") || input.includes("krebs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#brian_krebs" target="_blank">Media &amp; Socials - &quot;Brian Krebs&quot;</a></pre>';
    }
    else if (input.includes("bruteshark")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bruteshark" target="_blank">Cyber Defence (Blue Team) - &quot;Bruteshark&quot;</a></pre>';
    }
    else if (input.includes("bug")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_bounty_basics" target="_blank">Media &amp; Socials - &quot;Bug Bounty Basics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - &quot;Bug Hunters Methodology&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#bugcrowd" target="_blank">Training, CTFs &amp; Challenges - &quot;Bugcrowd&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#bugtraq" target="_blank">Virtual Machines - &quot;Bugtraq&quot;</a></pre>';
    }
    else if (input.includes("bugcrowd")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#bugcrowd" target="_blank">Training, CTFs &amp; Challenges - &quot;Bugcrowd&quot;</a></pre>';
    }
    else if (input.includes("bugtraq")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#bugtraq" target="_blank">Virtual Machines - &quot;Bugtraq&quot;</a></pre>';
    }
    else if (input.includes("bunker")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_bunker" target="_blank">Threat Intelligence - &quot;OSINT Bunker&quot;</a></pre>';
    }
    else if (input.includes("burp") || input.includes("burpsuite")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#burp_suite" target="_blank">Cheat Sheets - &quot;Burp Suite&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#burpsuite" target="_blank">Cyber Defence (Blue Team) - &quot;Burpsuite&quot;</a></pre>';
    }
    else if (input.includes("caine")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#caine" target="_blank">Cyber Defence (Blue Team) - &quot;Caine&quot;</a></pre>';
    }
    else if (input.includes("caldera")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#caldera" target="_blank">Frameworks &amp; Projects - &quot;Caldera&quot;</a></pre>';
    }
    else if (input.includes("camouflage")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#camouflage" target="_blank">Cyber Defence (Blue Team) - &quot;Camouflage&quot;</a></pre>';
    }
    else if (input.includes("canary")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#red_canary" target="_blank">Publications - &quot;Red Canary&quot;</a></pre>';
    }
    else if (input.includes("cape")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cape" target="_blank">Cyber Defence (Blue Team) - &quot;Cape&quot;</a></pre>';
    }
    else if (input.includes("capture")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#process_capture" target="_blank">Cyber Defence (Blue Team) - &quot;Process Capture&quot;</a></pre>';
    }
    else if (input.includes("censys")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#censys" target="_blank">Threat Intelligence - &quot;Censys&quot;</a></pre>';
    }
    else if (input.includes("cfreds")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cfreds" target="_blank">Frameworks &amp; Projects - &quot;CFREDS&quot;</a></pre>';
    }
    else if (input.includes("challenge")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Media &amp; Socials - &quot;Dr Cole Challenge&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#swiss_hacking_challenge" target="_blank">Cyber Defence (Blue Team) - &quot;Swiss Hacking Challenge&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#counter_hack_challenges" target="_blank">Cyber Defence (Blue Team) - &quot;Counter Hack Challenges&quot;</a></pre>';
    }
    else if (input.includes("cherrytree") || input.includes("cherry")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#cherrytree" target="_blank">Offensive Cyber (Red Team) - &quot;Cherrytree&quot;</a></pre>';
    }
    else if (input.includes("chimera")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#chimera" target="_blank">Offensive Cyber (Red Team) - &quot;Chimera&quot;</a></pre>';
    }
    else if (input.includes("cisa")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#cisa_ir_playbooks" target="_blank">Publications - &quot;CISA IR Playbooks&quot;</a></pre>';
    }
    else if (input.includes("ciso") || input.includes("mind") || input.includes("mindmap") || input.includes("mind map")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#ciso_mind_map" target="_blank">Posters - &quot;CISO Mind Map&quot;</a></pre>';
    }
    else if (input.includes("cli")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheat Sheets - &quot;Windows Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Cheat Sheets - &quot;Linux CLI Fundamentals&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli" target="_blank">Cheat Sheets - &quot;Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Cheat Sheets - &quot;Windows CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#multi_cloud_cli" target="_blank">Cheat Sheets - &quot;Multi Cloud CLI&quot;</a></pre>';
    }
    else if (input.includes("cloud")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#multi_cloud_cli" target="_blank">Cheat Sheets - &quot;Multi Cloud CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#cloud_security_devops" target="_blank">Cheat Sheets - &quot;Cloud Security DevOps&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#aws" target="_blank"> Cheat Sheets - &quot;AWS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">Tooling - &quot;AWS Arsenal&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#az_900_azure_fundamentals" target="_blank">Cyber Defence (Blue Team) - &quot;AZ-900 Azure Fundamentals&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - &quot;Azurehunter&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - &quot;Azurehunter&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#gcp" target="_blank">Cheat Sheets - &quot;GCP&quot;</a></pre>';
    }
    else if (input.includes("cluley") || input.includes("graham") || input.includes("graham cluley")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#graham_cluley" target="_blank">Media &amp; Socials - &quot;Graham Cluley&quot;</a></pre>';
    }
    else if (input.includes("kungfu") || input.includes("cmdline kungfu") || input.includes("cmd line kungfu") || input.includes("command line kungfu") || input.includes("command line")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cmd_line_kungfu" target="_blank">Posters - &quot;CMD Line Kungfu&quot;</a></pre>';
    }
    else if (input.includes("cmd") || input.includes("cmd line") || input.includes("cmdline") || input.includes("command line")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_command_line_obfuscation" target="_blank">Media &amp; Socials - &quot;Windows Command Line Obfuscation&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cmd_line_kungfu" target="_blank">Posters - &quot;CMD Line Kungfu&quot;</a></pre>';
    }
    else if (input.includes("cobalt") || input.includes("strike") || input.includes("cobaltstrike") || input.includes("cobalt strike")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Media &amp; Socials - &quot;Hunting Cobalt Strike&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cobaltstrike_defence" target="_blank">Frameworks &amp; Projects - CobaltStrike Defence</a>';
    }
    else if (input.includes("coderpad")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#coderpad" target="_blank">Threat Intelligence - &quot;Coderpad&quot;</a></pre>';
    }
    else if (input.includes("colab")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#colab" target="_blank">Threat Intelligence - &quot;Colab&quot;</a></pre>';
    }
    else if (input.includes("colin hardy") || input.includes("colin") || input.includes("hardy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#colin_hardy" target="_blank">Media &amp; Socials - &quot;Colin Hardy&quot;</a></pre>';
    }
    else if (input.includes("collection")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#evidence_collection" target="_blank">Cheat Sheets - &quot;Evidence Collection&quot;</a></pre>';
    }
    else if (input.includes("command")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_commands" target="_blank">Cheat Sheets - &quot;Linux Commands&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#commando" target="_blank">Virtual Machines - &quot;Commando&quot;</a></pre>';
    }
    else if (input.includes("common")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - &quot;Common Attacks Defences&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_ports" target="_blank">Cheat Sheets - &quot;Common Ports&quot;</a></pre>';
    }
    else if (input.includes("comptia")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#comptia" target="_blank">Threat Intelligence - &quot;Comptia&quot;</a></pre>';
    }
    else if (input.includes("conrad") || input.includes("eric conrad")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eric_conrad" target="_blank">Media &amp; Socials - &quot;Eric Conrad&quot;</a></pre>';
    }
    else if (input.includes("control")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cis_controls" target="_blank">Posters - &quot;CIS Controls&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#industrial_control_systems" target="_blank">Posters - &quot;Industrial Control Systems&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ics" target="_blank">Cyber Defence (Blue Team) - &quot;ICS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ics" target="_blank">Offensive Cyber (Red Team) - &quot;ICS&quot;</a></pre>';
    }
    else if (input.includes("controls")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cis_controls" target="_blank">Posters - &quot;CIS Controls&quot;</a></pre>';
    }
    else if (input.includes("core")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">Cyber Defence (Blue Team) - &quot;SOC Core Skills&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powershell_core" target="_blank">Cyber Defence (Blue Team) - &quot;Powershell Core&quot;</a></pre>';
    }
    else if (input.includes("skills")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">Cyber Defence (Blue Team) - &quot;SOC Core Skills&quot;</a></pre>';
    }
    else if (input.includes("counter")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#counter_hack_challenges" target="_blank">Cyber Defence (Blue Team) - &quot;Counter Hack Challenges&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#active_countermeasures" target="_blank">Tooling - &quot;Active Countermeasures&quot;</a></pre>';
    }
    else if (input.includes("countermeasures")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#active_countermeasures" target="_blank">Tooling - &quot;Active Countermeasures&quot;</a></pre>';
    }
    else if (input.includes("cracking stuxnet") || input.includes("cracking") || input.includes("stuxnet") || input.includes("iran") || input.includes("natanz") || input.includes("nuclear")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#cracking_stuxnet" target="_blank">Media &amp; Socials - &quot;Cracking Stuxnet&quot;</a></pre>';
    }
    else if (input.includes("critical")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#critical_log_review" target="_blank">Cheat Sheets - &quot;Critical Log Review&quot;</a></pre>';
    }
    else if (input.includes("cron") || input.includes("crontab")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#crontab_guru" target="_blank">Cyber Defence (Blue Team) - &quot;Crontab Guru&quot;</a></pre>';
    }
    else if (input.includes("crt") || input.includes("crt.sh")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#crt_sh" target="_blank">Offensive Cyber (Red Team) - &quot;crt.sh&quot;</a></pre>';
    }
    else if (input.includes("cscript")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cscript" target="_blank">Cyber Defence (Blue Team) - &quot;Cscript&quot;</a></pre>';
    }
    else if (input.includes("csi")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#csi_linux" target="_blank">Cyber Defence (Blue Team) - &quot;CSI Linux&quot;</a></pre>';
    }
    else if (input.includes("csoc") || input.includes("strategies") || input.includes("class") || input.includes("world class")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - &quot;Ten Strategies of a World Class CSOC&quot;</a></pre>';
    }
    else if (input.includes("ctfs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ctfs" target="_blank">Threat Intelligence - &quot;CTFS&quot;</a></pre>';
    }
    else if (input.includes("cuckoo")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cuckoo" target="_blank">Cyber Defence (Blue Team) - &quot;Cuckoo&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#the_cuckoos_egg" target="_blank">Publications - &quot;The Cuckoos Egg&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#install_cuckoo" _blank">Publications - &quot;Install Cuckoo&quot;</a></pre>';
    }
    else if (input.includes("cutter")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cutter" target="_blank">Cyber Defence (Blue Team) - &quot;Cutter&quot;</a></pre>';
    }
    else if (input.includes("cyber")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - &quot;How Cyberattacks Threaten Real World&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cyberbattlesim" target="_blank">Frameworks &amp; Projects - &quot;Cyberbattlesim&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberchef" target="_blank">Cyber Defence (Blue Team) - &quot;Cyberchef&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_is_cybercrime?" target="_blank">Media &amp; Socials - &quot;What is Cybercrime?&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#everyday_cybercrime_and_what_you_can_do_about_it" target="_blank">Media &amp; Socials - &quot;Everyday Cybercrime and what you can do about it&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberdefenders" target="_blank">Cyber Defence (Blue Team) - &quot;Cyberdefenders&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#defining_cyberwarfare" target="_blank">Media &amp; Socials - &quot;Defining Cyberwarfare&quot;</a></pre>';
    }
    else if (input.includes("cyberattacks") || input.includes("threaten") || input.includes("cyberattacks threaten") || input.includes("real world") || input.includes("threaten real world")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - &quot;How Cyberattacks Threaten Real World&quot;</a></pre>';
    }
    else if (input.includes("cyberbattlesim")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cyberbattlesim" target="_blank">Frameworks &amp; Projects - &quot;Cyberbattlesim&quot;</a></pre>';
    }
    else if (input.includes("cyberchef")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberchef" target="_blank">Cyber Defence (Blue Team) - &quot;Cyberchef&quot;</a></pre>';
    }
    else if (input.includes("cybercrime")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_is_cybercrime?" target="_blank">Media &amp; Socials - &quot;What is Cybercrime?&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#everyday_cybercrime_and_what_you_can_do_about_it" target="_blank">Media &amp; Socials - &quot;Everyday Cybercrime and what you can do about it&quot;</a></pre>';
    }
    else if (input.includes("cyberdefenders")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberdefenders" target="_blank">Cyber Defence (Blue Team) - &quot;Cyberdefenders&quot;</a></pre>';
    }
    else if (input.includes("defining cyberwarfare") || input.includes("cyberwarfare") || input.includes("defining")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#defining_cyberwarfare" target="_blank">Media &amp; Socials - &quot;Defining Cyberwarfare&quot;</a></pre>';
    }
    else if (input.includes("cyborg hawk") || input.includes("cyborg") || input.includes("hawk")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#cyborg_hawk" target="_blank">Virtual Machines - &quot;Cyborg Hawk&quot;</a></pre>';
    }
    else if (input.includes("cybrary")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cybrary" target="_blank">Cyber Defence (Blue Team) - &quot;Cybrary&quot;</a></pre>';
    }
    else if (input.includes("d3fend")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#d3fend" target="_blank">Frameworks &amp; Projects - &quot;D3fend&quot;</a></pre>';
    }
    else if (input.includes("darknet diaries") || input.includes("darknet") || input.includes("diaries")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#darknet_diaries" target="_blank">Media &amp; Socials - &quot;Darknet Diaries&quot;</a></pre>';
    }
    else if (input.includes("dasmalwerk")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dasmalwerk_eu" target="_blank">Cyber Defence (Blue Team) - &quot;Dasmalwerk Eu&quot;</a></pre>';
    }
    else if (input.includes("database")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#urlhaus_database" target="_blank">Cyber Defence (Blue Team) - &quot;Urlhaus Database&quot;</a></pre>';
    }
    else if (input.includes("datasets") || input.includes("dataset") || input.includes("projects")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#pd" target="_blank">Frameworks &amp; Projects - &quot;Projects &amp; Datasets&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#security_datasets" target="_blank">Frameworks &amp; Projects - &quot;Security Datasets&quot;</a></pre>';
    }
    else if (input.includes("deception")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#cyber_deception" target="_blank">Media &amp; Socials - &quot;Cyber Deception&quot;</a></pre>';
    }
    else if (input.includes("decode") || input.includes("operation")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#operation_decode" target="_blank">Publications - &quot;Operation Decode&quot;</a></pre>';
    }
    else if (input.includes("deep")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - &quot;Weaponizing the Deep Web&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#deepbluecli" target="_blank">Cyber Defence (Blue Team) - &quot;DeepBlueCLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ssdeep" target="_blank">Cyber Defence (Blue Team) - &quot;SSDeep&quot;</a></pre>';
    }
    else if (input.includes("deepbluecli")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#deepbluecli" target="_blank">Cyber Defence (Blue Team) - &quot;DeepBlueCLI&quot;</a></pre>';
    }
    else if (input.includes("defence") || input.includes("defense")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sans_cyber_defense" target="_blank">Media &amp; Socials - &quot;SANS Cyber Defense&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - &quot;Common Attacks Defences&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - &quot;ADHD&quot;</a></pre>';
    }
    else if (input.includes("defences") || input.includes("defenses")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - &quot;Common Attacks Defences&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - &quot;ADHD&quot;</a></pre>';
    }
    else if (input.includes("defending") || input.includes("fighting") || input.includes("viruses") || input.includes("fighting viruses") || input.includes("defending the net")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Media &amp; Socials - &quot;Fighting Viruses Defending the Net&quot;</a></pre>';
    }
    else if (input.includes("delivery")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#delivery" target="_blank">Offensive Cyber (Red Team) - &quot;Delivery&quot;</a></pre>';
    }
    else if (input.includes("demystifying")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Publications - &quot;Demystifying Threat Hunting&quot;</a></pre>';
    }
    else if (input.includes("deobfuscator") || input.includes("xlm")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xlmmacrodeobfuscator" target="_blank">Cyber Defence (Blue Team) - &quot;xlmmacrodeobfuscator&quot;</a></pre>';
    }
    else if (input.includes("detuxng")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#detuxng" target="_blank">Cyber Defence (Blue Team) - &quot;Detuxng&quot;</a></pre>';
    }
    else if (input.includes("devices")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">Media &amp; Socials - &quot;All Your Devices can be Hacked&quot;</a></pre>';
    }
    else if (input.includes("dfir")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheat Sheets - &quot;DFIR&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" _blank">Cyber Defence (Blue Team) - &quot;DFIRlogbook&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#dfirmindmaps" _blank">Frameworks &amp; Projects - &quot;DFIRmindmaps&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirtrack" _blank">Cyber Defence (Blue Team) - &quot;DFIRtrack&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfir_beginner_to_expert" target="_blank">Cyber Defence (Blue Team) - &quot;DFIR Beginner to Expert&quot;</a></pre>';
    }
    else if (input.includes("dfirlogbook")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">Cyber Defence (Blue Team) - &quot;DFIRlogbook&quot;</a></pre>';
    }
    else if (input.includes("dfirmindmaps")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#dfirmindmaps" target="_blank">Frameworks &amp; Projects - &quot;DFIRmindmaps&quot;</a></pre>';
    }
    else if (input.includes("dfirtrack")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirtrack" target="_blank">Cyber Defence (Blue Team) - &quot;DFIRtrack&quot;</a></pre>';
    }
    else if (input.includes("didier") || input.includes("stevens") || input.includes("didier stevens") || input.includes("didierstevens")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#didier_stevens_dist67" target="_blank">Media &amp; Socials - &quot;Didier Stevens Dist67&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didier_stevens_dist67" target="_blank">Cyber Defence (Blue Team) - &quot;Didier Stevens Dist67&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didierstevens_suite" target="_blank">Cyber Defence (Blue Team) - &quot;Didierstevens Suite&quot;</a></pre>';
    }
    else if (input.includes("dist67")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#didier_stevens_dist67" target="_blank">Media &amp; Socials - &quot;Didier Stevens Dist67&quot;</a></pre>';
    }
    else if (input.includes("diva")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dfir_diva" target="_blank">Threat Intelligence - &quot;DFIR Diva&quot;</a></pre>';
    }
    else if (input.includes("dnstwist")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dnstwist" target="_blank">Threat Intelligence - &quot;DNStwist&quot;</a></pre>';
    }
    else if (input.includes("domains") || input.includes("expired") || input.includes("expired domains")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#expired_domains" target="_blank">Offensive Cyber (Red Team) - &quot;Expired Domains&quot;</a></pre>';
    }
    else if (input.includes("domfind")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#domfind" target="_blank">Threat Intelligence - &quot;Domfind&quot;</a></pre>';
    }
    else if (input.includes("dorks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#shodan_dorks" target="_blank">Cheat Sheets - &quot;Shodan Dorks&quot;</a></pre>';
    }
    else if (input.includes("ddos") || input.includes("dos")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ddos_incident_response" target="_blank">Cheat Sheets - &quot;DDOS Incident Response&quot;</a></pre>';
    }
    else if (input.includes("dotpack")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#dotpack" target="_blank">Offensive Cyber (Red Team) - &quot;Dotpack&quot;</a></pre>';
    }
    else if (input.includes("dr") || input.includes("cole") || input.includes("dr eric cole") || input.includes("dr.") || input.includes("dr. eric cole")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_eric_cole" target="_blank">Media &amp; Socials - &quot;Dr Eric Cole&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Media &amp; Socials - &quot;Dr Cole Challenge&quot;</a></pre>';
    }
    else if (input.includes("duckduckgo")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#duckduckgo" target="_blank">Threat Intelligence - &quot;Duckduckgo&quot;</a></pre>';
    }
    else if (input.includes("dumpster")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dns_dumpster" target="_blank">Threat Intelligence - &quot;DNS Dumpster&quot;</a></pre>';
    }
    else if (input.includes("dvwa")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#dvwa" target="_blank">Virtual Machines - &quot;DVWA&quot;</a></pre>';
    }
    else if (input.includes("sarah") || input.includes("edwards") || input.includes("sarah edwards")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sarah_edwards" target="_blank">Media &amp; Socials - &quot;Sarah Edwards&quot;</a></pre>';
    }
    else if (input.includes("egg")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#the_cuckoos_egg" target="_blank">Publications - &quot;The Cuckoos Egg&quot;</a></pre>';
    }
    else if (input.includes("eiab") || input.includes("ncsc") || input.includes("exercise") || input.includes("exercise in a box") || input.includes("ttx") || input.includes("table top") || input.includes("table top exercise") || input.includes("tabletop") || input.includes("tabletop exercise") || input.includes("national cyber security centre")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ncsc_eiab" target="_blank">Frameworks &amp; Projects - &quot;NCSC EIAB&quot;</a></pre>';
    }
    else if (input.includes("elastic")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#elastic" target="_blank">Cyber Defence (Blue Team) - &quot;Elastic&quot;</a></pre>';
    }
    else if (input.includes("empire")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#empire" target="_blank">Cheat Sheets - &quot;Empire&quot;</a></pre>';
    }
    else if (input.includes("emu")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#flare_emu" target="_blank">Threat Intelligence - &quot;FLARE EMU&quot;</a></pre>';
    }
    else if (input.includes("endpoint") || input.includes("measures") || input.includes("endpoint security measures")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#endpoint_security_measures" target="_blank">Media &amp; Socials - &quot;Endpoint Security Measures&quot;</a></pre>';
    }
    else if (input.includes("engage")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#engage" target="_blank">Frameworks &amp; Projects - &quot;Engage&quot;</a></pre>';
    }
    else if (input.includes("enisa")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#enisa" target="_blank">Threat Intelligence - &quot;Enisa&quot;</a></pre>';
    }
    else if (input.includes("enterprise")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - &quot;Kansa for Enterprise Scale Threat Hunting&quot;</a></pre>';
    }
    else if (input.includes("epochconverter")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#epochconverter" target="_blank">Cyber Defence (Blue Team) - &quot;Epochconverter&quot;</a></pre>';
    }
    else if (input.includes("eric")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Cheat Sheets - &quot;Eric Zimmerman Tools&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_eric_cole" target="_blank">Media &amp; Socials - &quot;Dr Eric Cole&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Media &amp; Socials - &quot;Dr Cole Challenge&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eric_conrad" target="_blank">Media &amp; Socials - &quot;Eric Conrad&quot;</a></pre>';
    }
    else if (input.includes("eric zimmerman") || input.includes("zimmerman")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Cheat Sheets - &quot;Eric Zimmerman Tools&quot;</a></pre>';
    }
    else if (input.includes("ethical")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#become_an_ethical_hacker_for_0" target="_blank">Media &amp; Socials - &quot;Become an Ethical Hacker for $0&quot;</a></pre>';
    }
    else if (input.includes("evil")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Posters - &quot;Know Normal Hunt Evil&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - &quot;Know Abnormal Find Evil&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilclippy" target="_blank">Offensive Cyber (Red Team) - &quot;Evilclippy&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilginx2" target="_blank">Offensive Cyber (Red Team) - &quot;Evilginx2&quot;</a></pre>';
    }
    else if (input.includes("normal")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Posters - &quot;Know Normal Hunt Evil&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - &quot;Know Abnormal Find Evil&quot;</a></pre>';
    }
    else if (input.includes("evilclippy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilclippy" target="_blank">Offensive Cyber (Red Team) - &quot;Evilclippy&quot;</a></pre>';
    }
    else if (input.includes("evilginx2")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilginx2" target="_blank">Offensive Cyber (Red Team) - &quot;Evilginx2&quot;</a></pre>';
    }
    else if (input.includes("evtx_dump")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#evtx_dump" target="_blank">Cyber Defence (Blue Team) - &quot;EVTX Dump&quot;</a></pre>';
    }
    else if (input.includes("exiftool")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#exiftool" target="_blank">Cyber Defence (Blue Team) - &quot;Exiftool&quot;</a></pre>';
    }
    else if (input.includes("explorer")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wmi_explorer" target="_blank">Cyber Defence (Blue Team) - &quot;WMI Explorer&quot;</a></pre>';
    }
    else if (input.includes("extracting") || input.includes("extract")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#extracting_value_from_cti" target="_blank">Publications - &quot;Extracting Value from CTI&quot;</a></pre>';
    }
    else if (input.includes("eztools") || input.includes("kape") || input.includes("eztools kape")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eztools_kape" target="_blank">Media &amp; Socials - &quot;EZtools Kape&quot;</a></pre>';
    }
    else if (input.includes("fakedns")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fakedns" target="_blank">Cyber Defence (Blue Team) - &quot;FakeDNS&quot;</a></pre>';
    }
    else if (input.includes("faster") || input.includes("making") || input.includes("memories")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Media &amp; Socials - &quot;Making Memories Faster Response&quot;</a></pre>';
    }
    else if (input.includes("feeds")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#feeds" target="_blank">Threat Intelligence - &quot;Feeds&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - &quot;Threatfeeds IO&quot;</a></pre>';
    }
    else if (input.includes("feodo")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#feodo_tracker" target="_blank">Threat Intelligence - &quot;Feodo Tracker&quot;</a></pre>';
    }
    else if (input.includes("fiddler")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fiddler" target="_blank">Cyber Defence (Blue Team) - &quot;Fiddler&quot;</a></pre>';
    }
    else if (input.includes("field")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">Publications - &quot;IR Field Guide&quot;</a></pre>';
    }
    else if (input.includes("fighting")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Media &amp; Socials - &quot;Fighting Viruses Defending the Net&quot;</a></pre>';
    }
    else if (input.includes("findings")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#security_assessment_findings_report" target="_blank">Publications - &quot;Security Assessment Findings Report&quot;</a></pre>';
    }
    else if (input.includes("flameshot")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#flameshot" target="_blank">Offensive Cyber (Red Team) - &quot;Flameshot&quot;</a></pre>';
    }
    else if (input.includes("flare")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#flare" target="_blank">Virtual Machines - &quot;FLARE&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#flare_emu" target="_blank">Threat Intelligence - &quot;FLARE EMU&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#flare-on" target="_blank">Cyber Defence (Blue Team) - &quot;Flare-On&quot;</a></pre>';
    }
    else if (input.includes("florian") || input.includes("roth")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#florian_roth" target="_blank">Media &amp; Socials - &quot;Florian Roth&quot;</a></pre>';
    }
    else if (input.includes("focusing")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#focusing_security" target="_blank">Media &amp; Socials - &quot;Focusing Security&quot;</a></pre>';
    }
    else if (input.includes("forensics")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#macOS_forensics" target="_blank">Cheat Sheets - &quot;macOS Forensics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Cheat Sheets - &quot;Memory Forensics&quot;</a></pre>';
    }
    else if (input.includes("freq")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#freq" target="_blank">Cyber Defence (Blue Team) - &quot;freq&quot;</a></pre>';
    }
    else if (input.includes("ftk") || input.includes("imager")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ftk_imager" target="_blank">Cyber Defence (Blue Team) - &quot;FTK Imager&quot;</a></pre>';
    }
    else if (input.includes("fullhunt")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#fullhunt" target="_blank">Threat Intelligence - &quot;Fullhunt&quot;</a></pre>';
    }
    else if (input.includes("fundamentals")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Cheat Sheets - &quot;Linux CLI Fundamentals&quot;</a></pre>';
    }
    else if (input.includes("game")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#xss_game" target="_blank">Training, CTFs &amp; Challenges - &quot;XSS Game&quot;</a></pre>';
    }
    else if (input.includes("gcp")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#gcp" target="_blank">Cheat Sheets - &quot;GCP&quot;</a></pre>';
    }
    else if (input.includes("ghidra")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ghidra" target="_blank">Cyber Defence (Blue Team) - &quot;Ghidra&quot;</a></pre>';
    }
    else if (input.includes("ghost")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ghost_in_the_wires" target="_blank">Publications - &quot;Ghost in the Wires&quot;</a></pre>';
    }
    else if (input.includes("google")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking" target="_blank">Cheat Sheets - &quot;Google Hacking&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#timesketch" target="_blank">Cyber Defence (Blue Team) - &quot;Timesketch&quot;</a></pre>';
    }
    else if (input.includes("greenshot")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#greenshot" target="_blank">Offensive Cyber (Red Team) - &quot;Greenshot&quot;</a></pre>';
    }
    else if (input.includes("greynoise")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#greynoise" target="_blank">Threat Intelligence - &quot;Greynoise&quot;</a></pre>';
    }
    else if (input.includes("group") || input.includes("policy") || input.includes("pwnage") || input.includes("group policy") || input.includes("gpo") || input.includes("gpo pwnage") || input.includes("group policy pwnage")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#group_policy_pwnage" target="_blank">Publications - &quot;Group Policy Pwnage&quot;</a></pre>';
    }
    else if (input.includes("growing") || input.includes("human") || input.includes("operated")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Publications - &quot;Growing Threat of Human Operated Ransomware&quot;</a></pre>';
    }
    else if (input.includes("grr")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#grr" target="_blank">Cyber Defence (Blue Team) - &quot;grr&quot;</a></pre>';
    }
    else if (input.includes("guru")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#crontab_guru" target="_blank">Cyber Defence (Blue Team) - &quot;Crontab Guru&quot;</a></pre>';
    }
    else if (input.includes("hack")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#become_an_ethical_hacker_for_0" target="_blank">Media &amp; Socials - &quot;Become an Ethical Hacker for $0&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking_recon" target="_blank">Cheatsheets - &quot;Google Hacking" (Reconnaissance)</a><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking_int" target="_blank">Cheatsheets - &quot;Google Hacking (Intelligence)&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Media &amp; Socials - &quot;Hacker\'s Physical Pentest Toolkit&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackersploit" target="_blank">Media &amp; Socials - &quot;Hackersploit&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#shehackspurple" target="_blank">Media &amp; Socials - &quot;Shehackspurple&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">Media &amp; Socials - &quot;How Russia Hacked the US Election&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">Media &amp; Socials - &quot;All Your Devices can be Hacked&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackthebox" target="_blank">Media &amp; Socials - &quot;Hackthebox&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tryhackme" target="_blank">Media &amp; Socials - &quot;Tryhackme&quot;</a></pre>';
    }
    else if (input.includes("hacked")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">Media &amp; Socials - &quot;How Russia Hacked the US Election&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">Media &amp; Socials - &quot;All Your Devices can be Hacked&quot;</a></pre>';
    }
    else if (input.includes("hackers") || input.includes("hackersploit")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackersploit" target="_blank">Media &amp; Socials - &quot;Hackersploit&quot;</a></pre>';
    }
    else if (input.includes("hacking")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking" target="_blank">Cheat Sheets - &quot;Google Hacking&quot;</a></pre>';
    }
    else if (input.includes("hackinthebox")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#hackinthebox" target="_blank">Training, CTFs &amp; Challenges - &quot;Hackinthebox&quot;</a></pre>';
    }
    else if (input.includes("hackthebox")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackthebox" target="_blank">Media &amp; Socials - &quot;Hackthebox&quot;</a></pre>';
    }
    else if (input.includes("harmj0y")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#harmj0y" target="_blank">Publications - &quot;Harmj0y&quot;</a></pre>';
    }
    else if (input.includes("hatless1der")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hatless1der" target="_blank">Publications - &quot;Hatless1der&quot;</a></pre>';
    }
    else if (input.includes("haveibeenpwned") || input.includes("pwned")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#haveibeenpwned" target="_blank">Offensive Cyber (Red Team) - &quot;haveibeenpwned&quot;</a></pre>';
    }
    else if (input.includes("haystak")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#haystak" target="_blank">Threat Intelligence - &quot;Haystak&quot;</a></pre>';
    }
    else if (input.includes("healthcare")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#healthcare" target="_blank">Posters - &quot;Healthcare&quot;</a></pre>';
    }
    else if (input.includes("heather") || input.includes("mahalik") || input.includes("heather mahalik")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#heather_mahalik" target="_blank">Media &amp; Socials - &quot;Heather Mahalik&quot;</a></pre>';
    }
    else if (input.includes("helk")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#helk" target="_blank">Cyber Defence (Blue Team) - &quot;HELK&quot;</a></pre>';
    }
    else if (input.includes("hex")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hex_regex" target="_blank">Cheat Sheets - &quot;HEX/regex&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_regex" target="_blank">Cyber Defence (Blue Team) - &quot;Structures and Schemas&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_editors" target="_blank">Cyber Defence (Blue Team) - &quot;Hex Editors&quot;</a></pre>';
    }
    else if (input.includes("hexinator")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hexinator" target="_blank">Cyber Defence (Blue Team) - &quot;Hexinator&quot;</a></pre>';
    }
    else if (input.includes("history")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#30_years_of_history" target="_blank">Media &amp; Socials - &quot;30 Years of History&quot;</a></pre>';
    }
    else if (input.includes("home") || input.includes("homelab") || input.includes("home lab")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#build_a_home_lab" target="_blank">Media &amp; Socials - &quot;Build a Home Lab&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">Tooling - &quot;HomeLabResources&quot;</a></pre>';
    }
    else if (input.includes("hopper")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hopper" target="_blank">Cyber Defence (Blue Team) - &quot;Hopper&quot;</a></pre>';
    }
    else if (input.includes("hping")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hping" target="_blank">Cheat Sheets - &quot;Hping&quot;</a></pre>';
    }
    else if (input.includes("http") || input.includes("probe") || input.includes("httprobe")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#httprobe" target="_blank">Offensive Cyber (Red Team) - &quot;Httprobe&quot;</a></pre>';
    }
    else if (input.includes("hunt")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Frameworks &amp; Projects - &quot;Threathunting Project&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - &quot;DFIR & Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">Cyber Defence (Blue Team) - &quot;ACM Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#apt_hunter" target="_blank">Cyber Defence (Blue Team) - &quot;APT Hunter&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - &quot;Azurehunter&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Publications - &quot;Demystifying Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - &quot;Kansa for Enterprise Scale Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Posters - &quot;Know Normal Hunt Evil&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - &quot;Know Abnormal Find Evil&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#fullhunt" target="_blank">Threat Intelligence - &quot;Fullhunt&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Media &amp; Socials - &quot;Hunting Cobalt Strike&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Media &amp; Socials - &quot;Threat Hunting via Sysmon&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - &quot;Threat Hunting via DNS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#post_exploitation_hunting" target="_blank">Media &amp; Socials - &quot;Post Exploitation Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - &quot;Bug Hunters Methodology&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - &quot;DFIR & Threat Hunting&quot;</a></pre>';
    }
    else if (input.includes("hunters")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - &quot;Bug Hunters Methodology&quot;</a></pre>';
    }
    else if (input.includes("hybrid")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hybrid_analysis" target="_blank">Cyber Defence (Blue Team) - &quot;Hybrid Analysis&quot;</a></pre>';
    }
    else if (input.includes("mikko") || input.includes("hypponen") || input.includes("mikko hypponen")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#mikko_hypponen" target="_blank">Media &amp; Socials - &quot;Mikko Hypponen&quot;</a></pre>';
    }
    else if (input.includes("ida") || input.includes("ida pro")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ida_pro" target="_blank">Cheat Sheets - &quot;IDA Pro&quot;</a></pre>';
    }
    else if (input.includes("ids")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ids" target="_blank">Cheat Sheets - &quot;IDS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#awesome_event_ids" target="_blank">Cheat Sheets - &quot;Awesome Event IDs&quot;</a></pre>';
    }
    else if (input.includes("immunity")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#immunity_debugger" target="_blank">Cyber Defence (Blue Team) - &quot;Immunity Debugger&quot;</a></pre>';
    }
    else if (input.includes("impacket")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#impacket" target="_blank">Offensive Cyber (Red Team) - &quot;Impacket&quot;</a></pre>';
    }
    else if (input.includes("inceptor")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#inceptor" target="_blank">Offensive Cyber (Red Team) - &quot;Inceptor&quot;</a></pre>';
    }
    else if (input.includes("incident") || input.includes("response") || input.includes("incident response")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ddos_incident_response" target="_blank">Cheat Sheets - &quot;DDOS Incident Response&quot;</a></pre>';
    }
    else if (input.includes("industrial") || input.includes("systems") || input.includes("industrial control") || input.includes("control systems") || input.includes("industrial control systems") || input.includes("ics") || input.includes("scada") || input.includes("supervisory control and data acquisition")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#industrial_control_systems" target="_blank">Posters - &quot;Industrial Control Systems&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ics" target="_blank">Cyber Defence (Blue Team) - &quot;ICS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ics" target="_blank">Offensive Cyber (Red Team) - &quot;ICS&quot;</a></pre>';
    }
    else if (input.includes("inet") || input.includes("inetsim")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#inetsim" target="_blank">Cyber Defence (Blue Team) - &quot;Inetsim&quot;</a></pre>';
    }
    else if (input.includes("infosec")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#infosec_osint_show" target="_blank">Threat Intelligence - &quot;Infosec OSINT Show&quot;</a></pre>';
    }
    else if (input.includes("ins1gn1a")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ins1gn1a" target="_blank">Publications - &quot;Ins1gn1a&quot;</a></pre>';
    }
    else if (input.includes("insertion") || input.includes("usb")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#usb_insertion" target="_blank">Media &amp; Socials - &quot;USB Insertion&quot;</a></pre>';
    }
    else if (input.includes("installing") || input.includes("zeek") || input.includes("scratch") || input.includes("installing zeek")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#installing_zeek_from_scratch" target="_blank">Media &amp; Socials - &quot;Installing Zeek from Scratch&quot;</a></pre>';
    }
    else if (input.includes("intelligencex")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#intelligencex" target="_blank">Threat Intelligence - &quot;IntelligenceX&quot;</a></pre>';
    }
    else if (input.includes("inteltechniques")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#inteltechniques" target="_blank">Threat Intelligence - &quot;IntelTechniques&quot;</a></pre>';
    }
    else if (input.includes("interactsh")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#interactsh" target="_blank">Cyber Defence (Blue Team) - &quot;Interactsh&quot;</a></pre>';
    }
    else if (input.includes("internet")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_we_take_back_the_internet" target="_blank">Media &amp; Socials - &quot;How we Take Back the Internet&quot;</a></pre>';
    }
    else if (input.includes("investigating") || input.includes("wmi attacks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#investigating_wmi_attacks" target="_blank">Media &amp; Socials - &quot;Investigating WMI Attacks&quot;</a></pre>';
    }
    else if (input.includes("investigation")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">Threat Intelligence - &quot;SOC Investigation&quot;</a></pre>';
    }
    else if (input.includes("invisiblesecrets")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#invisiblesecrets" target="_blank">Cyber Defence (Blue Team) - &quot;Invisiblesecrets&quot;</a></pre>';
    }
    else if (input.includes("ioas") || input.includes("iocs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#iocs_v_ioas" target="_blank">Publications - &quot;IOCs V IOAs&quot;</a></pre>';
    }
    else if (input.includes("ios")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ios_macOS_images" target="_blank">Frameworks &amp; Projects - &quot;iOS/macOS Images&quot;</a></pre>';
    }
    else if (input.includes("ippsec")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ippsec" target="_blank">Threat Intelligence - &quot;Ippsec&quot;</a></pre>';
    }
    else if (input.includes("jail")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_jail" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Jail&quot;</a></pre>';
    }
    else if (input.includes("jake") || input.includes("williams") || input.includes("jake williams")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#jake_williams" target="_blank">Media &amp; Socials - &quot;Jake Williams&quot;</a></pre>';
    }
    else if (input.includes("james") || input.includes("lyne") || input.includes("james lyne")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#james_lyne" target="_blank">Media &amp; Socials - &quot;James Lyne&quot;</a></pre>';
    }
    else if (input.includes("jason") || input.includes("fossen") || input.includes("jason fossen")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#jason_fossen" target="_blank">Media &amp; Socials - &quot;Jason Fossen&quot;</a></pre>';
    }
    else if (input.includes("java") || input.includes("decompiler")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#java_decompiler" target="_blank">Cyber Defence (Blue Team) - &quot;Java Decompiler&quot;</a></pre>';
    }
    else if (input.includes("joe")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#joe_sandbox" target="_blank">Cyber Defence (Blue Team) - &quot;Joe Sandbox&quot;</a></pre>';
    }
    else if (input.includes("joff") || input.includes("thyer") || input.includes("joff thyer")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#joff_thyer" target="_blank">Media &amp; Socials - &quot;Joff Thyer&quot;</a></pre>';
    }
    else if (input.includes("john")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#john_strand" target="_blank">Media &amp; Socials - &quot;John Strand&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#johntheripper" target="_blank">Offensive Cyber (Red Team) - &quot;JohnTheRipper&quot;</a></pre>';
    }
    else if (input.includes("joplin")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#joplin" target="_blank">Offensive Cyber (Red Team) - &quot;Joplin&quot;</a></pre>';
    }
    else if (input.includes("jq") || input.includes("json")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#json_jq" target="_blank">Cheat Sheets - &quot;json/jq&quot;</a></pre>';
    }
    else if (input.includes("kali")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#kali" target="_blank">Cheat Sheets - &quot;Kali&quot;</a></pre>';
    }
    else if (input.includes("kansa")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - &quot;Kansa for Enterprise Scale Threat Hunting&quot;</a></pre>';
    }
    else if (input.includes("karma")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#karma" target="_blank">Threat Intelligence - &quot;Karma&quot;</a></pre>';
    }
    else if (input.includes("keepnote")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#keepnote" target="_blank">Offensive Cyber (Red Team) - &quot;Keepnote&quot;</a></pre>';
    }
    else if (input.includes("kernel") || input.includes("tracing")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#linux_kernel_tracing" target="_blank">Publications - &quot;Linux Kernel Tracing&quot;</a></pre>';
    }
    else if (input.includes("kevin") || input.includes("mitnick") || input.includes("kevin mitnick")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#kevin_mitnick" target="_blank">Media &amp; Socials - &quot;Kevin Mitnick&quot;</a></pre>';
    }
    else if (input.includes("kioptrix")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#kioptrix" target="_blank">Virtual Machines - &quot;Kioptrix&quot;</a></pre>';
    }
    else if (input.includes("kodachi")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#kodachi" target="_blank">Threat Intelligence - &quot;Kodachi&quot;</a></pre>';
    }
    else if (input.includes("kql")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#kql" target="_blank">Cheat Sheets - &quot;kql&quot;</a></pre>';
    }
    else if (input.includes("lab")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">Tooling - &quot;HomeLabResources&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#trace_labs" target="_blank">Threat Intelligence - &quot;Trace Labs&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#colab" target="_blank">Threat Intelligence - &quot;COLAB&quot;</a></pre>';
    }
    else if (input.includes("lateral") || input.includes("movement") || input.includes("lateral movement")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#lateral_movement_analysis" target="_blank">Cheat Sheets - &quot;Lateral Movement Analysis&quot;</a></pre>';
    }
    else if (input.includes("layer") || input.includes("layer8")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#layer_8" target="_blank">Threat Intelligence - &quot;Layer 8&quot;</a></pre>';
    }
    else if (input.includes("rob") || input.includes("robert") || input.includes("lee") || input.includes("rob lee") || input.includes("robert lee")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#rob_lee" target="_blank">Media &amp; Socials - &quot;Rob Lee&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#robert_lee" target="_blank">Media &amp; Socials - &quot;Robert Lee&quot;</a></pre>';
    }
    else if (input.includes("lenny") || input.includes("zeltser") || input.includes("lenny zeltser")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#lenny_zelster" target="_blank">Publications - &quot;Lenny Zelster&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#lenny_zeltser" target="_blank">Media &amp; Socials - &quot;Lenny Zeltser&quot;</a></pre>';
    }
    else if (input.includes("lifecycle")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ir_lifecycle" target="_blank">Cheat Sheets - &quot;IR Lifecycle&quot;</a></pre>';
    }
    else if (input.includes("lime")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#lime" target="_blank">Cyber Defence (Blue Team) - &quot;Lime&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#limelighter" target="_blank">Offensive Cyber (Red Team) - &quot;LimeLighter&quot;</a></pre>';
    }
    else if (input.includes("lighter") || input.includes("limelighter")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#limelighter" target="_blank">Offensive Cyber (Red Team) - &quot;LimeLighter&quot;</a></pre>';
    }
    else if (input.includes("linpmem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linpmem" target="_blank">Cyber Defence (Blue Team) - &quot;linpmem&quot;</a></pre>';
    }
    else if (input.includes("pmem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linpmem" target="_blank">Cyber Defence (Blue Team) - &quot;linpmem&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#osxpmem" target="_blank">Cyber Defence (Blue Team) - &quot;osxpmem&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Cyber Defence (Blue Team) - &quot;Winpmem&quot;</a></pre>';
    }
    else if (input.includes("linux")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheat Sheets - &quot;Windows Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_commands" target="_blank">Cheat Sheets - &quot;Linux Commands&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Cheat Sheets - &quot;Linux CLI Fundamentals&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli" target="_blank">Cheat Sheets - &quot;Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_shell" target="_blank">Cheat Sheets - &quot;Linux Shell&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux" target="_blank">Cheat Sheets - &quot;Linux&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#smb_access_from_linux" target="_blank">Cheat Sheets - &quot;SMB Access from Linux&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linuxcatscale" target="_blank">Cyber Defence (Blue Team) - &quot;Linuxcatscale&quot;</a></pre>';
    }
    else if (input.includes("linuxcatscale")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linuxcatscale" target="_blank">Cyber Defence (Blue Team) - &quot;Linuxcatscale&quot;</a></pre>';
    }
    else if (input.includes("location") || input.includes("scammer")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_to_get_a_scammers_location" target="_blank">Media &amp; Socials - &quot;How to get a Scammer\'s Location&quot;</a></pre>';
    }
    else if (input.includes("log")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#event_log_analysis" target="_blank">Cheat Sheets - &quot;Event Log Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#critical_log_review" target="_blank">Cheat Sheets - &quot;Critical Log Review&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">Cyber Defence (Blue Team) - &quot;DFIRlogbook&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#what2log" target="_blank">Frameworks &amp; Projects - &quot;What2Log&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#unconventional_logging" target="_blank">Media &amp; Socials - &quot;Unconventional Logging&quot;</a></pre>';
    }
    else if (input.includes("logging") || input.includes("unconventional") || input.includes("conventional")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#unconventional_logging" target="_blank">Media &amp; Socials - &quot;Unconventional Logging&quot;</a></pre>';
    }
    else if (input.includes("lolbas")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#lolbas" target="_blank">Frameworks &amp; Projects - &quot;LOLBAS&quot;</a></pre>';
    }
    else if (input.includes("lorandbodo")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#lorandbodo" target="_blank">Publications - &quot;lorandbodo&quot;</a></pre>';
    }
    else if (input.includes("macos")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#macOS_forensics" target="_blank">Cheat Sheets - &quot;macOS Forensics&quot;</a></pre>';
    }
    else if (input.includes("macro pack")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#macro_pack" target="_blank">Offensive Cyber (Red Team) - &quot;Macro Pack&quot;</a></pre>';
    }
    else if (input.includes("macro")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#macro_pack" target="_blank">Offensive Cyber (Red Team) - &quot;Macro Pack&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xlmmacrodeobfuscator" target="_blank">Cyber Defence (Blue Team) - &quot;XLMMacroDeobfuscator&quot;</a></pre>';
    }
    else if (input.includes("malapi")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#malapi" target="_blank">Frameworks &amp; Projects - &quot;Malapi&quot;</a></pre>';
    }
    else if (input.includes("malicious") || input.includes("malicious documents")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malicious_documents" target="_blank">Cheat Sheets - &quot;Malicious Documents&quot;</a></pre>';
    }
    else if (input.includes("malshare")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malshare" target="_blank">Cyber Defence (Blue Team) - &quot;Malshare&quot;</a></pre>';
    }
    else if (input.includes("maltego")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#maltego" target="_blank">Threat Intelligence - &quot;Maltego&quot;</a></pre>';
    }
    else if (input.includes("malware")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malware_analysis" target="_blank">Cheat Sheets - &quot;Malware Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#building_a_malware_lab" target="_blank">Cyber Defence (Blue Team) - &quot;building_a_malware_lab&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwaretrafficanalysis" target="_blank">Cyber Defence (Blue Team) - &quot;MalwareTrafficAnalysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Analysis&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_analysis_repo" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Analysis Repository&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwarebazaar" target="_blank">Cyber Defence (Blue Team) - &quot;Malwarebazaar&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_jail" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Jail&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_repos" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Repositories&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#mac_malware" target="_blank">Cyber Defence (Blue Team) - &quot;Mac Malware&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#the-malware_repo" target="_blank">Cyber Defence (Blue Team) - &quot;The-MALWARE-Repo&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_feed" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Feed&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">Publications - &quot;PMAT Labs Walkthroughs&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwr" target="_blank">Cyber Defence (Blue Team) - &quot;Malwr&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">Cheat Sheets - &quot;REMnux&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Cheat Sheets - &quot;Reverse Engineering&quot;</a></pre>';
    }
    else if (input.includes("malwarebazaar")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwarebazaar" target="_blank">Cyber Defence (Blue Team) - &quot;Malwarebazaar&quot;</a></pre>';
    }
    else if (input.includes("malwaretrafficanalysis")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwaretrafficanalysis" target="_blank">Cyber Defence (Blue Team) - &quot;Malwaretrafficanalysis&quot;</a></pre>';
    }
    else if (input.includes("malwr")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwr" target="_blank">Cyber Defence (Blue Team) - &quot;Malwr&quot;</a></pre>';
    }
    else if (input.includes("mapping")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#osi_mapping" target="_blank">Media &amp; Socials - &quot;OSI Mapping&quot;</a></pre>';
    }
    else if (input.includes("mass")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#amass" target="_blank">Offensive Cyber (Red Team) - &quot;Amass&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Offensive Cyber (Red Team) - &quot;Masscan&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Offensive Cyber (Red Team) - &quot;Massdns&quot;</a></pre>';
    }
    else if (input.includes("masscan")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Offensive Cyber (Red Team) - &quot;Masscan&quot;</a></pre>';
    }
    else if (input.includes("massdns")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Offensive Cyber (Red Team) - &quot;MassDNS&quot;</a></pre>';
    }
    else if (input.includes("media")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#media" target="_blank">Threat Intelligence - &quot;Media&quot;</a></pre>';
    }
    else if (input.includes("megator")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#megator" target="_blank">Threat Intelligence - &quot;Megator&quot;</a></pre>';
    }
    else if (input.includes("mem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Media &amp; Socials - &quot;Making Memories Faster Response&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Cheat Sheets - &quot;Memory Forensics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#memprocfs" target="_blank">Cyber Defence (Blue Team) - &quot;MemProcFS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Cyber Defence (Blue Team) - &quot;Volatility&quot;</a></pre>';
    }
    else if (input.includes("memory")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Cheat Sheets - &quot;Memory Forensics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Media &amp; Socials - &quot;Making Memories Faster Response&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Cyber Defence (Blue Team) - &quot;Volatility&quot;</a></pre>';
    }
    else if (input.includes("memprocfs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#memprocfs" target="_blank">Cyber Defence (Blue Team) - &quot;MemProcFS&quot;</a></pre>';
    }
    else if (input.includes("metasploit")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#metasploit" target="_blank">Cheat Sheets - &quot;Metasploit&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable3" target="_blank">Virtual Machines - &quot;Metasploitable3&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable2" target="_blank">Virtual Machines - &quot;Metasploitable2&quot;</a></pre>';
    }
    else if (input.includes("metasploitable")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable3" target="_blank">Virtual Machines - &quot;Metasploitable3&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable2" target="_blank">Virtual Machines - &quot;Metasploitable2&quot;</a></pre>';
    }
    else if (input.includes("methodology")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - &quot;Bug Hunters Methodology&quot;</a></pre>';
    }
    else if (input.includes("mfasweep")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#mfasweep" target="_blank">Offensive Cyber (Red Team) - &quot;mfasweep&quot;</a></pre>';
    }
    else if (input.includes("mft")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#analyzemft" target="_blank">Cyber Defence (Blue Team) - &quot;analyzemft&quot;</a></pre>';
    }
    else if (input.includes("mirage")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_security_mirage" target="_blank">Media &amp; Socials - &quot;The Security Mirage&quot;</a></pre>';
    }
    else if (input.includes("misp")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#misp" target="_blank">Threat Intelligence - &quot;MISP&quot;</a></pre>';
    }
    else if (input.includes("mitigations")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_cred_attacks_mitigations" target="_blank">Media &amp; Socials - &quot;Windows Cred. Attacks Mitigations&quot;</a></pre>';
    }
    else if (input.includes("mitm6") || input.includes("mitm") || input.includes("man in the middle") || input.includes("man-in-the-middle")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#mitm6" target="_blank">Offensive Cyber (Red Team) - &quot;mitm6&quot;</a></pre>';
    }
    else if (input.includes("mitre")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attack_framework" target="_blank">Cyber Defence (Blue Team) - &quot;ATT&CK Framework&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attack_navigator" target="_blank">Cyber Defence (Blue Team) - &quot;ATT&CK Navigator&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#d3fend" target="_blank">Cyber Defence (Blue Team) - &quot;D3FEND&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#engage" target="_blank">Cyber Defence (Blue Team) - &quot;Engage&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - &quot;Ten Strategies of a World-Class CSOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#mitre_attack_mapping" target="_blank">Publications - &quot;MITRE ATT&CK Mapping&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_framework" target="_blank">Frameworks &amp; Projects - &quot;ATT&CK Framework&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_navigator" target="_blank">Frameworks &amp; Projects - &quot;ATT&CK Navigator&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#d3fend" target="_blank">Frameworks &amp; Projects - &quot;D3FEND&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#engage" target="_blank">Frameworks &amp; Projects - &quot;Engage&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#caldera" target="_blank">Frameworks &amp; Projects - &quot;Caldera&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#caldera" target="_blank">Offensive Cyber (Red Team) - &quot;Caldera&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#cybrary" target="_blank">Training - &quot;Cybrary&quot;</a></pre>';
    }
    else if (input.includes("module")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#running_processes_and_modules" target="_blank">Publications - &quot;Running Processes and Modules&quot;</a></pre>';
    }
    else if (input.includes("monitor")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#api_monitor" target="_blank">Cyber Defence (Blue Team) - &quot;API Monitor&quot;</a></pre>';
    }
    else if (input.includes("muraena")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#muraena" target="_blank">Offensive Cyber (Red Team) - &quot;Muraena&quot;</a></pre>';
    }
    else if (input.includes("n00py")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#n00py" target="_blank">Publications - &quot;N00py&quot;</a></pre>';
    }
    else if (input.includes("nagios")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nagios" target="_blank">Cyber Defence (Blue Team) - &quot;Nagios&quot;</a></pre>';
    }
    else if (input.includes("nano")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#nano" target="_blank">Cheat Sheets - &quot;Nano&quot;</a></pre>';
    }
    else if (input.includes("navigator")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_navigator" target="_blank">Frameworks &amp; Projects - &quot;ATT&CK Navigator&quot;</a></pre>';
    }
    else if (input.includes("necrobrowser")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#necrobrowser" target="_blank">Offensive Cyber (Red Team) - &quot;Necrobrowser&quot;</a></pre>';
    }
    else if (input.includes("needle") || input.includes("needles") || input.includes("needlestack") || input.includes("needlestacks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#needles_in_needlestacks" target="_blank">Media &amp; Socials - &quot;Needles in Needlestacks&quot;</a></pre>';
    }
    else if (input.includes("nessus")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nessus" target="_blank">Cyber Defence (Blue Team) - &quot;Nessus&quot;</a></pre>';
    }
    else if (input.includes("netcat")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#netcat" target="_blank">Cheat Sheets - &quot;Netcat&quot;</a></pre>';
    }
    else if (input.includes("nirsoft")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nirsoft_suite" target="_blank">Cyber Defence (Blue Team) - &quot;Nirsoft Suite&quot;</a></pre>';
    }
    else if (input.includes("nist")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nist_ir_framework" target="_blank">Media &amp; Socials - &quot;NIST IR Framework&quot;</a></pre>';
    }
    else if (input.includes("nmap")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#nmap" target="_blank">Cheat Sheets - &quot;nmap&quot;</a></pre>';
    }
    else if (input.includes("node")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#node_red" target="_blank">Threat Intelligence - &quot;Node Red&quot;</a></pre>';
    }
    else if (input.includes("nsa")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">Media &amp; Socials - &quot;NSA Betrayed the World\'s Trust&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_responds_to_snowdon" target="_blank">Media &amp; Socials - &quot;NSA Responds to Snowdon&quot;</a></pre>';
    }
    else if (input.includes("oalabs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#oalabs" target="_blank">Media &amp; Socials - &quot;Oalabs&quot;</a></pre>';
    }
    else if (input.includes("obfuscation")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_command_line_obfuscation" target="_blank">Media &amp; Socials - &quot;Windows Command Line Obfuscation&quot;</a></pre>';
    }
    else if (input.includes("offensive")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#offensive_security" target="_blank">Media &amp; Socials - &quot;Offensive Security&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sans_offensive_ops" target="_blank">Media &amp; Socials - &quot;SANS Offensive Ops&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#offensive_security" target="_blank">Media &amp; Socials - &quot;Offensive Security&quot;</a></pre>';
    }
    else if (input.includes("oledump")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#oledump" target="_blank">Cheat Sheets - &quot;oledump&quot;</a></pre>';
    }
    else if (input.includes("oletools")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#oletools" target="_blank">Cyber Defence (Blue Team) - &quot;oletools&quot;</a></pre>';
    }
    else if (input.includes("ollydbg") || input.includes("olly")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ollydbg" target="_blank">Cyber Defence (Blue Team) - &quot;OllyDBG&quot;</a></pre>';
    }
    else if (input.includes("onion") || input.includes("security onion")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#security_onion" target="_blank">Cyber Defence (Blue Team) - &quot;Security Onion&quot;</a></pre>';
    }
    else if (input.includes("onyphe")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#onyphe" target="_blank">Threat Intelligence - &quot;Onyphe&quot;</a></pre>';
    }
    else if (input.includes("ooda") || input.includes("ooda loop")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#using_ooda_loop_in_ir" target="_blank">Publications - &quot;Using OODA Loop in IR&quot;</a></pre>';
    }
    else if (input.includes("open")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#open_soc" target="_blank">Media &amp; Socials - &quot;Open SOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#open_soc" target="_blank">Cyber Defence (Blue Team) - &quot;Open SOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#openvas" target="_blank">Cyber Defence (Blue Team) - &quot;OpenVAS&quot;</a></pre>';
    }
    else if (input.includes("openvas")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#openvas" target="_blank">Cyber Defence (Blue Team) - &quot;OpenVAS&quot;</a></pre>';
    }
    else if (input.includes("order") || input.includes("search order") || input.includes("search order hijacking") || input.includes("sho") || input.includes("identifying")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#identifying_search_order_hijacking" target="_blank">Publications - &quot;Identifying Search Order Hijacking&quot;</a></pre>';
    }
    else if (input.includes("osint")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#infosec_osint_show" target="_blank">Threat Intelligence - &quot;Infosec OSINT Show&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_bunker" target="_blank">Threat Intelligence - &quot;OSINT Bunker&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_curious" target="_blank">Threat Intelligence - &quot;OSINT Curious&quot;</a></pre>';
    }
    else if (input.includes("ossem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ossem" target="_blank">Frameworks &amp; Projects - &quot;ossem&quot;</a></pre>';
    }
    else if (input.includes("osxpmem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#osxpmem" target="_blank">Cyber Defence (Blue Team) - &quot;osxpmem&quot;</a></pre>';
    }
    else if (input.includes("owasp")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#owasp" target="_blank">Frameworks &amp; Projects - &quot;OWASP&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">Publications - &quot;OWASP Testing Guide&quot;</a></pre>';
    }
    else if (input.includes("packettotal")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#packettotal" target="_blank">Cyber Defence (Blue Team) - &quot;PacketTotal&quot;</a></pre>';
    }
    else if (input.includes("pafish")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#pafish" target="_blank">Offensive Cyber (Red Team) - &quot;Pafish&quot;</a></pre>';
    }
    else if (input.includes("paladin")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#paladin" target="_blank">Cyber Defence (Blue Team) - &quot;Paladin&quot;</a></pre>';
    }
    else if (input.includes("parrotos")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#parrotos" target="_blank">Virtual Machines - &quot;ParrotOS&quot;</a></pre>';
    }
    else if (input.includes("pastebin")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#pastebin" target="_blank">Threat Intelligence - &quot;Pastebin&quot;</a></pre>';
    }
    else if (input.includes("payloads")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#payloads_all_the_things" target="_blank">Cheat Sheets - &quot;Payloads all the Things&quot;</a></pre>';
    }
    else if (input.includes("pcodedmp")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pcodedmp" target="_blank">Cyber Defence (Blue Team) - &quot;pcodedmp&quot;</a></pre>';
    }
    else if (input.includes("pdf")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pdf_parser" target="_blank">Cyber Defence (Blue Team) - &quot;PDF Parser&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peepdf" target="_blank">Cyber Defence (Blue Team) - &quot;Peepdf&quot;</a></pre>';
    }
    else if (input.includes("pe")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_bear" target="_blank">Cyber Defence (Blue Team) - &quot;pe-bear&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_tree" target="_blank">Cyber Defence (Blue Team) - &quot;pe-tree&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peframe" target="_blank">Cyber Defence (Blue Team) - &quot;peframe&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">Cyber Defence (Blue Team) - &quot;petools&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">Cyber Defence (Blue Team) - &quot;pestudio&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peepdf" target="_blank">Cyber Defence (Blue Team) - &quot;peepdf&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pehash" target="_blank">Cyber Defence (Blue Team) - &quot;pehash&quot;</a></pre>';
    }
    else if (input.includes("pentest") || input.includes("pen test") || input.includes("penetration") || input.includes("penetration testing")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Media &amp; Socials - &quot;Hacker\'s Physical Pentest Toolkit&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#pentestbox" target="_blank">Virtual Machines - &quot;Pentestbox&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#pentesteracademy" target="_blank">Training, CTFs &amp; Challenges - &quot;Pentesteracademy&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sample_pen_test_report" target="_blank">Offensive Cyber (Red Team) - &quot;Sample Pen Test Report&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#penetration_testing" target="_blank">Posters - &quot;Penetration Testing&quot;</a></pre>';
    }
    else if (input.includes("pentestbox")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#pentestbox" target="_blank">Virtual Machines - &quot;Pentestbox&quot;</a></pre>';
    }
    else if (input.includes("pentesteracademy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#pentesteracademy" target="_blank">Training, CTFs &amp; Challenges - &quot;Pentesteracademy&quot;</a></pre>';
    }
    else if (input.includes("pestudio")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">Cyber Defence (Blue Team) - &quot;pestudio&quot;</a></pre>';
    }
    else if (input.includes("petools")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">Cyber Defence (Blue Team) - &quot;petools&quot;</a></pre>';
    }
    else if (input.includes("phil") || input.includes("hagen") || input.includes("phil hagen")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#phil_hagen" target="_blank">Media &amp; Socials - &quot;Phil Hagen&quot;</a></pre>';
    }
    else if (input.includes("phish")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#phishing" target="_blank">Media &amp; Socials - &quot;Phishing&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Cyber Defence (Blue Team) - &quot;PhishingKitTracker&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#phishtool" target="_blank">Offensive Cyber (Red Team) - &quot;Phishtool&quot;</a></pre>';
    }
    else if (input.includes("phishing")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#phishing" target="_blank">Media &amp; Socials - &quot;Phishing&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Cyber Defence (Blue Team) - &quot;PhishingKitTracker&quot;</a></pre>';
    }
    else if (input.includes("phishingkittracker")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Cyber Defence (Blue Team) - &quot;Phishingkittracker&quot;</a></pre>';
    }
    else if (input.includes("phishtool")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#phishtool" target="_blank">Offensive Cyber (Red Team) - &quot;Phishtool&quot;</a></pre>';
    }
    else if (input.includes("physical")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Media &amp; Socials - &quot;Hacker\'s Physical Pentest Toolkit&quot;</a></pre>';
    }
    else if (input.includes("picoctf")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#picoctf" target="_blank">Cyber Defence (Blue Team) - &quot;Picoctf&quot;</a></pre>';
    }
    else if (input.includes("pivot") || input.includes("pivots") || input.includes("pivoting")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#pivoting" target="_blank">Cheat Sheets - &quot;Pivoting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pivots_payloads" target="_blank">Posters - &quot;Pivots Payloads&quot;</a></pre>';
    }
    else if (input.includes("plaso") || input.includes("log2timeline") || input.includes("l2t")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#plaso" target="_blank">Cheat Sheets - &quot;Plaso&quot;</a></pre>';
    }
    else if (input.includes("playbooks") || input.includes("playbook")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#ir_playbooks" target="_blank">Media &amp; Socials - &quot;IR Playbooks&quot;</a></pre>';
    }
    else if (input.includes("pmat") || input.includes("walkthroughs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">Publications - &quot;PMAT Labs Walkthroughs&quot;</a></pre>';
    }
    else if (input.includes("ports")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_ports" target="_blank">Cheat Sheets - &quot;Common Ports&quot;</a></pre>';
    }
    else if (input.includes("post exploitation") || input.includes("post")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#post" target="_blank">Cheat Sheets - &quot;Post&quot;</a></pre>';
    }
    else if (input.includes("power") || input.includes("power") || input.includes("powershell") || input.includes("power shell")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powershell_core" target="_blank">Cyber Defence (Blue Team) - &quot;Powershell Core&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#blue_team_powershell" target="_blank">Cyber Defence (Blue Team) - &quot;Blue Team Powershell&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">Cyber Defence (Blue Team) - &quot;PowerForensics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">Cyber Defence (Blue Team) - &quot;PowerForensics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#empire" target="_blank">Offensive Cyber (Red Team) - &quot;PowerShell Empire&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#powershell_wmic" target="_blank">Offensive Cyber (Red Team) - &quot;PowerShell &amp; WMIC&quot;</a></pre>';
    }
    else if (input.includes("powerforensics")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">Cyber Defence (Blue Team) - &quot;PowerForensics&quot;</a></pre>';
    }
    else if (input.includes("powersploit")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#powersploit" target="_blank">Offensive Cyber (Red Team) - &quot;PowerSploit&quot;</a></pre>';
    }
    else if (input.includes("privacytools") || input.includes("privacy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#privacytools" target="_blank">Threat Intelligence - &quot;PrivacyTools&quot;</a></pre>';
    }
    else if (input.includes("procdot")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#procdot" target="_blank">Cyber Defence (Blue Team) - &quot;procdot&quot;</a></pre>';
    }
    else if (input.includes("processes")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_processes" target="_blank">Cheat Sheets - &quot;Windows Processes&quot;</a></pre>';
    }
    else if (input.includes("protonmail")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#protonmail" target="_blank">Threat Intelligence - &quot;Protonmail&quot;</a></pre>';
    }
    else if (input.includes("proxy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#web_proxy_event_analysis" target="_blank">Cheat Sheets - &quot;Web Proxy Event Analysis&quot;</a></pre>';
    }
    else if (input.includes("publicwww")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#publicwww" target="_blank">Threat Intelligence - &quot;PublicWWW&quot;</a></pre>';
    }
    else if (input.includes("pulsedive")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#pulsedive" target="_blank">Threat Intelligence - &quot;Pulsedive&quot;</a></pre>';
    }
    else if (input.includes("radare2")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#radare2" target="_blank">Cyber Defence (Blue Team) - &quot;radare2&quot;</a></pre>';
    }
    else if (input.includes("range") || input.includes("rangeforce")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#rangeforce" target="_blank">Threat Intelligence - &quot;Rangeforce&quot;</a></pre>';
    }
    else if (input.includes("ransom") || input.includes("ransomware")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#no_more_ransom" target="_blank">Frameworks &amp; Projects - &quot;No More Ransom&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_risk_management" target="_blank">Publications - &quot;Ransomware Risk Management&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Publications - &quot;Growing Threat of Human Operated Ransomware&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_response" target="_blank">Publications - &quot;Ransomware Response&quot;</a></pre>';
    }
    else if (input.includes("rebels")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_rebels_want" target="_blank">Media &amp; Socials - &quot;What Rebels Want&quot;</a></pre>';
    }
    else if (input.includes("redhunt")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#redhunt_os" target="_blank">Cyber Defence (Blue Team) - &quot;Redhunt OS&quot;</a></pre>';
    }
    else if (input.includes("redline")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#redline" target="_blank">Cyber Defence (Blue Team) - &quot;Redline&quot;</a></pre>';
    }
    else if (input.includes("regex") || input.includes("regular") || input.includes("expression") || input.includes("regular expression")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hex_regex" target="_blank">Cheat Sheets - &quot;HEX/regex&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#regex" target="_blank">Cheat Sheets - &quot;regex&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_regex" target="_blank">Cyber Defence (Blue Team) - &quot;HEX/regex&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex" target="_blank">Cyber Defence (Blue Team) - &quot;regex&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex101" target="_blank">Cyber Defence (Blue Team) - &quot;regex101&quot;</a></pre>';
    }
    else if (input.includes("regex101") || input.includes("101")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex101" target="_blank">Cyber Defence (Blue Team) - &quot;regex101&quot;</a></pre>';
    }
    else if (input.includes("registry")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#registry_viewer" target="_blank">Cyber Defence (Blue Team) - &quot;Registry Viewer&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regripper" target="_blank">Cyber Defence (Blue Team) - &quot;regripper&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regshot" target="_blank">Cyber Defence (Blue Team) - &quot;Regshot&quot;</a></pre>';
    }
    else if (input.includes("regripper")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regripper" target="_blank">Cyber Defence (Blue Team) - &quot;regripper&quot;</a></pre>';
    }
    else if (input.includes("regshot")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regshot" target="_blank">Cyber Defence (Blue Team) - &quot;Regshot&quot;</a></pre>';
    }
    else if (input.includes("remnux")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">Cheat Sheets - &quot;REMnux&quot;</a></pre>';
    }
    else if (input.includes("remoting") || input.includes("wmi remoting")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#wmi_remoting" target="_blank">Media &amp; Socials - &quot;WMI Remoting&quot;</a></pre>';
    }
    else if (input.includes("reply") || input.includes("spam")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#when_you_reply_to_spam" target="_blank">Media &amp; Socials - &quot;When you Reply to Spam&quot;</a></pre>';
    }
    else if (input.includes("responds") || input.includes("snowdon")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_responds_to_snowdon" target="_blank">Media &amp; Socials - &quot;NSA Responds to Snowdon&quot;</a></pre>';
    }
    else if (input.includes("reverse") || input.includes("engineering") || input.includes("reverse engineering")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Cheat Sheets - &quot;Reverse Engineering&quot;</a></pre>';
    }
    else if (input.includes("riskiq")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#riskiq" target="_blank">Threat Intelligence - &quot;RiskIQ&quot;</a></pre>';
    }
    else if (input.includes("rita")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#rita" target="_blank">Cheat Sheets - &quot;RITA&quot;</a></pre>';
    }
    else if (input.includes("roadmap")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#training_roadmap" target="_blank">Posters - &quot;Training Roadmap&quot;</a></pre>';
    }
    else if (input.includes("root")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#root_me" target="_blank">Training, CTFs &amp; Challenges - &quot;Root Me&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hacking_exposed_malware_and_rootkits" target="_blank">Publications - &quot;Hacking Exposed Malware and Rootkits&quot;</a></pre>';
    }
    else if (input.includes("roundup")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#red_team_tool_roundup" target="_blank">Offensive Cyber (Red Team) - &quot;Red Team Tool Roundup&quot;</a></pre>';
    }
    else if (input.includes("rtfdump")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#rtfdump" target="_blank">Cyber Defence (Blue Team) - &quot;rtfdump&quot;</a></pre>';
    }
    else if (input.includes("run") || input.includes("anyrun") || input.includes("any run")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#any_run" target="_blank">Cyber Defence (Blue Team) - &quot;Any Run&quot;</a></pre>';
    }
    else if (input.includes("russia") || input.includes("us election")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">Media &amp; Socials - &quot;How Russia Hacked the US Election&quot;</a></pre>';
    }
    else if (input.includes("sample")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sample_pen_test_report" target="_blank">Offensive Cyber (Red Team) - &quot;Sample Pen Test Report&quot;</a></pre>';
    }
    else if (input.includes("sandworm")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#sandworm" target="_blank">Publications - &quot;Sandworm&quot;</a></pre>';
    }
    else if (input.includes("sans") || input.includes("institute")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#sans_institute" target="_blank">Threat Intelligence - &quot;SANS Institute&quot;</a></pre>';
    }
    else if (input.includes("scanner") || input.includes("scanners")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Offensive Cyber (Red Team) - &quot;Angry IP Scanner&quot;</a></pre>';
    }
    else if (input.includes("scapy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#scapy" target="_blank">Cheat Sheets - &quot;Scapy&quot;</a></pre>';
    }
    else if (input.includes("schneier") | input.includes("bruce") || input.includes("bruce schneier")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#schneier_on_security" target="_blank">Publications - &quot;Schneier on Security&quot;</a></pre>';
    }
    else if (input.includes("scylla")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#scylla" target="_blank">Cyber Defence (Blue Team) - &quot;Scylla&quot;</a></pre>';
    }
    else if (input.includes("seatbelt")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#seatbelt" target="_blank">Cyber Defence (Blue Team) - &quot;Seatbelt&quot;</a></pre>';
    }
    else if (input.includes("secjuice")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#secjuice" target="_blank">Publications - &quot;Secjuice&quot;</a></pre>';
    }
    else if (input.includes("seclists")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#seclists" target="_blank">Offensive Cyber (Red Team) - &quot;Seclists&quot;</a></pre>';
    }
    else if (input.includes("secure")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_devops" target="_blank">Posters - &quot;Secure Devops&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_web_app_testing" target="_blank">Posters - &quot;Secure Web App Testing&quot;</a></pre>';
    }
    else if (input.includes("security")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#cloud_security_devops" target="_blank">Cheat Sheets - &quot;Cloud Security Devops&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#security_architecture" target="_blank">Cheat Sheets - &quot;Security Architecture&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#securityzines" target="_blank">Posters - &quot;Securityzines&quot;</a></pre>';
    }
    else if (input.includes("securityzines")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#securityzines" target="_blank">Posters - &quot;Securityzines&quot;</a></pre>';
    }
    else if (input.includes("sentinel")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sentinel_att_ck" target="_blank">Cyber Defence (Blue Team) - &quot;Sentinel ATT&CK&quot;</a></pre>';
    }
    else if (input.includes("sharphound")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sharphound" target="_blank">Cheat Sheets - &quot;Sharphound&quot;</a></pre>';
    }
    else if (input.includes("shehackspurple")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#shehackspurple" target="_blank">Media &amp; Socials - &quot;Shehackspurple&quot;</a></pre>';
    }
    else if (input.includes("shellter")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#shellter" target="_blank">Offensive Cyber (Red Team) - &quot;Shellter&quot;</a></pre>';
    }
    else if (input.includes("sherlock")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#sherlock" target="_blank">Threat Intelligence - &quot;Sherlock&quot;</a></pre>';
    }
    else if (input.includes("shimcacheparser")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#shimcacheparser" target="_blank">Cyber Defence (Blue Team) - &quot;ShimcacheParser&quot;</a></pre>';
    }
    else if (input.includes("shodan")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#shodan_dorks" target="_blank">Cheat Sheets - &quot;Shodan Dorks&quot;</a></pre>';
    }
    else if (input.includes("force")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#powershell_light_side_of_the_force" target="_blank">Publications - &quot;Powershell Light Side of the Force&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#rangeforce" target="_blank">Threat Intelligence - &quot;Rangeforce&quot;</a></pre>';
    }
    else if (input.includes("the force") || input.includes("side")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#powershell_light_side_of_the_force" target="_blank">Publications - &quot;Powershell Light Side of the Force&quot;</a></pre>';
    }
    else if (input.includes("sift")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sift" target="_blank">Cheat Sheets - &quot;SIFT&quot;</a></pre>';
    }
    else if (input.includes("sigma")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma" target="_blank">Cyber Defence (Blue Team) - &quot;SIGMA&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma2splunkalert" target="_blank">Cyber Defence (Blue Team) - &quot;Sigma2SplunkAlert&quot;</a></pre>';
    }
    else if (input.includes("signatures")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#file_signatures" target="_blank">Cyber Defence (Blue Team) - &quot;File Signatures&quot;</a></pre>';
    }
    else if (input.includes("silk")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#silk" target="_blank">Cyber Defence (Blue Team) - &quot;SILK&quot;</a></pre>';
    }
    else if (input.includes("skoudis") || input.includes("ed") || input.includes("ed skoudis")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#ed_skoudis" target="_blank">Media &amp; Socials - &quot;Ed Skoudis&quot;</a></pre>';
    }
    else if (input.includes("skyark")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#skyark" target="_blank">Cyber Defence (Blue Team) - &quot;Skyark&quot;</a></pre>';
    }
    else if (input.includes("sleuth")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#the_sleuth_kit" target="_blank">Cyber Defence (Blue Team) - &quot;The Sleuth Kit&quot;</a></pre>';
    }
    else if (input.includes("slingshot")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#slingshot" target="_blank">Virtual Machines - &quot;Slingshot&quot;</a></pre>';
    }
    else if (input.includes("smartphone")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#smartphone_forensics" target="_blank">Posters - &quot;Smartphone Forensics&quot;</a></pre>';
    }
    else if (input.includes("smb")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#smb_access_from_linux" target="_blank">Cheat Sheets - &quot;SMB Access from Linux&quot;</a></pre>';
    }
    else if (input.includes("snaffler")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#snaffler" target="_blank">Offensive Cyber (Red Team) - &quot;Snaffler&quot;</a></pre>';
    }
    else if (input.includes("snort")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#snort" target="_blank">Cyber Defence (Blue Team) - &quot;Snort&quot;</a></pre>';
    }
    else if (input.includes("soar") || input.includes("shuffle")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#soar_with_shuffle" target="_blank">Media &amp; Socials - &quot;SOAR with Shuffle&quot;</a></pre>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">Threat Intelligence - &quot;SOC Investigation&quot;</a></pre>';
    }
    else if (input.includes("spectreops")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#spectreops" target="_blank">Training, CTFs &amp; Challenges - &quot;Spectreops&quot;</a></pre>';
    }
    else if (input.includes("spidermonkey")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#spidermonkey" target="_blank">Cyber Defence (Blue Team) - &quot;Spidermonkey&quot;</a></pre>';
    }
    else if (input.includes("spl")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#spl_splunk" target="_blank">Cheat Sheets - &quot;SPL Splunk&quot;</a></pre>';
    }
    else if (input.includes("splunk")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#spl_splunk" target="_blank">Cheat Sheets - &quot;SPL Splunk&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma2splunkalert" target="_blank">Cyber Defence (Blue Team) - &quot;Sigma2SplunkAlert&quot;</a></pre>';
    }
    else if (input.includes("spyse")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#spyse" target="_blank">Threat Intelligence - &quot;Spyse&quot;</a></pre>';
    }
    else if (input.includes("sqlite")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sqlite" target="_blank">Cheat Sheets - &quot;Sqlite&quot;</a></pre>';
    }
    else if (input.includes("ssdeep")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ssdeep" target="_blank">Cyber Defence (Blue Team) - &quot;SSDeep&quot;</a></pre>';
    }
    else if (input.includes("steghide")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#steghide" target="_blank">Cyber Defence (Blue Team) - &quot;Steghide&quot;</a></pre>';
    }
    else if (input.includes("strand")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#john_strand" target="_blank">Media &amp; Socials - &quot;John Strand&quot;</a></pre>';
    }
    else if (input.includes("studio")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">Cyber Defence (Blue Team) - &quot;pestudio&quot;</a></pre>';
    }
    else if (input.includes("subbrute")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#subbrute" target="_blank">Offensive Cyber (Red Team) - &quot;Subbrute&quot;</a></pre>';
    }
    else if (input.includes("subdomain") || input.includes("enumeration")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#subdomain_enumeration" target="_blank">Offensive Cyber (Red Team) - &quot;Subdomain Enumeration&quot;</a></pre>';
    }
    else if (input.includes("suite")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didierstevens_suite" target="_blank">Cyber Defence (Blue Team) - &quot;Didierstevens Suite&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nirsoft_suite" target="_blank">Cyber Defence (Blue Team) - &quot;Nirsoft Suite&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#burp_suite" target="_blank">Cheat Sheets - &quot;Burp Suite&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sysinternals_suite" target="_blank">Cyber Defence (Blue Team) - &quot;Sysinternals Suite&quot;</a></pre>';
    }
    else if (input.includes("sumrecon")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sumrecon" target="_blank">Offensive Cyber (Red Team) - &quot;Sumrecon&quot;</a></pre>';
    }
    else if (input.includes("supermem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#supermem" target="_blank">Cyber Defence (Blue Team) - &quot;Supermem&quot;</a></pre>';
    }
    else if (input.includes("suricata")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#suricata" target="_blank">Cyber Defence (Blue Team) - &quot;Suricata&quot;</a></pre>';
    }
    else if (input.includes("swiss")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#swiss_hacking_challenge" target="_blank">Cyber Defence (Blue Team) - &quot;Swiss Hacking Challenge&quot;</a></pre>';
    }
    else if (input.includes("synapsint")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#synapsint" target="_blank">Threat Intelligence - &quot;Synapsint&quot;</a></pre>';
    }
    else if (input.includes("sysinternals")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sysinternals_suite" target="_blank">Cyber Defence (Blue Team) - &quot;Sysinternals Suite&quot;</a></pre>';
    }
    else if (input.includes("sysmon")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sysmon" target="_blank">Cheat Sheets - &quot;Sysmon&quot;</a></pre>';
    }
    else if (input.includes("tails")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#tails" target="_blank">Threat Intelligence - &quot;Tails&quot;</a></pre>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tcp_ip_tcpdump" target="_blank">Cheat Sheets - &quot;TCP/IP Tcpdump&quot;</a></pre>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tcpdump" target="_blank">Cheat Sheets - &quot;Tcpdump&quot;</a></pre>';
    }
    else if (input.includes("technology")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#basis_technology" target="_blank">Cyber Defence (Blue Team) - &quot;Basis Technology&quot;</a></pre>';
    }
    else if (input.includes("theharvester")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#theharvester" target="_blank">Offensive Cyber (Red Team) - &quot;TheHarvester&quot;</a></pre>';
    }
    else if (input.includes("thehive")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#thehive" target="_blank">Cyber Defence (Blue Team) - &quot;TheHive&quot;</a></pre>';
    }
    else if (input.includes("thephish")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#thephish" target="_blank">Offensive Cyber (Red Team) - &quot;ThePhish&quot;</a></pre>';
    }
    else if (input.includes("thezoo")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#thezoo" target="_blank">Cyber Defence (Blue Team) - &quot;TheZoo&quot;</a></pre>';
    }
    else if (input.includes("threat") || input.includes("threats")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">Threat Intelligence - &quot;ThreatCrowd&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - &quot;Threatfeeds IO&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Frameworks &amp; Projects - &quot;Threathunting Project&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threat Intelligence - &quot;Threatpursuit&quot;</a></pre>';
    }
    else if (input.includes("threatcrowd")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">Threat Intelligence - &quot;ThreatCrowd&quot;</a></pre>';
    }
    else if (input.includes("threatfeeds")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - &quot;Threatfeeds IO&quot;</a></pre>';
    }
    else if (input.includes("threathunting")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Frameworks &amp; Projects - &quot;Threathunting Project&quot;</a></pre>';
    }
    else if (input.includes("threatpursuit")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threat Intelligence - &quot;Threatpursuit&quot;</a></pre>';
    }
    else if (input.includes("online") || input.includes("three") || input.includes("types")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#three_types_of_online_attacks" target="_blank">Media &amp; Socials - &quot;Three Types of Online Attacks&quot;</a></pre>';
    }
    else if (input.includes("timesketch")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#timesketch" target="_blank">Cyber Defence (Blue Team) - &quot;Timesketch&quot;</a></pre>';
    }
    else if (input.includes("tls") || input.includes("decrypt") || input.includes("decrypting") | input.includes("streams") || input.includes("decrypting tls") || input.includes("tls streams")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#decrypt_tls_streams" target="_blank">Publications - &quot;Decrypt TLS Streams&quot;</a></pre>';
    }
    else if (input.includes("tools") || input.includes("tool")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Cheat Sheets - &quot;Eric Zimmerman Tools&quot;</a></pre><br></><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eztools_kape" target="_blank">Media &amp; Socials - &quot;EZtools Kape&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#oletools" target="_blank">Cyber Defence (Blue Team) - &quot;Oletools&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">Cyber Defence (Blue Team) - &quot;petools&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#privacytools" target="_blank">Threat Intelligence - &quot;PrivacyTools&quot;</a></pre>';
    }
    else if (input.includes("trace") || input.includes("labs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#trace_labs" target="_blank">Threat Intelligence - &quot;Trace Labs&quot;</a></pre>';
    }
    else if (input.includes("track") || input.includes("tracker")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#feodo_tracker" target="_blank">Threat Intelligence - &quot;Feodo Tracker&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tracking_our_online_trackers" target="_blank">Media &amp; Socials - &quot;Tracking our Online Trackers&quot;</a></pre>';
    }
    else if (input.includes("training") || input.includes("train")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#training" target="_blank">Threat Intelligence - &quot;Training&quot;</a></pre>';
    }
    else if (input.includes("tree")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_tree" target="_blank">Cyber Defence (Blue Team) - &quot;pe-tree&quot;</a></pre>';
    }
    else if (input.includes("triage") || input.includes("cyber triage") || input.includes("cybertriage")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#cyber_triage" target="_blank">Publications - &quot;Cyber Triage&quot;</a></pre>';
    }
    else if (input.includes("trid")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#trid" target="_blank">Cyber Defence (Blue Team) - &quot;TrID&quot;</a></pre>';
    }
    else if (input.includes("trilium")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#trilium" target="_blank">Offensive Cyber (Red Team) - &quot;Trilium&quot;</a></pre>';
    }
    else if (input.includes("tryhackme")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tryhackme" target="_blank">Media &amp; Socials - &quot;TryHackMe&quot;</a></pre>';
    }
    else if (input.includes("tsurugi")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#tsurugi" target="_blank">Cyber Defence (Blue Team) - &quot;Tsurugi&quot;</a></pre>';
    }
    else if (input.includes("tweetscraper")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#tweetscraper" target="_blank">Threat Intelligence - &quot;TweetScraper&quot;</a></pre>';
    }
    else if (input.includes("tzworks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tzworks" target="_blank">Cheat Sheets - &quot;TZworks&quot;</a></pre>';
    }
    else if (input.includes("udemy")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#udemy" target="_blank">Threat Intelligence - &quot;Udemy&quot;</a></pre>';
    }
    else if (input.includes("uniq") || input.includes("sort")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sort_uniq" target="_blank">Cheat Sheets - &quot;Sort/Uniq&quot;</a></pre>';
    }
    else if (input.includes("unit")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unit42_playbook_viewer" target="_blank">Frameworks &amp; Projects - &quot;Unit42 Playbook Viewer&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_china_s_cyber_espionage_units" target="_blank">Publications - &quot;APT1: Exposing One of China\'s Cyber Espionage Units&quot;</a></pre>';
    }
    else if (input.includes("unit42") || input.includes("playbook") || input.includes("viewer") || input.includes("playbook viewer")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unit42_playbook_viewer" target="_blank">Frameworks &amp; Projects - &quot;Unit42 Playbook Viewer&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#unit42_playbook_viewer" target="_blank">Cyber Defence (Blue Team) - &quot;Unit42 Playbook Viewer&quot;</a></pre>';
    }
    else if (input.includes("unprotect")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unprotect" target="_blank">Frameworks &amp; Projects - &quot;Unprotect&quot;</a></pre>';
    }
    else if (input.includes("url")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlhaus" target="_blank">Threat Intelligence - &quot;urlhaus&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Threat Intelligence - &quot;urlscan&quot;</a></pre>';
    }
    else if (input.includes("urlhaus")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlhaus" target="_blank">Threat Intelligence - &quot;Urlhaus&quot;</a></pre>';
    }
    else if (input.includes("urlscan")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Threat Intelligence - &quot;Urlscan&quot;</a></pre>';
    }
    else if (input.includes("velociraptor")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#velociraptor" target="_blank">Cyber Defence (Blue Team) - &quot;Velociraptor&quot;</a></pre>';
    }
    else if (input.includes("via")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Media &amp; Socials - &quot;Threat Hunting via Sysmon&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - &quot;Threat Hunting via DNS&quot;</a></pre>';
    }
    else if (input.includes("vim")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#vim" target="_blank">Cheat Sheets - &quot;Vim&quot;</a></pre>';
    }
    else if (input.includes("viper")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#viper" target="_blank">Cyber Defence (Blue Team) - &quot;Viper&quot;</a></pre>';
    }
    else if (input.includes("virus")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Media &amp; Socials - &quot;Fighting Viruses Defending the Net&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#virussign" target="_blank">Cyber Defence (Blue Team) - &quot;virussign&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#virustotal" target="_blank">Threat Intelligence - &quot;VirusTotal&quot;</a></pre>';
    }
    else if (input.includes("virussign")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#virussign" target="_blank">Cyber Defence (Blue Team) - &quot;virussign&quot;</a></pre>';
    }
    else if (input.includes("virustotal")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#virustotal" target="_blank">Threat Intelligence - &quot;VirusTotal&quot;</a></pre>';
    }
    else if (input.includes("volatility")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Cyber Defence (Blue Team) - &quot;Volatility&quot;</a></pre>';
    }
    else if (input.includes("vscode")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#vscode" target="_blank">Threat Intelligence - &quot;vscode&quot;</a></pre>';
    }
    else if (input.includes("vt") || input.includes("file") || input.includes("modifiers")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#vt_file_search_modifiers" target="_blank">Cheat Sheets - &quot;VT File Search Modifiers&quot;</a></pre>';
    }
    else if (input.includes("vulnhub")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/training.html#vulnhub" target="_blank">Training, CTFs &amp; Challenges - &quot;Vulnhub&quot;</a></pre>';
    }
    else if (input.includes("weaponizing") || input.includes("weapon") || input.includes("deep web") || input.includes("dark web")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - &quot;Weaponizing the Deep Web&quot;</a></pre>';
    }
    else if (input.includes("wela")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wela" target="_blank">Cyber Defence (Blue Team) - &quot;WELA&quot;</a></pre>';
    }
    else if (input.includes("what2log")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#what2log" target="_blank">Frameworks &amp; Projects - &quot;What2Log&quot;</a></pre>';
    }
    else if (input.includes("whatsmyname")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#whatsmyname" target="_blank">Threat Intelligence - &quot;WhatsMyName&quot;</a></pre>';
    }
    else if (input.includes("wigle")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#wigle" target="_blank">Threat Intelligence - &quot;Wigle&quot;</a></pre>';
    }
    else if (input.includes("wiki")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#wiki" target="_blank">Threat Intelligence - &quot;Wiki&quot;</a></pre>';
    }
    else if (input.includes("win")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_forensics" target="_blank">Cyber Defence (Blue Team) - &quot;Windows Forensics&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_third_party_apps" target="_blank">Cyber Defence (Blue Team) - &quot;Windows Third Party Apps&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_cred_attacks_mitigations" target="_blank">Cyber Defence (Blue Team) - &quot;Windows Cred. Attacks Mitigations&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Cyber Defence (Blue Team) - &quot;Winpmem&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Cyber Defence (Blue Team) - &quot;Windbg&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_cli" target="_blank">Cyber Defence (Blue Team) - &quot;Windows CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_linux_cli" target="_blank">Cyber Defence (Blue Team) - &quot;Windows Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows" target="_blank">Cyber Defence (Blue Team) - &quot;Windows&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_2k" target="_blank">Cyber Defence (Blue Team) - &quot;Windows 2k&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_processes" target="_blank">Cyber Defence (Blue Team) - &quot;Windows Processes&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheatsheets - &quot;Windows & Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Cheatsheets = "Windows CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#powershell_wmic" target="_blank">Cheatsheets - &quot;PowerShell & WMIC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ids" target="_blank">Cheatsheets - &quot;Intrusion Detection&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - &quot;DFIR & Threat Hunting&quot;</a></pre>';
    }
    else if (input.includes("windbg")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Cyber Defence (Blue Team) - &quot;Windbg&quot;</a></pre>';
    }
    else if (input.includes("windows")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheat Sheets - &quot;Windows Linux CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Cheat Sheets - &quot;Windows CLI&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows" target="_blank">Cheat Sheets - &quot;Windows&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_2k" target="_blank">Cheat Sheets - &quot;Windows 2k&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_processes" target="_blank">Cheat Sheets - &quot;Windows Processes&quot;</a></pre>';
    }
    else if (input.includes("winpmem")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Cyber Defence (Blue Team) - &quot;Winpmem&quot;</a></pre>';
    }
    else if (input.includes("wireshark")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wireshark" target="_blank">Cyber Defence (Blue Team) - &quot;Wireshark&quot;</a></pre>';
    }
    else if (input.includes("wondersmith_rae")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#wondersmith_rae" target="_blank">Publications - &quot;Wondersmith Rae&quot;</a></pre>';
    }
    else if (input.includes("wql")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wql_sql_for_wmi)" target="_blank">Cyber Defence (Blue Team) - &quot;WQL/SQL for WMI)&quot;</a></pre>';
    }
    else if (input.includes("writing")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#writing_tips" target="_blank">Cheat Sheets - &quot;Writing Tips&quot;</a></pre>';
    }
    else if (input.includes("wscript")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wscript" target="_blank">Cyber Defence (Blue Team) - &quot;Wscript&quot;</a></pre>';
    }
    else if (input.includes("x64dbg")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#x64dbg" target="_blank">Cyber Defence (Blue Team) - &quot;X64dbg&quot;</a></pre>';
    }
    else if (input.includes("xiao")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xiao_steganography" target="_blank">Cyber Defence (Blue Team) - &quot;Xiao Steganography&quot;</a></pre>';
    }
    else if (input.includes("xss")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_xss_rat" target="_blank">Media &amp; Socials - &quot;The XSS Rat&quot;</a></pre>';
    }
    else if (input.includes("xxd")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xxd" target="_blank">Cyber Defence (Blue Team) - &quot;XXD&quot;</a></pre>';
    }
    else if (input.includes("yara")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#yara" target="_blank">Cyber Defence (Blue Team) - &quot;Yara&quot;</a></pre>';
    }
    else if (input.includes("yeti")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#yeti" target="_blank">Threat Intelligence - &quot;Yeti&quot;</a></pre>';
    }
    else if (input.includes("yomi")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#yomi" target="_blank">Cyber Defence (Blue Team) - &quot;Yomi&quot;</a></pre>';
    }
    else if (input.includes("yuki")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#yuki_chan" target="_blank">Offensive Cyber (Red Team) - &quot;Yuki Chan&quot;</a></pre>';
    }
    else if (input.includes("zero") || input.includes("zeroday") || input.includes("zero day") || input.includes("0day") || input.includes("0 day")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#countdown_to_zero_day" target="_blank">Publications - &quot;Countdown to Zero Day&quot;</a></pre>';
    }
    else if (input.includes("zoomeye")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#zoomeye" target="_blank">Threat Intelligence - &quot;Zoomeye&quot;</a></pre>';
    }
    else if (input.includes("api")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#malapi" target="_blank">Frameworks &amp; Projects - &quot;Malapi&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#api_monitor" target="_blank">Cyber Defence (Blue Team) - &quot;API Monitor&quot;</a></pre>';
    }
    else if (input.includes("assessment")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#security_assessment_findings_report" target="_blank">Publications - &quot;Security Assessment Findings Report&quot;</a></pre>';
    }
    else if (input.includes("dark")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#darknet_diaries" target="_blank">Media &amp; Socials - &quot;Darknet Diaries&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - &quot;Weaponizing the Deep Web&quot;</a></pre>';
    }
    else if (input.includes("dbg")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ollydbg" target="_blank">Cyber Defence (Blue Team) - &quot;OllyDBG&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Cyber Defence (Blue Team) - &quot;Windbg&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#x64dbg" target="_blank">Cyber Defence (Blue Team) - &quot;X64dbg&quot;</a></pre>';
    }
    else if (input.includes("dns")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dnstwist" target="_blank">Threat Intelligence - &quot;DNStwist&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dns_dumpster" target="_blank">Threat Intelligence - &quot;DNS Dumpster&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fakedns" target="_blank">Cyber Defence (Blue Team) - &quot;FakeDNS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - &quot;Threat Hunting via DNS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Offensive Cyber (Red Team) - &quot;Massdns&quot;</a></pre>';
    }
    else if (input.includes("hound")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#bloodhound" target="_blank">Cheat Sheets - &quot;Bloodhound&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sharphound" target="_blank">Cheat Sheets - &quot;Sharphound&quot;</a></pre>';
    }
    else if (input.includes("mail")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#protonmail" target="_blank">Threat Intelligence - &quot;Protonmail&quot;</a></pre>';
    }
    else if (input.includes("sandbox") || input.includes("sandboxes") || input.includes("sand box") || input.includes("sand boxes")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#joe_sandbox" target="_blank">Cyber Defence (Blue Team) - &quot;Joe Sandbox&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#any_run" target="_blank">Cyber Defence (Blue Team) - &quot;Any Run&quot;</a></pre>';
    }
    else if (input.includes("scan") || input.includes("scanner") || input.includes("scanners")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Offensive Cyber (Red Team) - &quot;Angry IP Scanner&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Offensive Cyber (Red Team) - &quot;Masscan&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Threat Intelligence - &quot;Urlscan&quot;</a></pre>';
    }
    else if (input.includes("shark")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bruteshark" target="_blank">Cyber Defence (Blue Team) - &quot;Bruteshark&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wireshark" target="_blank">Cyber Defence (Blue Team) - &quot;Wireshark&quot;</a></pre>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#building_a_better_soc" target="_blank">Publications - &quot;Building a Better SOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">Cyber Defence (Blue Team) - &quot;SOC Core Skills&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - &quot;Ten Strategies of a World Class CSOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">Threat Intelligence - &quot;SOC Investigation&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#open_soc" target="_blank">Media &amp; Socials - &quot;Open SOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#open_soc" target="_blank">Cyber Defence (Blue Team) - &quot;Open SOC&quot;</a></pre>';
    }
    else if (input.includes("testing")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pen_testing_blueprints" target="_blank">Posters - Pen Testing Blueprints</a><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">Publications - &quot;OWASP Testing Guide&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#penetration_testing" target="_blank">Posters - &quot;Penetration Testing&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_web_app_testing" target="_blank">Posters - &quot;Secure Web App Testing&quot;</a></pre>';
    }
    else if (input.includes("threat")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - &quot;How Cyberattacks Threaten Real World&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Frameworks &amp; Projects - &quot;Threathunting Project&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - &quot;DFIR & Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">Cyber Defence (Blue Team) - &quot;ACM Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Publications - &quot;Demystifying Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - &quot;Kansa for Enterprise Scale Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Media &amp; Socials - &quot;Threat Hunting via Sysmon&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - &quot;Threat Hunting via DNS&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - &quot;DFIR & Threat Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Publications - &quot;Growing Threat of Human Operated Ransomware&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_response" target="_blank">Publications - &quot;Ransomware Response&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">Threat Intelligence - &quot;ThreatCrowd&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - &quot;Threatfeeds IO&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threat Intelligence - &quot;Threatpursuit&quot;</a></pre>';
    }
    else if (input.includes("world")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">Media &amp; Socials - &quot;NSA Betrayed the World\'s Trust&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - &quot;Ten Strategies of a World Class CSOC&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - &quot;How Cyberattacks Threaten Real World&quot;</a></pre>';
    }
    else if (input.includes("tor")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#megator" target="_blank">Threat Intelligence - &quot;Megator&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - &quot;Weaponizing the Deep Web&quot;</a></pre>';
    }
    else if (input.includes("posters")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#posters" target="_blank">Threat Intelligence - &quot;Posters&quot;</a></pre>';
    }
    else if (input.includes("slide") || input.includes("slides") || input.includes("slide deck") || input.includes("slide decks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#slides" target="_blank">Publications - &quot;Slides&quot;</a></pre>';
    }
    else if (input.includes("blogs")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#blogs" target="_blank">Publications - &quot;Blogs&quot;</a></pre>';
    }
    else if (input.includes("guide") || input.includes("guides")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#aws_ir_guide" target="_blank">Publications - &quot;AWS IR Guide&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">Publications - &quot;OWASP Testing Guide&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">Publications - &quot;IR Field Guide&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#guides" target="_blank">Publications - &quot;Guides&quot;</a></pre>';
    }
    else if (input.includes("templates") || input.includes("template")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#templates" target="_blank">Publications - &quot;Templates&quot;</a></pre>';
    }
    else if (input.includes("keynote") || input.includes("keynotes") || input.includes("speech") || input.includes("speeches")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#keynotes" target="_blank">Media &amp; Socials - &quot;Keynotes&quot;</a></pre>';
    }
    else if (input.includes("steganography")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#steghide" target="_blank">Cyber Defence (Blue Team) - &quot;Steghide&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xiao_steganography" target="_blank">Cyber Defence (Blue Team) - &quot;Xiao Steganography&quot;</a></pre>';
    }
    else if (input.includes("white papers") || input.includes("papers") || input.includes("reports") || input.includes("report")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#reps" target="_blank">Publications - &quot;Reports&quot;</a></pre>';
    }
    else if (input.includes("book") || input.includes("books")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#books" target="_blank">Publications - &quot;Books&quot;</a></pre>';
    }
    else if (input.includes("documentation") || input.includes("documents")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#techdocs" target="_blank">Publications - &quot;Documentation&quot;</a></pre>';
    }
    else if (input.includes("tutorials") || input.includes("tutorial")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#guides" target="_blank">Publications - &quot;Guides&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#vids" target="_blank">Media &amp; Socials - &quot;Videos &amp; Tutorials&quot;</a></pre>';
    }
    else if (input.includes("tooling")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#tools" target="_blank">Cyber Defence (Blue Team) - &quot;Tooling&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#tools" target="_blank">Offensive Cyber (Red Team) - &quot;Tooling&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#tools" target="_blank">Threat Intelligence - &quot;Tooling&quot;</a></pre>';
    }
    else if (input.includes("frameworks")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#fw" target="_blank">Frameworks &amp; Projects - &quot;Frameworks&quot;</a></pre>';
    }
    else if (input.includes("ctf") || input.includes("challenges")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ctfs" target="_blank">Cyber Defence (Blue Team) - &quot;CTFs &amp; Ranges&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ctfs" target="_blank">Offensive Cyber (Red Team) - &quot;CTFs &amp; Ranges&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#ctfs" target="_blank">Threat Intelligence - &quot;CTFs &amp; Ranges&quot;</a></pre>';
    }
    else if (input.includes("code") || input.includes("coding") || input.includes("scripting")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#code" target="_blank">Cyber Defence (Blue Team) - &quot;Coding Environments&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#code" target="_blank">Offensive Cyber (Red Team) - &quot;Coding Environments&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/int.html#code" target="_blank">Threat Intelligence - &quot;Coding Environments&quot;</a></pre>';
    }
    else if (input.includes("management")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#mgmt" target="_blank">Posters - Management</a><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_risk_management" target="_blank">Publications - &quot;Ransomware Risk Management&quot;</a></pre>';
    }
    else if (input.includes("video" || input.includes("videos"))) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#vids" target="_blank">Media &amp; Socials - &quot;Videos &amp; Tutorials&quot;</a></pre>';
    }
    else if (input.includes("channel") || input.includes("channels") || input.includes("playlist") || input.includes("playlists")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#lists" target="_blank">Media &amp; Socials - &quot;Channels &amp; Playlists&quot;</a></pre>';
    }
    else if (input.includes("webcast") || input.includes("webcasts") || input.includes("podcast") || input.includes("podcasts")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#casts" target="_blank">Media &amp; Socials - &quot;Webcasts &amp; Podcasts&quot;</a></pre>';
    }
    else if (input.includes("image") || input.includes("images") || input.includes("diagram") || input.includes("diagrams") || input.includes("picture") || input.includes("pictures")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#imgs" target="_blank">Media &amp; Socials - &quot;Images &amp; Diagrams&quot;</a></pre>';
    }
    else if (input.includes("disassembler") || input.includes("disassemblers") || input.includes("debugger") || input.includes("debuggers")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#static" target="_blank">Cyber Defence (Blue Team) - &quot;Disassemblers/Debuggers&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#static" target="_blank">Tooling - &quot;Disassemblers/Debuggers&quot;</a></pre>';
    }
    else if (input.includes("repository") || input.includes("repositories") || input.includes("malware repository") || input.includes("malware repositories")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_repos" target="_blank">Cyber Defence (Blue Team) - &quot;Malware Repositories&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#malware_repos" target="_blank">Tooling - &quot;Malware Repositories&quot;</a></pre>';
    }
    else if (input.includes("note taking") || input.includes("check lists") || input.includes("check list") || input.includes("checklists") || input.includes("checklist") || input.includes("text editor") || input.includes("text editors")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#notes" target="_blank">Cyber Defence (Blue Team) - &quot;Note Taking &amp; Checklists&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#notes" target="_blank">Offensive Cyber (Red Team) - &quot;Note Taking &amp; Checklists&quot;</a></pre>';
    }
    else if (input.includes("network enumeration")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#enum" target="_blank">Offensive Cyber (Red Team) - &quot;Network Enumeration&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#enum" target="_blank">Cheatsheets - &quot;Network Interception/Enumeration&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#enum" target="_blank">Tooling - &quot;Network Emuneration&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#subdomain_enumeration" target="_blank">Tooling - &quot;Subdomain Enumeration&quot;</a></pre>';
    }
    else if (input.includes("exploitation")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#post" target="_blank">Offensive Cyber (Red Team) - &quot;Post Exploitation&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#post" target="_blank">Cheatsheets - &quot;Post Exploitation&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#post" target="_blank">Tooling - &quot;Post Exploitation&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#post_exploitation_hunting" target="_blank">Cyber Defence (Blue Team - &quot;Post Exploitation Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/media.html#post_exploitation_hunting" target="_blank">Media &amp; Socials - &quot;Post Exploitation Hunting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hacking_the_art_of_exploitation" target="_blank">Publications - &quot;Hacking: The Art of Exploitation&quot;</a></pre>';
    }
    else if (input.includes("credential harvesting") || input.includes("cred harvesting")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#creds" target="_blank">Offensive Cyber (Red Team) - &quot;Credential Harvesting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#creds" target="_blank">Cheatsheets - &quot;Credential Harvesting&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#creds" target="_blank">Tooling - &quot;Credential Harvesting&quot;</a></pre>';
    }
    else if (input.includes("c2") || input.includes("cnc") || input.includes("command and control") || input.includes("command & control")) {
        result.innerHTML = '<pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/red.html#c2" target="_blank">Offensive Cyber (Red Team) - &quot;Command &amp; Control&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#c2" target="_blank">Cheatsheets - &quot;Command &amp; Control&quot;</a></pre><br>&nbsp;<br><pre class="tab3"><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#c2" target="_blank">Tooling - &quot;Command &amp; Control&quot;</a></pre>';
    }
    else {
        result.innerHTML = "";
    }
}