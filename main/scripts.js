//sidebar code
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
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - "Know Abnormal Find Evil"</a>';
    }
    else if (input.includes("abuse")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#abuse_ch" target="_blank">Tooling - "abuse.ch"</a>';
    }
    else if (input.includes("acm") || input.includes("counter measures") || input.includes("countermeasures") || input.includes("active counter measures") || input.includes("active countermeasures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">Cyber Defence (Blue Team) - "ACM Threat Hunting"</a>';
    }
    else if (input.includes("actions") || input.includes("artefacts") || input.includes("understanding")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#understanding_actions_and_artefacts" target="_blank">Publications - "Understanding Actions and Artefacts"</a>';
    }
    else if (input.includes("active")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#active_directory_security" target="_blank">Publications - "Active Directory Security"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - "ADHD"</a>';
    }
    else if (input.includes("active directory") || input.includes("ad")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#active_directory_security" target="_blank">Publications - "Active Directory Security"</a>';
    }
    else if (input.includes("mentor") || input.includes("cyber mentor") || input.includes("the cyber mentor") || input.includes("tcm") || input.includes("adams") || input.includes("heath") || input.includes("heath adams")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_cyber_mentor" target="_blank">Media &amp; Socials - "The Cyber Mentor"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tcm" target="_blank">Media &amp; Socials - "TCM"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#heath_adams" target="_blank">Media &amp; Socials - "Heath Adams"</a>';
    }
    else if (input.includes("adhd") || input.includes("active defence") || input.includes("active defense") || input.includes("harbinger") || input.includes("distribution")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - "ADHD"</a>';
    }
    else if (input.includes("ahmia")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#ahmia" target="_blank">Threat Intelligence - "ahmia"</a>';
    }
    else if (input.includes("alienvault") || input.includes("alien") || input.includes("vault")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#alienvault" target="_blank">Threat Intelligence - "Alienvault"</a>';
    }
    else if (input.includes("alissa torres") || input.includes("alissa") || input.includes("torres")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#alissa_torres" target="_blank">Media &amp; Socials - "Alissa Torres"</a>';
    }
    else if (input.includes("amass")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#amass" target="_blank">Offensive Cyber (Red Team) - "Amass"</a>';
    }
    else if (input.includes("analysis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#event_log_analysis" target="_blank">Cheat Sheets - "Event Log Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#lateral_movement_analysis" target="_blank">Cheat Sheets - "Lateral Movement Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#web_proxy_event_analysis" target="_blank">Cheat Sheets - "Web Proxy Event Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malware_analysis" target="_blank">Cheat Sheets - "Malware Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#anti_virus_event_analysis" target="_blank">Cheat Sheets - "Anti Virus Event Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">Publications - "PMAT Labs Walkthroughs"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">Cheat Sheets - "REMnux"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Cheat Sheets - "Reverse Engineering"</a>';
    }
    else if (input.includes("analytics") || input.includes("exploiting") || input.includes("ensnare") || input.includes("victims") || input.includes("exploiting analytics") || input.includes("ensnare victims")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#exploiting_web_analytics_to_ensnare_victims" target="_blank">Publications - "Exploiting Web Analytics to Ensnare Victims"</a>';
    }
    else if (input.includes("analyzemft")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#analyzemft" target="_blank">Cyber Defence (Blue Team) - "analyzemft"</a>';
    }
    else if (input.includes("anatomy") || input.includes("botnet") || input.includes("bot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#anatomy_of_botnet_attack" target="_blank">Media &amp; Socials - "Anatomy of Botnet Attack"</a>';
    }
    else if (input.includes("angry") || input.includes("angry ip") || input.includes("ip scanner") || input.includes("angry ip scanner")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Offensive Cyber (Red Team) - "Angry IP Scanner"</a>';
    }
    else if (input.includes("anonymize") || input.includes("whonix")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#anonymize_kali_with_whonix" target="_blank">Threat Intelligence - "Anonymize Kali with Whonix"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#whonix" target="_blank">Threat Intelligence - "Whonix"</a>';
    }
    else if (input.includes("antisyphon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#antisyphon" target="_blank">Threat Intelligence - "Antisyphon"</a>';
    }
    else if (input.includes("apps") || input.includes("third") || input.includes("party") || input.includes("parties") || input.includes("third party") || input.includes("third party apps") || input.includes("3rd") || input.includes("3rd party") || input.includes("3rd party apps")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#windows_third_party_apps" target="_blank">Posters - "Windows Third Party Apps"</a>';
    }
    else if (input.includes("apt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#apt_hunter" target="_blank">Cyber Defence (Blue Team) - "APT Hunter"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_china_s_cyber_espionage_units" target="_blank">Publications - "APT1: Exposing One of China\'s Cyber Espionage Units"</a>';
    }
    else if (input.includes("apt1") || input.includes("espionage") || input.includes("units") || input.includes("exposing") || input.includes("china")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_china_s_cyber_espionage_units" target="_blank">Publications - "APT1: Exposing One of China\'s Cyber Espionage Units"</a>';
    }
    else if (input.includes("architecture") || input.includes("architect")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#security_architecture" target="_blank">Cheat Sheets - "Security Architecture"</a>';
    }
    else if (input.includes("armstrong") || input.includes("steve") || input.includes("steve armstrong")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#steve_armstrong" target="_blank">Media &amp; Socials - "Steve Armstrong"</a>';
    }
    else if (input.includes("arsenal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">Tooling - "AWS Arsenal"</a>';
    }
    else if (input.includes("atomic")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#atomic_red_team" target="_blank">Projects - "Atomic Red Team"</a>';
    }
    else if (input.includes("attackdefence")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attackdefence" target="_blank">Cyber Defence (Blue Team) - "AttackDefence"</a>';
    }
    else if (input.includes("attacks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - "Common Attacks Defences"</a>';
    }
    else if (input.includes("avml")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#avml" target="_blank">Cyber Defence (Blue Team) - "AVML"</a>';
    }
    else if (input.includes("awesome")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#awesome-browser_exploit" target="_blank">Offensive Cyber (Red Team) - "Awesome-Browser Exploit"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_ctf" target="_blank">Awesome CTF</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_ir" target="_blank">Awesome IR</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_awesomeness" target="_blank">Awesome Awesomeness</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#awesome_event_ids" target="_blank">Awesome Event IDs</a>';
    }
    else if (input.includes("aws")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#aws" target="_blank">Cheat Sheets - "AWS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">Tooling - "AWS Arsenal"</a>';
    }
    else if (input.includes("azure")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#az_900_azure_fundamentals" target="_blank">Cyber Defence (Blue Team) - "AZ-900 Azure Fundamentals"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - "Azurehunter"</a>';
    }
    else if (input.includes("azurehunter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - "Azurehunter"</a>';
    }
    else if (input.includes("baggett") || input.includes("mark") || input.includes("mark baggett")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#mark_baggett" target="_blank">Media &amp; Socials - "Mark Baggett"</a>';
    }
    else if (input.includes("beautifier")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#beautifier" target="_blank">Cyber Defence (Blue Team) - "Beautifier"</a>';
    }
    else if (input.includes("beginner") || input.includes("begin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfir_beginner_to_expert" target="_blank">Cyber Defence (Blue Team) - "DFIR Beginner to Expert"</a>';
    }
    else if (input.includes("benchmarks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cis_benchmarks" target="_blank">Projects - "CIS Benchmarks"</a>';
    }
    else if (input.includes("betrayed") || input.includes("trust")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">Media &amp; Socials - "NSA Betrayed the World\'s Trust"</a>';
    }
    else if (input.includes("build") || input.includes("building")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#build_a_home_lab" target="_blank">Media &amp; Socials - "Build a Home Lab"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">Tooling - "HomeLabResources"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#building_a_malware_lab" target="_blank">Cyber Defence (Blue Team) - "building_a_malware_lab"</a>';
    }
    else if (input.includes("better")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#building_a_better_soc" target="_blank">Publications - "Building a Better SOC"</a>';
    }
    else if (input.includes("bhis") || input.includes("black hills") || input.includes("black hills information security")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">Media &amp; Socials - "BHIS (Webcast)"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">Media &amp; Socials - "BHIS (Discord)"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bhis" target="_blank">Media &amp; Socials - "BHIS (Twitter)"</a>';
    }
    else if (input.includes("binary")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#binary_ninja" target="_blank">Cyber Defence (Blue Team) - "Binary Ninja"</a>';
    }
    else if (input.includes("bless")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bless" target="_blank">Cyber Defence (Blue Team) - "Bless"</a>';
    }
    else if (input.includes("blogs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#blogs" target="_blank">Publications - "Blogs"</a>';
    }
    else if (input.includes("bloodhound")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#bloodhound" target="_blank">Cheat Sheets - "Bloodhound"</a>';
    }
    else if (input.includes("blueprint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#blueprint" target="_blank">Media &amp; Socials - "Blueprint"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pen_testing_blueprints" target="_blank">Posters - Pen Testing Blueprints</a>';
    }
    else if (input.includes("bookstack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#bookstack" target="_blank">Projects - "Bookstack"</a>';
    }
    else if (input.includes("bounty")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_bounty_basics" target="_blank">Media &amp; Socials - "Bug Bounty Basics"</a>';
    }
    else if (input.includes("breadcrumbs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#breadcrumbs" target="_blank">Threat Intelligence - "Breadcrumbs"</a>';
    }
    else if (input.includes("brew")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#brew" target="_blank">Cyber Defence (Blue Team) - "Brew"</a>';
    }
    else if (input.includes("brian krebs") || input.includes("brian") || input.includes("krebs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#brian_krebs" target="_blank">Media &amp; Socials - "Brian Krebs"</a>';
    }
    else if (input.includes("bruteshark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bruteshark" target="_blank">Cyber Defence (Blue Team) - "Bruteshark"</a>';
    }
    else if (input.includes("bug")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_bounty_basics" target="_blank">Media &amp; Socials - "Bug Bounty Basics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - "Bug Hunters Methodology"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/training.html#bugcrowd" target="_blank">Training, CTFs &amp; Challenges - "Bugcrowd"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#bugtraq" target="_blank">Virtual Machines - "Bugtraq"</a>';
    }
    else if (input.includes("bugcrowd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#bugcrowd" target="_blank">Training, CTFs &amp; Challenges - "Bugcrowd"</a>';
    }
    else if (input.includes("bugtraq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#bugtraq" target="_blank">Virtual Machines - "Bugtraq"</a>';
    }
    else if (input.includes("bunker")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_bunker" target="_blank">Threat Intelligence - "OSINT Bunker"</a>';
    }
    else if (input.includes("burp") || input.includes("burpsuite")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#burp_suite" target="_blank">Cheat Sheets - "Burp Suite"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#burpsuite" target="_blank">Cyber Defence (Blue Team) - "Burpsuite"</a>';
    }
    else if (input.includes("caine")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#caine" target="_blank">Cyber Defence (Blue Team) - "Caine"</a>';
    }
    else if (input.includes("caldera")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#caldera" target="_blank">Projects - "Caldera"</a>';
    }
    else if (input.includes("camouflage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#camouflage" target="_blank">Cyber Defence (Blue Team) - "Camouflage"</a>';
    }
    else if (input.includes("canary")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#red_canary" target="_blank">Publications - "Red Canary"</a>';
    }
    else if (input.includes("cape")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cape" target="_blank">Cyber Defence (Blue Team) - "Cape"</a>';
    }
    else if (input.includes("capture")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#process_capture" target="_blank">Cyber Defence (Blue Team) - "Process Capture"</a>';
    }
    else if (input.includes("censys")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#censys" target="_blank">Threat Intelligence - "Censys"</a>';
    }
    else if (input.includes("cfreds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cfreds" target="_blank">Projects - "CFREDS"</a>';
    }
    else if (input.includes("challenge")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Media &amp; Socials - "Dr Cole Challenge"</a>';
    }
    else if (input.includes("cherrytree") || input.includes("cherry")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#cherrytree" target="_blank">Offensive Cyber (Red Team) - "Cherrytree"</a>';
    }
    else if (input.includes("chimera")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#chimera" target="_blank">Offensive Cyber (Red Team) - "Chimera"</a>';
    }
    else if (input.includes("cisa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#cisa_ir_playbooks" target="_blank">Publications - "CISA IR Playbooks"</a>';
    }
    else if (input.includes("ciso") || input.includes("mind") || input.includes("mindmap") || input.includes("mind map")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#ciso_mind_map" target="_blank">Posters - "CISO Mind Map"</a>';
    }
    else if (input.includes("cli")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheat Sheets - "Windows Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Cheat Sheets - "Linux CLI Fundamentals"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli" target="_blank">Cheat Sheets - "Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Cheat Sheets - "Windows CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#multi_cloud_cli" target="_blank">Cheat Sheets - "Multi Cloud CLI"</a>';
    }
    else if (input.includes("cloud")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#multi_cloud_cli" target="_blank">Cheat Sheets - "Multi Cloud CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#cloud_security_devops" target="_blank">Cheat Sheets - "Cloud Security DevOps"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#aws" target="_blank"> Cheat Sheets - "AWS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#aws_arsenal" target="_blank">Tooling - "AWS Arsenal"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#az_900_azure_fundamentals" target="_blank">Cyber Defence (Blue Team) - "AZ-900 Azure Fundamentals"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - "Azurehunter"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - "Azurehunter"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#gcp" target="_blank">Cheat Sheets - "GCP"</a>';
    }
    else if (input.includes("cluley") || input.includes("graham") || input.includes("graham cluley")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#graham_cluley" target="_blank">Media &amp; Socials - "Graham Cluley"</a>';
    }
    else if (input.includes("kungfu") || input.includes("cmdline kungfu") || input.includes("cmd line kungfu") || input.includes("command line kungfu") || input.includes("command line")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cmd_line_kungfu" target="_blank">Posters - "CMD Line Kungfu"</a>';
    }
    else if (input.includes("cmd") || input.includes("cmd line") || input.includes("cmdline") || input.includes("command line")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_command_line_obfuscation" target="_blank">Media &amp; Socials - "Windows Command Line Obfuscation"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cmd_line_kungfu" target="_blank">Posters - "CMD Line Kungfu"</a>';
    }
    else if (input.includes("cobalt") || input.includes("strike") || input.includes("cobaltstrike") || input.includes("cobalt strike")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Media &amp; Socials - "Hunting Cobalt Strike"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cobaltstrike_defence" target="_blank">Projects - CobaltStrike Defence</a>';
    }
    else if (input.includes("coderpad")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#coderpad" target="_blank">Threat Intelligence - "Coderpad"</a>';
    }
    else if (input.includes("colab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#colab" target="_blank">Threat Intelligence - "Colab"</a>';
    }
    else if (input.includes("colin hardy") || input.includes("colin") || input.includes("hardy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#colin_hardy" target="_blank">Media &amp; Socials - "Colin Hardy"</a>';
    }
    else if (input.includes("collection")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#evidence_collection" target="_blank">Cheat Sheets - "Evidence Collection"</a>';
    }
    else if (input.includes("command")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_commands" target="_blank">Cheat Sheets - "Linux Commands"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#commando" target="_blank">Virtual Machines - "Commando"</a>';
    }
    else if (input.includes("common")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - "Common Attacks Defences"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_ports" target="_blank">Cheat Sheets - "Common Ports"</a>';
    }
    else if (input.includes("comptia")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#comptia" target="_blank">Threat Intelligence - "Comptia"</a>';
    }
    else if (input.includes("conrad") || input.includes("eric conrad")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#eric_conrad" target="_blank">Media &amp; Socials - "Eric Conrad"</a>';
    }
    else if (input.includes("control")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cis_controls" target="_blank">Posters - "CIS Controls"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#industrial_control_systems" target="_blank">Posters - "Industrial Control Systems"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ics" target="_blank">Cyber Defence (Blue Team) - "ICS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ics" target="_blank">Offensive Cyber (Red Team) - "ICS"</a>';
    }
    else if (input.includes("controls")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#cis_controls" target="_blank">Posters - "CIS Controls"</a>';
    }
    else if (input.includes("core")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">Cyber Defence (Blue Team) - "SOC Core Skills"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powershell_core" target="_blank">Cyber Defence (Blue Team) - "Powershell Core"</a>';
    }
    else if (input.includes("skills")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">Cyber Defence (Blue Team) - "SOC Core Skills"</a>';
    }
    else if (input.includes("counter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#counter_hack_challenges" target="_blank">Cyber Defence (Blue Team) - "Counter Hack Challenges"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#active_countermeasures" target="_blank">Tooling - "Active Countermeasures"</a>';
    }
    else if (input.includes("countermeasures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#active_countermeasures" target="_blank">Tooling - "Active Countermeasures"</a>';
    }
    else if (input.includes("cracking stuxnet") || input.includes("cracking") || input.includes("stuxnet") || input.includes("iran") || input.includes("natanz") || input.includes("nuclear")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#cracking_stuxnet" target="_blank">Media &amp; Socials - "Cracking Stuxnet"</a>';
    }
    else if (input.includes("critical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#critical_log_review" target="_blank">Cheat Sheets - "Critical Log Review"</a>';
    }
    else if (input.includes("cron") || input.includes("crontab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#crontab_guru" target="_blank">Cyber Defence (Blue Team) - "Crontab Guru"</a>';
    }
    else if (input.includes("crt") || input.includes("crt.sh")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#crt_sh" target="_blank">Offensive Cyber (Red Team) - "crt.sh"</a>';
    }
    else if (input.includes("cscript")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cscript" target="_blank">Cyber Defence (Blue Team) - "Cscript"</a>';
    }
    else if (input.includes("csi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#csi_linux" target="_blank">Cyber Defence (Blue Team) - "CSI Linux"</a>';
    }
    else if (input.includes("csoc") || input.includes("strategies") || input.includes("class") || input.includes("world class")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - "Ten Strategies of a World Class CSOC"</a>';
    }
    else if (input.includes("ctfs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#ctfs" target="_blank">Threat Intelligence - "CTFS"</a>';
    }
    else if (input.includes("cuckoo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cuckoo" target="_blank">Cyber Defence (Blue Team) - "Cuckoo"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#the_cuckoos_egg" target="_blank">Publications - "The Cuckoos Egg"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#install_cuckoo" _blank">Publications - "Install Cuckoo"</a>';
    }
    else if (input.includes("cutter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cutter" target="_blank">Cyber Defence (Blue Team) - "Cutter"</a>';
    }
    else if (input.includes("cyber")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - "How Cyberattacks Threaten Real World"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cyberbattlesim" target="_blank">Projects - "Cyberbattlesim"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberchef" target="_blank">Cyber Defence (Blue Team) - "Cyberchef"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_is_cybercrime?" target="_blank">Media &amp; Socials - "What is Cybercrime?"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#everyday_cybercrime_and_what_you_can_do_about_it" target="_blank">Media &amp; Socials - "Everyday Cybercrime and what you can do about it"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberdefenders" target="_blank">Cyber Defence (Blue Team) - "Cyberdefenders"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#defining_cyberwarfare" target="_blank">Media &amp; Socials - "Defining Cyberwarfare"</a>';
    }
    else if (input.includes("cyberattacks") || input.includes("threaten") || input.includes("cyberattacks threaten") || input.includes("real world") || input.includes("threaten real world")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - "How Cyberattacks Threaten Real World"</a>';
    }
    else if (input.includes("cyberbattlesim")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#cyberbattlesim" target="_blank">Projects - "Cyberbattlesim"</a>';
    }
    else if (input.includes("cyberchef")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberchef" target="_blank">Cyber Defence (Blue Team) - "Cyberchef"</a>';
    }
    else if (input.includes("cybercrime")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_is_cybercrime?" target="_blank">Media &amp; Socials - "What is Cybercrime?"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#everyday_cybercrime_and_what_you_can_do_about_it" target="_blank">Media &amp; Socials - "Everyday Cybercrime and what you can do about it"</a>';
    }
    else if (input.includes("cyberdefenders")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cyberdefenders" target="_blank">Cyber Defence (Blue Team) - "Cyberdefenders"</a>';
    }
    else if (input.includes("defining cyberwarfare") || input.includes("cyberwarfare") || input.includes("defining")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#defining_cyberwarfare" target="_blank">Media &amp; Socials - "Defining Cyberwarfare"</a>';
    }
    else if (input.includes("cyborg hawk") || input.includes("cyborg") || input.includes("hawk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#cyborg_hawk" target="_blank">Virtual Machines - "Cyborg Hawk"</a>';
    }
    else if (input.includes("cybrary")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#cybrary" target="_blank">Cyber Defence (Blue Team) - "Cybrary"</a>';
    }
    else if (input.includes("d3fend")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#d3fend" target="_blank">Projects - "D3fend"</a>';
    }
    else if (input.includes("darknet diaries") || input.includes("darknet") || input.includes("diaries")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#darknet_diaries" target="_blank">Media &amp; Socials - "Darknet Diaries"</a>';
    }
    else if (input.includes("dasmalwerk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dasmalwerk_eu" target="_blank">Cyber Defence (Blue Team) - "Dasmalwerk Eu"</a>';
    }
    else if (input.includes("database")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#urlhaus_database" target="_blank">Cyber Defence (Blue Team) - "Urlhaus Database"</a>';
    }
    else if (input.includes("datasets")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#security_datasets" target="_blank">Projects - "Security Datasets"</a>';
    }
    else if (input.includes("deception")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#cyber_deception" target="_blank">Media &amp; Socials - "Cyber Deception"</a>';
    }
    else if (input.includes("decode") || input.includes("operation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#operation_decode" target="_blank">Publications - "Operation Decode"</a>';
    }
    else if (input.includes("deep")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - "Weaponizing the Deep Web"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#deepbluecli" target="_blank">Cyber Defence (Blue Team) - "DeepBlueCLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ssdeep" target="_blank">Cyber Defence (Blue Team) - "SSDeep"</a>';
    }
    else if (input.includes("deepbluecli")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#deepbluecli" target="_blank">Cyber Defence (Blue Team) - "DeepBlueCLI"</a>';
    }
    else if (input.includes("defence") || input.includes("defense")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#sans_cyber_defense" target="_blank">Media &amp; Socials - "SANS Cyber Defense"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - "Common Attacks Defences"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - "ADHD"</a>';
    }
    else if (input.includes("defences") || input.includes("defenses")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_attacks_defences" target="_blank">Cheat Sheets - "Common Attacks Defences"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#adhd" target="_blank">Cyber Defence (Blue Team) - "ADHD"</a>';
    }
    else if (input.includes("defending") || input.includes("fighting") || input.includes("viruses") || input.includes("fighting viruses") || input.includes("defending the net")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Media &amp; Socials - "Fighting Viruses Defending the Net"</a>';
    }
    else if (input.includes("delivery")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#delivery" target="_blank">Offensive Cyber (Red Team) - "Delivery"</a>';
    }
    else if (input.includes("demystifying")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Publications - "Demystifying Threat Hunting"</a>';
    }
    else if (input.includes("deobfuscator") || input.includes("xlm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xlmmacrodeobfuscator" target="_blank">Cyber Defence (Blue Team) - "xlmmacrodeobfuscator"</a>';
    }
    else if (input.includes("detuxng")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#detuxng" target="_blank">Cyber Defence (Blue Team) - "Detuxng"</a>';
    }
    else if (input.includes("devices")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">Media &amp; Socials - "All Your Devices can be Hacked"</a>';
    }
    else if (input.includes("dfir")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheat Sheets - "DFIR"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" _blank">Cyber Defence (Blue Team) - "DFIRlogbook"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#dfirmindmaps" _blank">Projects - "DFIRmindmaps"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirtrack" _blank">Cyber Defence (Blue Team) - "DFIRtrack"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfir_beginner_to_expert" target="_blank">Cyber Defence (Blue Team) - "DFIR Beginner to Expert"</a>';
    }
    else if (input.includes("dfirlogbook")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">Cyber Defence (Blue Team) - "DFIRlogbook"</a>';
    }
    else if (input.includes("dfirmindmaps")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#dfirmindmaps" target="_blank">Projects - "DFIRmindmaps"</a>';
    }
    else if (input.includes("dfirtrack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirtrack" target="_blank">Cyber Defence (Blue Team) - "DFIRtrack"</a>';
    }
    else if (input.includes("didier") || input.includes("stevens") || input.includes("didier stevens") || input.includes("didierstevens")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#didier_stevens_dist67" target="_blank">Media &amp; Socials - "Didier Stevens Dist67"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didier_stevens_dist67" target="_blank">Cyber Defence (Blue Team) - "Didier Stevens Dist67"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didierstevens_suite" target="_blank">Cyber Defence (Blue Team) - "Didierstevens Suite"</a>';
    }
    else if (input.includes("dist67")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#didier_stevens_dist67" target="_blank">Media &amp; Socials - "Didier Stevens Dist67"</a>';
    }
    else if (input.includes("diva")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#dfir_diva" target="_blank">Threat Intelligence - "DFIR Diva"</a>';
    }
    else if (input.includes("dnstwist")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#dnstwist" target="_blank">Threat Intelligence - "DNStwist"</a>';
    }
    else if (input.includes("domains") || input.includes("expired") || input.includes("expired domains")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#expired_domains" target="_blank">Offensive Cyber (Red Team) - "Expired Domains"</a>';
    }
    else if (input.includes("domfind")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#domfind" target="_blank">Threat Intelligence - "Domfind"</a>';
    }
    else if (input.includes("dorks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#shodan_dorks" target="_blank">Cheat Sheets - "Shodan Dorks"</a>';
    }
    else if (input.includes("ddos") || input.includes("dos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ddos_incident_response" target="_blank">Cheat Sheets - "DDOS Incident Response"</a>';
    }
    else if (input.includes("dotpack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#dotpack" target="_blank">Offensive Cyber (Red Team) - "Dotpack"</a>';
    }
    else if (input.includes("dr") || input.includes("cole") || input.includes("dr eric cole") || input.includes("dr.") || input.includes("dr. eric cole")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_eric_cole" target="_blank">Media &amp; Socials - "Dr Eric Cole"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Media &amp; Socials - "Dr Cole Challenge"</a>';
    }
    else if (input.includes("duckduckgo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#duckduckgo" target="_blank">Threat Intelligence - "Duckduckgo"</a>';
    }
    else if (input.includes("dumpster")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#dns_dumpster" target="_blank">Threat Intelligence - "DNS Dumpster"</a>';
    }
    else if (input.includes("dvwa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#dvwa" target="_blank">Virtual Machines - "DVWA"</a>';
    }
    else if (input.includes("sarah") || input.includes("edwards") || input.includes("sarah edwards")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#sarah_edwards" target="_blank">Media &amp; Socials - "Sarah Edwards"</a>';
    }
    else if (input.includes("egg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#the_cuckoos_egg" target="_blank">Publications - "The Cuckoos Egg"</a>';
    }
    else if (input.includes("eiab") || input.includes("ncsc") || input.includes("exercise") || input.includes("exercise in a box") || input.includes("ttx") || input.includes("table top") || input.includes("table top exercise") || input.includes("tabletop") || input.includes("tabletop exercise") || input.includes("national cyber security centre")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ncsc_eiab" target="_blank">Projects - "NCSC EIAB"</a>';
    }
    else if (input.includes("elastic")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#elastic" target="_blank">Cyber Defence (Blue Team) - "Elastic"</a>';
    }
    else if (input.includes("empire")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#empire" target="_blank">Cheat Sheets - "Empire"</a>';
    }
    else if (input.includes("emu")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#flare_emu" target="_blank">Threat Intelligence - "FLARE EMU"</a>';
    }
    else if (input.includes("endpoint") || input.includes("measures") || input.includes("endpoint security measures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#endpoint_security_measures" target="_blank">Media &amp; Socials - "Endpoint Security Measures"</a>';
    }
    else if (input.includes("engage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#engage" target="_blank">Projects - "Engage"</a>';
    }
    else if (input.includes("enisa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#enisa" target="_blank">Threat Intelligence - "Enisa"</a>';
    }
    else if (input.includes("enterprise")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - "Kansa for Enterprise Scale Threat Hunting"</a>';
    }
    else if (input.includes("epochconverter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#epochconverter" target="_blank">Cyber Defence (Blue Team) - "Epochconverter"</a>';
    }
    else if (input.includes("eric")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Cheat Sheets - "Eric Zimmerman Tools"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_eric_cole" target="_blank">Media &amp; Socials - "Dr Eric Cole"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#dr_cole_challenge" target="_blank">Media &amp; Socials - "Dr Cole Challenge"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eric_conrad" target="_blank">Media &amp; Socials - "Eric Conrad"</a>';
    }
    else if (input.includes("eric zimmerman") || input.includes("zimmerman")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Cheat Sheets - "Eric Zimmerman Tools"</a>';
    }
    else if (input.includes("ethical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#become_an_ethical_hacker_for_0" target="_blank">Media &amp; Socials - "Become an Ethical Hacker for $0"</a>';
    }
    else if (input.includes("evil")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Posters - "Know Normal Hunt Evil"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - "Know Abnormal Find Evil"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilclippy" target="_blank">Offensive Cyber (Red Team) - "Evilclippy"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilginx2" target="_blank">Offensive Cyber (Red Team) - "Evilginx2"</a>';
    }
    else if (input.includes("normal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Posters - "Know Normal Hunt Evil"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - "Know Abnormal Find Evil"</a>';
    }
    else if (input.includes("evilclippy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilclippy" target="_blank">Offensive Cyber (Red Team) - "Evilclippy"</a>';
    }
    else if (input.includes("evilginx2")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#evilginx2" target="_blank">Offensive Cyber (Red Team) - "Evilginx2"</a>';
    }
    else if (input.includes("evtx_dump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#evtx_dump" target="_blank">Cyber Defence (Blue Team) - "EVTX Dump"</a>';
    }
    else if (input.includes("exiftool")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#exiftool" target="_blank">Cyber Defence (Blue Team) - "Exiftool"</a>';
    }
    else if (input.includes("explorer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wmi_explorer" target="_blank">Cyber Defence (Blue Team) - "WMI Explorer"</a>';
    }
    else if (input.includes("extracting") || input.includes("extract")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#extracting_value_from_cti" target="_blank">Publications - "Extracting Value from CTI"</a>';
    }
    else if (input.includes("eztools") || input.includes("kape") || input.includes("eztools kape")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#eztools_kape" target="_blank">Media &amp; Socials - "EZtools Kape"</a>';
    }
    else if (input.includes("fakedns")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fakedns" target="_blank">Cyber Defence (Blue Team) - "FakeDNS"</a>';
    }
    else if (input.includes("faster") || input.includes("making") || input.includes("memories")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Media &amp; Socials - "Making Memories Faster Response"</a>';
    }
    else if (input.includes("feeds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#feeds" target="_blank">Threat Intelligence - "Feeds"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - "Threatfeeds IO"</a>';
    }
    else if (input.includes("feodo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#feodo_tracker" target="_blank">Threat Intelligence - "Feodo Tracker"</a>';
    }
    else if (input.includes("fiddler")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fiddler" target="_blank">Cyber Defence (Blue Team) - "Fiddler"</a>';
    }
    else if (input.includes("field")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">Publications - "IR Field Guide"</a>';
    }
    else if (input.includes("fighting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Media &amp; Socials - "Fighting Viruses Defending the Net"</a>';
    }
    else if (input.includes("findings")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#security_assessment_findings_report" target="_blank">Publications - "Security Assessment Findings Report"</a>';
    }
    else if (input.includes("flameshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#flameshot" target="_blank">Offensive Cyber (Red Team) - "Flameshot"</a>';
    }
    else if (input.includes("flare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#flare" target="_blank">Virtual Machines - "FLARE"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#flare_emu" target="_blank">Threat Intelligence - "FLARE EMU"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#flare-on" target="_blank">Cyber Defence (Blue Team) - "Flare-On"</a>';
    }
    else if (input.includes("florian") || input.includes("roth")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#florian_roth" target="_blank">Media &amp; Socials - "Florian Roth"</a>';
    }
    else if (input.includes("focusing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#focusing_security" target="_blank">Media &amp; Socials - "Focusing Security"</a>';
    }
    else if (input.includes("forensics")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#macOS_forensics" target="_blank">Cheat Sheets - "macOS Forensics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Cheat Sheets - "Memory Forensics"</a>';
    }
    else if (input.includes("freq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#freq" target="_blank">Cyber Defence (Blue Team) - "freq"</a>';
    }
    else if (input.includes("ftk") || input.includes("imager")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ftk_imager" target="_blank">Cyber Defence (Blue Team) - "FTK Imager"</a>';
    }
    else if (input.includes("fullhunt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#fullhunt" target="_blank">Threat Intelligence - "Fullhunt"</a>';
    }
    else if (input.includes("fundamentals")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Cheat Sheets - "Linux CLI Fundamentals"</a>';
    }
    else if (input.includes("game")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#xss_game" target="_blank">Training, CTFs &amp; Challenges - "XSS Game"</a>';
    }
    else if (input.includes("gcp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#gcp" target="_blank">Cheat Sheets - "GCP"</a>';
    }
    else if (input.includes("ghidra")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ghidra" target="_blank">Cyber Defence (Blue Team) - "Ghidra"</a>';
    }
    else if (input.includes("ghost")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ghost_in_the_wires" target="_blank">Publications - "Ghost in the Wires"</a>';
    }
    else if (input.includes("google")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking" target="_blank">Cheat Sheets - "Google Hacking"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#timesketch" target="_blank">Cyber Defence (Blue Team) - "Timesketch"</a>';
    }
    else if (input.includes("greenshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#greenshot" target="_blank">Offensive Cyber (Red Team) - "Greenshot"</a>';
    }
    else if (input.includes("greynoise")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#greynoise" target="_blank">Threat Intelligence - "Greynoise"</a>';
    }
    else if (input.includes("group") || input.includes("policy") || input.includes("pwnage") || input.includes("group policy") || input.includes("gpo") || input.includes("gpo pwnage") || input.includes("group policy pwnage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#group_policy_pwnage" target="_blank">Publications - "Group Policy Pwnage"</a>';
    }
    else if (input.includes("growing") || input.includes("human") || input.includes("operated")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Publications - "Growing Threat of Human Operated Ransomware"</a>';
    }
    else if (input.includes("grr")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#grr" target="_blank">Cyber Defence (Blue Team) - "grr"</a>';
    }
    else if (input.includes("guide")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#aws_ir_guide" target="_blank">Publications - "AWS IR Guide"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">Publications - "OWASP Testing Guide"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ir_field_guide" target="_blank">Publications - "IR Field Guide"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#guides" target="_blank">Publications - "Guides"</a>';
    }
    else if (input.includes("guides")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#guides" target="_blank">Publications - "Guides"</a>';
    }
    else if (input.includes("guru")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#crontab_guru" target="_blank">Cyber Defence (Blue Team) - "Crontab Guru"</a>';
    }
    else if (input.includes("hack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#become_an_ethical_hacker_for_0" target="_blank">Media &amp; Socials - "Become an Ethical Hacker for $0"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking_recon" target="_blank">Cheatsheets - "Google Hacking" (Reconnaissance)</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking_int" target="_blank">Cheatsheets - "Google Hacking (Intelligence)"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Media &amp; Socials - "Hacker\'s Physical Pentest Toolkit"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackersploit" target="_blank">Media &amp; Socials - "Hackersploit"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#shehackspurple" target="_blank">Media &amp; Socials - "Shehackspurple"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">Media &amp; Socials - "How Russia Hacked the US Election"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">Media &amp; Socials - "All Your Devices can be Hacked"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackthebox" target="_blank">Media &amp; Socials - "Hackthebox"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tryhackme" target="_blank">Media &amp; Socials - "Tryhackme"</a>';
    }
    else if (input.includes("hacked")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">Media &amp; Socials - "How Russia Hacked the US Election"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#all_your_devices_can_be_hacked" target="_blank">Media &amp; Socials - "All Your Devices can be Hacked"</a>';
    }
    else if (input.includes("hackers") || input.includes("hackersploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackersploit" target="_blank">Media &amp; Socials - "Hackersploit"</a>';
    }
    else if (input.includes("hacking")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#google_hacking" target="_blank">Cheat Sheets - "Google Hacking"</a>';
    }
    else if (input.includes("hackinthebox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#hackinthebox" target="_blank">Training, CTFs &amp; Challenges - "Hackinthebox"</a>';
    }
    else if (input.includes("hackthebox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackthebox" target="_blank">Media &amp; Socials - "Hackthebox"</a>';
    }
    else if (input.includes("harmj0y")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#harmj0y" target="_blank">Publications - "Harmj0y"</a>';
    }
    else if (input.includes("hatless1der")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hatless1der" target="_blank">Publications - "Hatless1der"</a>';
    }
    else if (input.includes("haveibeenpwned") || input.includes("pwned")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#haveibeenpwned" target="_blank">Offensive Cyber (Red Team) - "haveibeenpwned"</a>';
    }
    else if (input.includes("haystak")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#haystak" target="_blank">Threat Intelligence - "Haystak"</a>';
    }
    else if (input.includes("healthcare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#healthcare" target="_blank">Posters - "Healthcare"</a>';
    }
    else if (input.includes("heather") || input.includes("mahalik") || input.includes("heather mahalik")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#heather_mahalik" target="_blank">Media &amp; Socials - "Heather Mahalik"</a>';
    }
    else if (input.includes("helk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#helk" target="_blank">Cyber Defence (Blue Team) - "HELK"</a>';
    }
    else if (input.includes("hex")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hex_regex" target="_blank">Cheat Sheets - "HEX/regex"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_regex" target="_blank">Cyber Defence (Blue Team) - "Structures and Schemas"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_editors" target="_blank">Cyber Defence (Blue Team) - "Hex Editors"</a>';
    }
    else if (input.includes("hexinator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hexinator" target="_blank">Cyber Defence (Blue Team) - "Hexinator"</a>';
    }
    else if (input.includes("history")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#30_years_of_history" target="_blank">Media &amp; Socials - "30 Years of History"</a>';
    }
    else if (input.includes("home") || input.includes("homelab") || input.includes("home lab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#build_a_home_lab" target="_blank">Media &amp; Socials - "Build a Home Lab"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">Tooling - "HomeLabResources"</a>';
    }
    else if (input.includes("hopper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hopper" target="_blank">Cyber Defence (Blue Team) - "Hopper"</a>';
    }
    else if (input.includes("hping")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hping" target="_blank">Cheat Sheets - "Hping"</a>';
    }
    else if (input.includes("http") || input.includes("probe") || input.includes("httprobe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#httprobe" target="_blank">Offensive Cyber (Red Team) - "Httprobe"</a>';
    }
    else if (input.includes("hunt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Projects - "Threathunting Project"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - "DFIR & Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">Cyber Defence (Blue Team) - "ACM Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#apt_hunter" target="_blank">Cyber Defence (Blue Team) - "APT Hunter"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#azurehunter" target="_blank">Cyber Defence (Blue Team) - "Azurehunter"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Publications - "Demystifying Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - "Kansa for Enterprise Scale Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_normal_hunt_evil" target="_blank">Posters - "Know Normal Hunt Evil"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#know_abnormal_find_evil" target="_blank">Posters - "Know Abnormal Find Evil"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#fullhunt" target="_blank">Threat Intelligence - "Fullhunt"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#hunting_cobalt_strike" target="_blank">Media &amp; Socials - "Hunting Cobalt Strike"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Media &amp; Socials - "Threat Hunting via Sysmon"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - "Threat Hunting via DNS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#post_exploitation_hunting" target="_blank">Media &amp; Socials - "Post Exploitation Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - "Bug Hunters Methodology"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - "DFIR & Threat Hunting"</a>';
    }
    else if (input.includes("hunters")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - "Bug Hunters Methodology"</a>';
    }
    else if (input.includes("hybrid")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hybrid_analysis" target="_blank">Cyber Defence (Blue Team) - "Hybrid Analysis"</a>';
    }
    else if (input.includes("mikko") || input.includes("hypponen") || input.includes("mikko hypponen")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#mikko_hypponen" target="_blank">Media &amp; Socials - "Mikko Hypponen"</a>';
    }
    else if (input.includes("ida") || input.includes("ida pro")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ida_pro" target="_blank">Cheat Sheets - "IDA Pro"</a>';
    }
    else if (input.includes("ids")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ids" target="_blank">Cheat Sheets - "IDS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#awesome_event_ids" target="_blank">Cheat Sheets - "Awesome Event IDs"</a>';
    }
    else if (input.includes("immunity")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#immunity_debugger" target="_blank">Cyber Defence (Blue Team) - "Immunity Debugger"</a>';
    }
    else if (input.includes("impacket")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#impacket" target="_blank">Offensive Cyber (Red Team) - "Impacket"</a>';
    }
    else if (input.includes("inceptor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#inceptor" target="_blank">Offensive Cyber (Red Team) - "Inceptor"</a>';
    }
    else if (input.includes("incident") || input.includes("response") || input.includes("incident response")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ddos_incident_response" target="_blank">Cheat Sheets - "DDOS Incident Response"</a>';
    }
    else if (input.includes("industrial") || input.includes("systems") || input.includes("industrial control") || input.includes("control systems") || input.includes("industrial control systems") || input.includes("ics") || input.includes("scada") || input.includes("supervisory control and data acquisition")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#industrial_control_systems" target="_blank">Posters - "Industrial Control Systems"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ics" target="_blank">Cyber Defence (Blue Team) - "ICS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#ics" target="_blank">Offensive Cyber (Red Team) - "ICS"</a>';
    }
    else if (input.includes("inet") || input.includes("inetsim")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#inetsim" target="_blank">Cyber Defence (Blue Team) - "Inetsim"</a>';
    }
    else if (input.includes("infosec")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#infosec_osint_show" target="_blank">Threat Intelligence - "Infosec OSINT Show"</a>';
    }
    else if (input.includes("ins1gn1a")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ins1gn1a" target="_blank">Publications - "Ins1gn1a"</a>';
    }
    else if (input.includes("insertion") || input.includes("usb")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#usb_insertion" target="_blank">Media &amp; Socials - "USB Insertion"</a>';
    }
    else if (input.includes("installing") || input.includes("zeek") || input.includes("scratch") || input.includes("installing zeek")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#installing_zeek_from_scratch" target="_blank">Media &amp; Socials - "Installing Zeek from Scratch"</a>';
    }
    else if (input.includes("intelligencex")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#intelligencex" target="_blank">Threat Intelligence - "IntelligenceX"</a>';
    }
    else if (input.includes("inteltechniques")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#inteltechniques" target="_blank">Threat Intelligence - "IntelTechniques"</a>';
    }
    else if (input.includes("interactsh")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#interactsh" target="_blank">Cyber Defence (Blue Team) - "Interactsh"</a>';
    }
    else if (input.includes("internet")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_we_take_back_the_internet" target="_blank">Media &amp; Socials - "How we Take Back the Internet"</a>';
    }
    else if (input.includes("investigating") || input.includes("wmi attacks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#investigating_wmi_attacks" target="_blank">Media &amp; Socials - "Investigating WMI Attacks"</a>';
    }
    else if (input.includes("investigation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">Threat Intelligence - "SOC Investigation"</a>';
    }
    else if (input.includes("invisiblesecrets")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#invisiblesecrets" target="_blank">Cyber Defence (Blue Team) - "Invisiblesecrets"</a>';
    }
    else if (input.includes("ioas") || input.includes("iocs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#iocs_v_ioas" target="_blank">Publications - "IOCs V IOAs"</a>';
    }
    else if (input.includes("ios")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ios_macOS_images" target="_blank">Projects - "iOS/macOS Images"</a>';
    }
    else if (input.includes("ippsec")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#ippsec" target="_blank">Threat Intelligence - "Ippsec"</a>';
    }
    else if (input.includes("jail")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_jail" target="_blank">Cyber Defence (Blue Team) - "Malware Jail"</a>';
    }
    else if (input.includes("jake") || input.includes("williams") || input.includes("jake williams")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#jake_williams" target="_blank">Media &amp; Socials - "Jake Williams"</a>';
    }
    else if (input.includes("james") || input.includes("lyne") || input.includes("james lyne")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#james_lyne" target="_blank">Media &amp; Socials - "James Lyne"</a>';
    }
    else if (input.includes("jason") || input.includes("fossen") || input.includes("jason fossen")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#jason_fossen" target="_blank">Media &amp; Socials - "Jason Fossen"</a>';
    }
    else if (input.includes("java") || input.includes("decompiler")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#java_decompiler" target="_blank">Cyber Defence (Blue Team) - "Java Decompiler"</a>';
    }
    else if (input.includes("joe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#joe_sandbox" target="_blank">Cyber Defence (Blue Team) - "Joe Sandbox"</a>';
    }
    else if (input.includes("joff") || input.includes("thyer") || input.includes("joff thyer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#joff_thyer" target="_blank">Media &amp; Socials - "Joff Thyer"</a>';
    }
    else if (input.includes("john")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#john_strand" target="_blank">Media &amp; Socials - "John Strand"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#johntheripper" target="_blank">Offensive Cyber (Red Team) - "JohnTheRipper"</a>';
    }
    else if (input.includes("joplin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#joplin" target="_blank">Offensive Cyber (Red Team) - "Joplin"</a>';
    }
    else if (input.includes("jq") || input.includes("json")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#json_jq" target="_blank">Cheat Sheets - "json/jq"</a>';
    }
    else if (input.includes("kali")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#kali" target="_blank">Cheat Sheets - "Kali"</a>';
    }
    else if (input.includes("kansa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - "Kansa for Enterprise Scale Threat Hunting"</a>';
    }
    else if (input.includes("karma")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#karma" target="_blank">Threat Intelligence - "Karma"</a>';
    }
    else if (input.includes("keepnote")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#keepnote" target="_blank">Offensive Cyber (Red Team) - "Keepnote"</a>';
    }
    else if (input.includes("kernel") || input.includes("tracing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#linux_kernel_tracing" target="_blank">Publications - "Linux Kernel Tracing"</a>';
    }
    else if (input.includes("kevin") || input.includes("mitnick") || input.includes("kevin mitnick")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#kevin_mitnick" target="_blank">Media &amp; Socials - "Kevin Mitnick"</a>';
    }
    else if (input.includes("keynotes")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#keynotes" target="_blank">Media &amp; Socials - "Keynotes"</a>';
    }
    else if (input.includes("kioptrix")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#kioptrix" target="_blank">Virtual Machines - "Kioptrix"</a>';
    }
    else if (input.includes("kodachi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#kodachi" target="_blank">Threat Intelligence - "Kodachi"</a>';
    }
    else if (input.includes("kql")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#kql" target="_blank">Cheat Sheets - "kql"</a>';
    }
    else if (input.includes("lab")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/tooling.html#homelabresources" target="_blank">Tooling - "HomeLabResources"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#trace_labs" target="_blank">Threat Intelligence - "Trace Labs"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#colab" target="_blank">Threat Intelligence - "COLAB"</a>';
    }
    else if (input.includes("lateral") || input.includes("movement") || input.includes("lateral movement")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#lateral_movement_analysis" target="_blank">Cheat Sheets - "Lateral Movement Analysis"</a>';
    }
    else if (input.includes("layer") || input.includes("layer8")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#layer_8" target="_blank">Threat Intelligence - "Layer 8"</a>';
    }
    else if (input.includes("rob") || input.includes("robert") || input.includes("lee") || input.includes("rob lee") || input.includes("robert lee")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#rob_lee" target="_blank">Media &amp; Socials - "Rob Lee"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#robert_lee" target="_blank">Media &amp; Socials - "Robert Lee"</a>';
    }
    else if (input.includes("lenny") || input.includes("zeltser") || input.includes("lenny zeltser")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#lenny_zelster" target="_blank">Publications - "Lenny Zelster"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#lenny_zeltser" target="_blank">Media &amp; Socials - "Lenny Zeltser"</a>';
    }
    else if (input.includes("lifecycle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ir_lifecycle" target="_blank">Cheat Sheets - "IR Lifecycle"</a>';
    }
    else if (input.includes("lime")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#lime" target="_blank">Cyber Defence (Blue Team) - "Lime"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#limelighter" target="_blank">Offensive Cyber (Red Team) - "LimeLighter"</a>';
    }
    else if (input.includes("lighter") || input.includes("limelighter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#limelighter" target="_blank">Offensive Cyber (Red Team) - "LimeLighter"</a>';
    }
    else if (input.includes("linpmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linpmem" target="_blank">Cyber Defence (Blue Team) - "linpmem"</a>';
    }
    else if (input.includes("pmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linpmem" target="_blank">Cyber Defence (Blue Team) - "linpmem"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#osxpmem" target="_blank">Cyber Defence (Blue Team) - "osxpmem"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Cyber Defence (Blue Team) - "Winpmem"</a>';
    }
    else if (input.includes("linux")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheat Sheets - "Windows Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_commands" target="_blank">Cheat Sheets - "Linux Commands"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli_fundamentals" target="_blank">Cheat Sheets - "Linux CLI Fundamentals"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_cli" target="_blank">Cheat Sheets - "Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux_shell" target="_blank">Cheat Sheets - "Linux Shell"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#linux" target="_blank">Cheat Sheets - "Linux"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#smb_access_from_linux" target="_blank">Cheat Sheets - "SMB Access from Linux"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linuxcatscale" target="_blank">Cyber Defence (Blue Team) - "Linuxcatscale"</a>';
    }
    else if (input.includes("linuxcatscale")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#linuxcatscale" target="_blank">Cyber Defence (Blue Team) - "Linuxcatscale"</a>';
    }
    else if (input.includes("location") || input.includes("scammer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_to_get_a_scammers_location" target="_blank">Media &amp; Socials - "How to get a Scammer\'s Location"</a>';
    }
    else if (input.includes("log")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#event_log_analysis" target="_blank">Cheat Sheets - "Event Log Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#critical_log_review" target="_blank">Cheat Sheets - "Critical Log Review"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#dfirlogbook" target="_blank">Cyber Defence (Blue Team) - "DFIRlogbook"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#what2log" target="_blank">Projects - "What2Log"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#unconventional_logging" target="_blank">Media &amp; Socials - "Unconventional Logging"</a>';
    }
    else if (input.includes("logging") || input.includes("unconventional") || input.includes("conventional")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#unconventional_logging" target="_blank">Media &amp; Socials - "Unconventional Logging"</a>';
    }
    else if (input.includes("lolbas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#lolbas" target="_blank">Projects - "LOLBAS"</a>';
    }
    else if (input.includes("lorandbodo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#lorandbodo" target="_blank">Publications - "lorandbodo"</a>';
    }
    else if (input.includes("macos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#macOS_forensics" target="_blank">Cheat Sheets - "macOS Forensics"</a>';
    }
    else if (input.includes("macro pack")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#macro_pack" target="_blank">Offensive Cyber (Red Team) - "Macro Pack"</a>';
    }
    else if (input.includes("macro")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#macro_pack" target="_blank">Offensive Cyber (Red Team) - "Macro Pack"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xlmmacrodeobfuscator" target="_blank">Cyber Defence (Blue Team) - "XLMMacroDeobfuscator"</a>';
    }
    else if (input.includes("malapi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#malapi" target="_blank">Projects - "Malapi"</a>';
    }
    else if (input.includes("malicious") || input.includes("documents") || input.includes("malicious documents")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malicious_documents" target="_blank">Cheat Sheets - "Malicious Documents"</a>';
    }
    else if (input.includes("malshare")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malshare" target="_blank">Cyber Defence (Blue Team) - "Malshare"</a>';
    }
    else if (input.includes("maltego")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#maltego" target="_blank">Threat Intelligence - "Maltego"</a>';
    }
    else if (input.includes("malware")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#malware_analysis" target="_blank">Cheat Sheets - "Malware Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#building_a_malware_lab" target="_blank">Cyber Defence (Blue Team) - "building_a_malware_lab"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwaretrafficanalysis" target="_blank">Cyber Defence (Blue Team) - "MalwareTrafficAnalysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware" target="_blank">Cyber Defence (Blue Team) - "Malware Analysis"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_analysis_repo" target="_blank">Cyber Defence (Blue Team) - "Malware Analysis Repository"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwarebazaar" target="_blank">Cyber Defence (Blue Team) - "Malwarebazaar"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_jail" target="_blank">Cyber Defence (Blue Team) - "Malware Jail"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_repos" target="_blank">Cyber Defence (Blue Team) - "Malware Repositories"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#mac_malware" target="_blank">Cyber Defence (Blue Team) - "Mac Malware"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#the-malware_repo" target="_blank">Cyber Defence (Blue Team) - "The-MALWARE-Repo"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malware_feed" target="_blank">Cyber Defence (Blue Team) - "Malware Feed"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">Publications - "PMAT Labs Walkthroughs"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwr" target="_blank">Cyber Defence (Blue Team) - "Malwr"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">Cheat Sheets - "REMnux"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Cheat Sheets - "Reverse Engineering"</a>';
    }
    else if (input.includes("malwarebazaar")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwarebazaar" target="_blank">Cyber Defence (Blue Team) - "Malwarebazaar"</a>';
    }
    else if (input.includes("malwaretrafficanalysis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwaretrafficanalysis" target="_blank">Cyber Defence (Blue Team) - "Malwaretrafficanalysis"</a>';
    }
    else if (input.includes("malwr")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#malwr" target="_blank">Cyber Defence (Blue Team) - "Malwr"</a>';
    }
    else if (input.includes("mapping")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#osi_mapping" target="_blank">Media &amp; Socials - "OSI Mapping"</a>';
    }
    else if (input.includes("mass")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#amass" target="_blank">Offensive Cyber (Red Team) - "Amass"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Offensive Cyber (Red Team) - "Masscan"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Offensive Cyber (Red Team) - "Massdns"</a>';
    }
    else if (input.includes("masscan")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Offensive Cyber (Red Team) - "Masscan"</a>';
    }
    else if (input.includes("massdns")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Offensive Cyber (Red Team) - "MassDNS"</a>';
    }
    else if (input.includes("media")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#media" target="_blank">Threat Intelligence - "Media"</a>';
    }
    else if (input.includes("megator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#megator" target="_blank">Threat Intelligence - "Megator"</a>';
    }
    else if (input.includes("mem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Media &amp; Socials - "Making Memories Faster Response"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Cheat Sheets - "Memory Forensics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#memprocfs" target="_blank">Cyber Defence (Blue Team) - "MemProcFS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Cyber Defence (Blue Team) - "Volatility"</a>';
    }
    else if (input.includes("memory")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#memory_forensics" target="_blank">Cheat Sheets - "Memory Forensics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#making_memories_faster_response" target="_blank">Media &amp; Socials - "Making Memories Faster Response"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Cyber Defence (Blue Team) - "Volatility"</a>';
    }
    else if (input.includes("memprocfs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#memprocfs" target="_blank">Cyber Defence (Blue Team) - "MemProcFS"</a>';
    }
    else if (input.includes("metasploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#metasploit" target="_blank">Cheat Sheets - "Metasploit"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable3" target="_blank">Virtual Machines - "Metasploitable3"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable2" target="_blank">Virtual Machines - "Metasploitable2"</a>';
    }
    else if (input.includes("metasploitable")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable3" target="_blank">Virtual Machines - "Metasploitable3"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#metasploitable2" target="_blank">Virtual Machines - "Metasploitable2"</a>';
    }
    else if (input.includes("methodology")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#bug_hunters_methodology" target="_blank">Media &amp; Socials - "Bug Hunters Methodology"</a>';
    }
    else if (input.includes("mfasweep")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#mfasweep" target="_blank">Offensive Cyber (Red Team) - "mfasweep"</a>';
    }
    else if (input.includes("mft")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#analyzemft" target="_blank">Cyber Defence (Blue Team) - "analyzemft"</a>';
    }
    else if (input.includes("mirage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_security_mirage" target="_blank">Media &amp; Socials - "The Security Mirage"</a>';
    }
    else if (input.includes("misp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#misp" target="_blank">Threat Intelligence - "MISP"</a>';
    }
    else if (input.includes("mitigations")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_cred_attacks_mitigations" target="_blank">Media &amp; Socials - "Windows Cred. Attacks Mitigations"</a>';
    }
    else if (input.includes("mitm6") || input.includes("mitm") || input.includes("man in the middle") || input.includes("man-in-the-middle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#mitm6" target="_blank">Offensive Cyber (Red Team) - "mitm6"</a>';
    }
    else if (input.includes("mitre")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attack_framework" target="_blank">Cyber Defence (Blue Team) - "ATT&CK Framework"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#attack_navigator" target="_blank">Cyber Defence (Blue Team) - "ATT&CK Navigator"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#d3fend" target="_blank">Cyber Defence (Blue Team) - "D3FEND"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#engage" target="_blank">Cyber Defence (Blue Team) - "Engage"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - "Ten Strategies of a World-Class CSOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#mitre_attack_mapping" target="_blank">Publications - "MITRE ATT&CK Mapping"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_framework" target="_blank">Projects - "ATT&CK Framework"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_navigator" target="_blank">Projects - "ATT&CK Navigator"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#d3fend" target="_blank">Projects - "D3FEND"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#engage" target="_blank">Projects - "Engage"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#caldera" target="_blank">Projects - "Caldera"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#caldera" target="_blank">Offensive Cyber (Red Team) - "Caldera"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/training.html#cybrary" target="_blank">Training - "Cybrary"</a>';
    }
    else if (input.includes("module")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#running_processes_and_modules" target="_blank">Publications - "Running Processes and Modules"</a>';
    }
    else if (input.includes("monitor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#api_monitor" target="_blank">Cyber Defence (Blue Team) - "API Monitor"</a>';
    }
    else if (input.includes("muraena")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#muraena" target="_blank">Offensive Cyber (Red Team) - "Muraena"</a>';
    }
    else if (input.includes("n00py")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#n00py" target="_blank">Publications - "N00py"</a>';
    }
    else if (input.includes("nagios")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nagios" target="_blank">Cyber Defence (Blue Team) - "Nagios"</a>';
    }
    else if (input.includes("nano")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#nano" target="_blank">Cheat Sheets - "Nano"</a>';
    }
    else if (input.includes("navigator")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#attack_navigator" target="_blank">Projects - "ATT&CK Navigator"</a>';
    }
    else if (input.includes("necrobrowser")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#necrobrowser" target="_blank">Offensive Cyber (Red Team) - "Necrobrowser"</a>';
    }
    else if (input.includes("needle") || input.includes("needles") || input.includes("needlestack") || input.includes("needlestacks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#needles_in_needlestacks" target="_blank">Media &amp; Socials - "Needles in Needlestacks"</a>';
    }
    else if (input.includes("nessus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nessus" target="_blank">Cyber Defence (Blue Team) - "Nessus"</a>';
    }
    else if (input.includes("netcat")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#netcat" target="_blank">Cheat Sheets - "Netcat"</a>';
    }
    else if (input.includes("nirsoft")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nirsoft_suite" target="_blank">Cyber Defence (Blue Team) - "Nirsoft Suite"</a>';
    }
    else if (input.includes("nist")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#nist_ir_framework" target="_blank">Media &amp; Socials - "NIST IR Framework"</a>';
    }
    else if (input.includes("nmap")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#nmap" target="_blank">Cheat Sheets - "nmap"</a>';
    }
    else if (input.includes("node")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#node_red" target="_blank">Threat Intelligence - "Node Red"</a>';
    }
    else if (input.includes("nsa")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">Media &amp; Socials - "NSA Betrayed the World\'s Trust"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_responds_to_snowdon" target="_blank">Media &amp; Socials - "NSA Responds to Snowdon"</a>';
    }
    else if (input.includes("oalabs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#oalabs" target="_blank">Media &amp; Socials - "Oalabs"</a>';
    }
    else if (input.includes("obfuscation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#windows_command_line_obfuscation" target="_blank">Media &amp; Socials - "Windows Command Line Obfuscation"</a>';
    }
    else if (input.includes("offensive")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#offensive_security" target="_blank">Media &amp; Socials - "Offensive Security"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#sans_offensive_ops" target="_blank">Media &amp; Socials - "SANS Offensive Ops"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#offensive_security" target="_blank">Media &amp; Socials - "Offensive Security"</a>';
    }
    else if (input.includes("oledump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#oledump" target="_blank">Cheat Sheets - "oledump"</a>';
    }
    else if (input.includes("oletools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#oletools" target="_blank">Cyber Defence (Blue Team) - "oletools"</a>';
    }
    else if (input.includes("ollydbg") || input.includes("olly")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ollydbg" target="_blank">Cyber Defence (Blue Team) - "OllyDBG"</a>';
    }
    else if (input.includes("onion") || input.includes("security onion")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#security_onion" target="_blank">Cyber Defence (Blue Team) - "Security Onion"</a>';
    }
    else if (input.includes("onyphe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#onyphe" target="_blank">Threat Intelligence - "Onyphe"</a>';
    }
    else if (input.includes("ooda") || input.includes("ooda loop")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#using_ooda_loop_in_ir" target="_blank">Publications - "Using OODA Loop in IR"</a>';
    }
    else if (input.includes("open")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#open_soc" target="_blank">Media &amp; Socials - "Open SOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#open_soc" target="_blank">Cyber Defence (Blue Team) - "Open SOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#openvas" target="_blank">Cyber Defence (Blue Team) - "OpenVAS"</a>';
    }
    else if (input.includes("openvas")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#openvas" target="_blank">Cyber Defence (Blue Team) - "OpenVAS"</a>';
    }
    else if (input.includes("order") || input.includes("search order") || input.includes("search order hijacking") || input.includes("sho") || input.includes("identifying")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#identifying_search_order_hijacking" target="_blank">Publications - "Identifying Search Order Hijacking"</a>';
    }
    else if (input.includes("osint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#infosec_osint_show" target="_blank">Threat Intelligence - "Infosec OSINT Show"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_bunker" target="_blank">Threat Intelligence - "OSINT Bunker"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#osint_curious" target="_blank">Threat Intelligence - "OSINT Curious"</a>';
    }
    else if (input.includes("ossem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#ossem" target="_blank">Projects - "ossem"</a>';
    }
    else if (input.includes("osxpmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#osxpmem" target="_blank">Cyber Defence (Blue Team) - "osxpmem"</a>';
    }
    else if (input.includes("owasp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#owasp" target="_blank">Projects - "OWASP"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">Publications - "OWASP Testing Guide"</a>';
    }
    else if (input.includes("packettotal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#packettotal" target="_blank">Cyber Defence (Blue Team) - "PacketTotal"</a>';
    }
    else if (input.includes("pafish")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#pafish" target="_blank">Offensive Cyber (Red Team) - "Pafish"</a>';
    }
    else if (input.includes("paladin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#paladin" target="_blank">Cyber Defence (Blue Team) - "Paladin"</a>';
    }
    else if (input.includes("parrotos")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#parrotos" target="_blank">Virtual Machines - "ParrotOS"</a>';
    }
    else if (input.includes("pastebin")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#pastebin" target="_blank">Threat Intelligence - "Pastebin"</a>';
    }
    else if (input.includes("payloads")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#payloads_all_the_things" target="_blank">Cheat Sheets - "Payloads all the Things"</a>';
    }
    else if (input.includes("pcodedmp")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pcodedmp" target="_blank">Cyber Defence (Blue Team) - "pcodedmp"</a>';
    }
    else if (input.includes("pdf")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pdf_parser" target="_blank">Cyber Defence (Blue Team) - "PDF Parser"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peepdf" target="_blank">Cyber Defence (Blue Team) - "Peepdf"</a>';
    }
    else if (input.includes("pe")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_bear" target="_blank">Cyber Defence (Blue Team) - "pe-bear"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_tree" target="_blank">Cyber Defence (Blue Team) - "pe-tree"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peframe" target="_blank">Cyber Defence (Blue Team) - "peframe"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">Cyber Defence (Blue Team) - "petools"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">Cyber Defence (Blue Team) - "pestudio"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#peepdf" target="_blank">Cyber Defence (Blue Team) - "peepdf"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pehash" target="_blank">Cyber Defence (Blue Team) - "pehash"</a>';
    }
    else if (input.includes("pentest") || input.includes("pen test") || input.includes("penetration") || input.includes("penetration testing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Media &amp; Socials - "Hacker\'s Physical Pentest Toolkit"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/vms.html#pentestbox" target="_blank">Virtual Machines - "Pentestbox"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/training.html#pentesteracademy" target="_blank">Training, CTFs &amp; Challenges - "Pentesteracademy"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#sample_pen_test_report" target="_blank">Offensive Cyber (Red Team) - "Sample Pen Test Report"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#penetration_testing" target="_blank">Posters - "Penetration Testing"</a>';
    }
    else if (input.includes("pentestbox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#pentestbox" target="_blank">Virtual Machines - "Pentestbox"</a>';
    }
    else if (input.includes("pentesteracademy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#pentesteracademy" target="_blank">Training, CTFs &amp; Challenges - "Pentesteracademy"</a>';
    }
    else if (input.includes("pestudio")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">Cyber Defence (Blue Team) - "pestudio"</a>';
    }
    else if (input.includes("petools")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">Cyber Defence (Blue Team) - "petools"</a>';
    }
    else if (input.includes("phil") || input.includes("hagen") || input.includes("phil hagen")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#phil_hagen" target="_blank">Media &amp; Socials - "Phil Hagen"</a>';
    }
    else if (input.includes("phish")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#phishing" target="_blank">Media &amp; Socials - "Phishing"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Cyber Defence (Blue Team) - "PhishingKitTracker"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#phishtool" target="_blank">Offensive Cyber (Red Team) - "Phishtool"</a>';
    }
    else if (input.includes("phishing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#phishing" target="_blank">Media &amp; Socials - "Phishing"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Cyber Defence (Blue Team) - "PhishingKitTracker"</a>';
    }
    else if (input.includes("phishingkittracker")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#phishingkittracker" target="_blank">Cyber Defence (Blue Team) - "Phishingkittracker"</a>';
    }
    else if (input.includes("phishtool")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#phishtool" target="_blank">Offensive Cyber (Red Team) - "Phishtool"</a>';
    }
    else if (input.includes("physical")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#hackers_physical_pentest_toolkit" target="_blank">Media &amp; Socials - "Hacker\'s Physical Pentest Toolkit"</a>';
    }
    else if (input.includes("picoctf")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#picoctf" target="_blank">Cyber Defence (Blue Team) - "Picoctf"</a>';
    }
    else if (input.includes("pivot") || input.includes("pivots") || input.includes("pivoting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#pivoting" target="_blank">Cheat Sheets - "Pivoting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pivots_payloads" target="_blank">Posters - "Pivots Payloads"</a>';
    }
    else if (input.includes("plaso") || input.includes("log2timeline") || input.includes("l2t")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#plaso" target="_blank">Cheat Sheets - "Plaso"</a>';
    }
    else if (input.includes("playbooks") || input.includes("playbook")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#ir_playbooks" target="_blank">Media &amp; Socials - "IR Playbooks"</a>';
    }
    else if (input.includes("pmat") || input.includes("walkthroughs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#pmat_labs_walkthroughs" target="_blank">Publications - "PMAT Labs Walkthroughs"</a>';
    }
    else if (input.includes("ports")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#common_ports" target="_blank">Cheat Sheets - "Common Ports"</a>';
    }
    else if (input.includes("post exploitation")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#post" target="_blank">Cheat Sheets - "Post"</a>';
    }
    else if (input.includes("posters")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#posters" target="_blank">Threat Intelligence - "Posters"</a>';
    }
    else if (input.includes("power") || input.includes("power") || input.includes("powershell") || input.includes("power shell")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powershell_core" target="_blank">Cyber Defence (Blue Team) - "Powershell Core"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#blue_team_powershell" target="_blank">Cyber Defence (Blue Team) - "Blue Team Powershell"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">Cyber Defence (Blue Team) - "PowerForensics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">Cyber Defence (Blue Team) - "PowerForensics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#empire" target="_blank">Offensive Cyber (Red Team) - "PowerShell Empire"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#powershell_wmic" target="_blank">Offensive Cyber (Red Team) - "PowerShell &amp; WMIC"</a>';
    }
    else if (input.includes("powerforensics")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#powerforensics" target="_blank">Cyber Defence (Blue Team) - "PowerForensics"</a>';
    }
    else if (input.includes("powersploit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#powersploit" target="_blank">Offensive Cyber (Red Team) - "PowerSploit"</a>';
    }
    else if (input.includes("privacytools") || input.includes("privacy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#privacytools" target="_blank">Threat Intelligence - "PrivacyTools"</a>';
    }
    else if (input.includes("procdot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#procdot" target="_blank">Cyber Defence (Blue Team) - "procdot"</a>';
    }
    else if (input.includes("processes")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_processes" target="_blank">Cheat Sheets - "Windows Processes"</a>';
    }
    else if (input.includes("protonmail")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#protonmail" target="_blank">Threat Intelligence - "Protonmail"</a>';
    }
    else if (input.includes("proxy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#web_proxy_event_analysis" target="_blank">Cheat Sheets - "Web Proxy Event Analysis"</a>';
    }
    else if (input.includes("publicwww")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#publicwww" target="_blank">Threat Intelligence - "PublicWWW"</a>';
    }
    else if (input.includes("pulsedive")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#pulsedive" target="_blank">Threat Intelligence - "Pulsedive"</a>';
    }
    else if (input.includes("radare2")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#radare2" target="_blank">Cyber Defence (Blue Team) - "radare2"</a>';
    }
    else if (input.includes("range") || input.includes("rangeforce")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#rangeforce" target="_blank">Threat Intelligence - "Rangeforce"</a>';
    }
    else if (input.includes("ransom") || input.includes("ransomware")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#no_more_ransom" target="_blank">Projects - "No More Ransom"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_risk_management" target="_blank">Publications - "Ransomware Risk Management"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Publications - "Growing Threat of Human Operated Ransomware"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_response" target="_blank">Publications - "Ransomware Response"</a>';
    }
    else if (input.includes("rebels")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#what_rebels_want" target="_blank">Media &amp; Socials - "What Rebels Want"</a>';
    }
    else if (input.includes("redhunt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#redhunt_os" target="_blank">Cyber Defence (Blue Team) - "Redhunt OS"</a>';
    }
    else if (input.includes("redline")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#redline" target="_blank">Cyber Defence (Blue Team) - "Redline"</a>';
    }
    else if (input.includes("regex") || input.includes("regular") || input.includes("expression") || input.includes("regular expression")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#hex_regex" target="_blank">Cheat Sheets - "HEX/regex"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#regex" target="_blank">Cheat Sheets - "regex"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#hex_regex" target="_blank">Cyber Defence (Blue Team) - "HEX/regex"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex" target="_blank">Cyber Defence (Blue Team) - "regex"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex101" target="_blank">Cyber Defence (Blue Team) - "regex101"</a>';
    }
    else if (input.includes("regex101") || input.includes("101")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regex101" target="_blank">Cyber Defence (Blue Team) - "regex101"</a>';
    }
    else if (input.includes("registry")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#registry_viewer" target="_blank">Cyber Defence (Blue Team) - "Registry Viewer"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regripper" target="_blank">Cyber Defence (Blue Team) - "regripper"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regshot" target="_blank">Cyber Defence (Blue Team) - "Regshot"</a>';
    }
    else if (input.includes("regripper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regripper" target="_blank">Cyber Defence (Blue Team) - "regripper"</a>';
    }
    else if (input.includes("regshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#regshot" target="_blank">Cyber Defence (Blue Team) - "Regshot"</a>';
    }
    else if (input.includes("remnux")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#remnux" target="_blank">Cheat Sheets - "REMnux"</a>';
    }
    else if (input.includes("remoting") || input.includes("wmi remoting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#wmi_remoting" target="_blank">Media &amp; Socials - "WMI Remoting"</a>';
    }
    else if (input.includes("reply") || input.includes("spam")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#when_you_reply_to_spam" target="_blank">Media &amp; Socials - "When you Reply to Spam"</a>';
    }
    else if (input.includes("responds") || input.includes("snowdon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_responds_to_snowdon" target="_blank">Media &amp; Socials - "NSA Responds to Snowdon"</a>';
    }
    else if (input.includes("reverse") || input.includes("engineering") || input.includes("reverse engineering")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#reverse_engineering" target="_blank">Cheat Sheets - "Reverse Engineering"</a>';
    }
    else if (input.includes("riskiq")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#riskiq" target="_blank">Threat Intelligence - "RiskIQ"</a>';
    }
    else if (input.includes("rita")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#rita" target="_blank">Cheat Sheets - "RITA"</a>';
    }
    else if (input.includes("roadmap")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#training_roadmap" target="_blank">Posters - "Training Roadmap"</a>';
    }
    else if (input.includes("root")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#root_me" target="_blank">Training, CTFs &amp; Challenges - "Root Me"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#hacking_exposed_malware_and_rootkits" target="_blank">Publications - "Hacking Exposed Malware and Rootkits"</a>';
    }
    else if (input.includes("roundup")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#red_team_tool_roundup" target="_blank">Offensive Cyber (Red Team) - "Red Team Tool Roundup"</a>';
    }
    else if (input.includes("rtfdump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#rtfdump" target="_blank">Cyber Defence (Blue Team) - "rtfdump"</a>';
    }
    else if (input.includes("run") || input.includes("anyrun") || input.includes("any run")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#any_run" target="_blank">Cyber Defence (Blue Team) - "Any Run"</a>';
    }
    else if (input.includes("russia") || input.includes("us election")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_russia_hacked_the_us_election" target="_blank">Media &amp; Socials - "How Russia Hacked the US Election"</a>';
    }
    else if (input.includes("sample") || input.includes("report")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#sample_pen_test_report" target="_blank">Offensive Cyber (Red Team) - "Sample Pen Test Report"</a>';
    }
    else if (input.includes("sandworm")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#sandworm" target="_blank">Publications - "Sandworm"</a>';
    }
    else if (input.includes("sans") || input.includes("institute")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#sans_institute" target="_blank">Threat Intelligence - "SANS Institute"</a>';
    }
    else if (input.includes("scanner") || input.includes("scanners")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Offensive Cyber (Red Team) - "Angry IP Scanner"</a>';
    }
    else if (input.includes("scapy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#scapy" target="_blank">Cheat Sheets - "Scapy"</a>';
    }
    else if (input.includes("schneier") | input.includes("bruce") || input.includes("bruce schneier")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#schneier_on_security" target="_blank">Publications - "Schneier on Security"</a>';
    }
    else if (input.includes("scylla")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#scylla" target="_blank">Cyber Defence (Blue Team) - "Scylla"</a>';
    }
    else if (input.includes("seatbelt")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#seatbelt" target="_blank">Cyber Defence (Blue Team) - "Seatbelt"</a>';
    }
    else if (input.includes("secjuice")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#secjuice" target="_blank">Publications - "Secjuice"</a>';
    }
    else if (input.includes("seclists")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#seclists" target="_blank">Offensive Cyber (Red Team) - "Seclists"</a>';
    }
    else if (input.includes("secure")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_devops" target="_blank">Posters - "Secure Devops"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_web_app_testing" target="_blank">Posters - "Secure Web App Testing"</a>';
    }
    else if (input.includes("security")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#cloud_security_devops" target="_blank">Cheat Sheets - "Cloud Security Devops"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#security_architecture" target="_blank">Cheat Sheets - "Security Architecture"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#securityzines" target="_blank">Posters - "Securityzines"</a>';
    }
    else if (input.includes("securityzines")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#securityzines" target="_blank">Posters - "Securityzines"</a>';
    }
    else if (input.includes("sentinel")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sentinel_att_ck" target="_blank">Cyber Defence (Blue Team) - "Sentinel ATT&CK"</a>';
    }
    else if (input.includes("sharphound")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sharphound" target="_blank">Cheat Sheets - "Sharphound"</a>';
    }
    else if (input.includes("shehackspurple")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#shehackspurple" target="_blank">Media &amp; Socials - "Shehackspurple"</a>';
    }
    else if (input.includes("shellter")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#shellter" target="_blank">Offensive Cyber (Red Team) - "Shellter"</a>';
    }
    else if (input.includes("sherlock")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#sherlock" target="_blank">Threat Intelligence - "Sherlock"</a>';
    }
    else if (input.includes("shimcacheparser")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#shimcacheparser" target="_blank">Cyber Defence (Blue Team) - "ShimcacheParser"</a>';
    }
    else if (input.includes("shodan")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#shodan_dorks" target="_blank">Cheat Sheets - "Shodan Dorks"</a>';
    }
    else if (input.includes("force")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#powershell_light_side_of_the_force" target="_blank">Publications - "Powershell Light Side of the Force"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#rangeforce" target="_blank">Threat Intelligence - "Rangeforce"</a>';
    }
    else if (input.includes("the force") || input.includes("side")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#powershell_light_side_of_the_force" target="_blank">Publications - "Powershell Light Side of the Force"</a>';
    }
    else if (input.includes("sift")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sift" target="_blank">Cheat Sheets - "SIFT"</a>';
    }
    else if (input.includes("sigma")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma" target="_blank">Cyber Defence (Blue Team) - "SIGMA"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma2splunkalert" target="_blank">Cyber Defence (Blue Team) - "Sigma2SplunkAlert"</a>';
    }
    else if (input.includes("signatures")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#file_signatures" target="_blank">Cyber Defence (Blue Team) - "File Signatures"</a>';
    }
    else if (input.includes("silk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#silk" target="_blank">Cyber Defence (Blue Team) - "SILK"</a>';
    }
    else if (input.includes("skoudis") || input.includes("ed") || input.includes("ed skoudis")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#ed_skoudis" target="_blank">Media &amp; Socials - "Ed Skoudis"</a>';
    }
    else if (input.includes("skyark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#skyark" target="_blank">Cyber Defence (Blue Team) - "Skyark"</a>';
    }
    else if (input.includes("sleuth")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#the_sleuth_kit" target="_blank">Cyber Defence (Blue Team) - "The Sleuth Kit"</a>';
    }
    else if (input.includes("slide")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#slides" target="_blank">Publications - "Slides"</a>';
    }
    else if (input.includes("slingshot")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/vms.html#slingshot" target="_blank">Virtual Machines - "Slingshot"</a>';
    }
    else if (input.includes("smartphone")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#smartphone_forensics" target="_blank">Posters - "Smartphone Forensics"</a>';
    }
    else if (input.includes("smb")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#smb_access_from_linux" target="_blank">Cheat Sheets - "SMB Access from Linux"</a>';
    }
    else if (input.includes("snaffler")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#snaffler" target="_blank">Offensive Cyber (Red Team) - "Snaffler"</a>';
    }
    else if (input.includes("snort")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#snort" target="_blank">Cyber Defence (Blue Team) - "Snort"</a>';
    }
    else if (input.includes("soar") || input.includes("shuffle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#soar_with_shuffle" target="_blank">Media &amp; Socials - "SOAR with Shuffle"</a>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">Threat Intelligence - "SOC Investigation"</a>';
    }
    else if (input.includes("spectreops")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#spectreops" target="_blank">Training, CTFs &amp; Challenges - "Spectreops"</a>';
    }
    else if (input.includes("spidermonkey")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#spidermonkey" target="_blank">Cyber Defence (Blue Team) - "Spidermonkey"</a>';
    }
    else if (input.includes("spl")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#spl_splunk" target="_blank">Cheat Sheets - "SPL Splunk"</a>';
    }
    else if (input.includes("splunk")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#spl_splunk" target="_blank">Cheat Sheets - "SPL Splunk"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sigma2splunkalert" target="_blank">Cyber Defence (Blue Team) - "Sigma2SplunkAlert"</a>';
    }
    else if (input.includes("spyse")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#spyse" target="_blank">Threat Intelligence - "Spyse"</a>';
    }
    else if (input.includes("sqlite")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sqlite" target="_blank">Cheat Sheets - "Sqlite"</a>';
    }
    else if (input.includes("ssdeep")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ssdeep" target="_blank">Cyber Defence (Blue Team) - "SSDeep"</a>';
    }
    else if (input.includes("steghide")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#steghide" target="_blank">Cyber Defence (Blue Team) - "Steghide"</a>';
    }
    else if (input.includes("strand")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#john_strand" target="_blank">Media &amp; Socials - "John Strand"</a>';
    }
    else if (input.includes("studio")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pestudio" target="_blank">Cyber Defence (Blue Team) - "pestudio"</a>';
    }
    else if (input.includes("subbrute")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#subbrute" target="_blank">Offensive Cyber (Red Team) - "Subbrute"</a>';
    }
    else if (input.includes("subdomain")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#subdomain_enumeration" target="_blank">Offensive Cyber (Red Team) - "Subdomain Enumeration"</a>';
    }
    else if (input.includes("suite")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#didierstevens_suite" target="_blank">Cyber Defence (Blue Team) - "Didierstevens Suite"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#nirsoft_suite" target="_blank">Cyber Defence (Blue Team) - "Nirsoft Suite"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#burp_suite" target="_blank">Cheat Sheets - "Burp Suite"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sysinternals_suite" target="_blank">Cyber Defence (Blue Team) - "Sysinternals Suite"</a>';
    }
    else if (input.includes("sumrecon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#sumrecon" target="_blank">Offensive Cyber (Red Team) - "Sumrecon"</a>';
    }
    else if (input.includes("supermem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#supermem" target="_blank">Cyber Defence (Blue Team) - "Supermem"</a>';
    }
    else if (input.includes("suricata")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#suricata" target="_blank">Cyber Defence (Blue Team) - "Suricata"</a>';
    }
    else if (input.includes("swiss")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#swiss_hacking_challenge" target="_blank">Cyber Defence (Blue Team) - "Swiss Hacking Challenge"</a>';
    }
    else if (input.includes("synapsint")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#synapsint" target="_blank">Threat Intelligence - "Synapsint"</a>';
    }
    else if (input.includes("sysinternals")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#sysinternals_suite" target="_blank">Cyber Defence (Blue Team) - "Sysinternals Suite"</a>';
    }
    else if (input.includes("sysmon")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sysmon" target="_blank">Cheat Sheets - "Sysmon"</a>';
    }
    else if (input.includes("tails")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#tails" target="_blank">Threat Intelligence - "Tails"</a>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tcp_ip_tcpdump" target="_blank">Cheat Sheets - "TCP/IP Tcpdump"</a>';
    }
    else if (input.includes("tcpdump")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tcpdump" target="_blank">Cheat Sheets - "Tcpdump"</a>';
    }
    else if (input.includes("technology")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#basis_technology" target="_blank">Cyber Defence (Blue Team) - "Basis Technology"</a>';
    }
    else if (input.includes("templates")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#templates" target="_blank">Publications - "Templates"</a>';
    }
    else if (input.includes("theharvester")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#theharvester" target="_blank">Offensive Cyber (Red Team) - "TheHarvester"</a>';
    }
    else if (input.includes("thehive")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#thehive" target="_blank">Cyber Defence (Blue Team) - "TheHive"</a>';
    }
    else if (input.includes("thephish")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#thephish" target="_blank">Offensive Cyber (Red Team) - "ThePhish"</a>';
    }
    else if (input.includes("thezoo")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#thezoo" target="_blank">Cyber Defence (Blue Team) - "TheZoo"</a>';
    }
    else if (input.includes("threat") || input.includes("threats")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">Threat Intelligence - "ThreatCrowd"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - "Threatfeeds IO"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Projects - "Threathunting Project"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threat Intelligence - "Threatpursuit"</a>';
    }
    else if (input.includes("threatcrowd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">Threat Intelligence - "ThreatCrowd"</a>';
    }
    else if (input.includes("threatfeeds")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - "Threatfeeds IO"</a>';
    }
    else if (input.includes("threathunting")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Projects - "Threathunting Project"</a>';
    }
    else if (input.includes("threatpursuit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threat Intelligence - "Threatpursuit"</a>';
    }
    else if (input.includes("online") || input.includes("three") || input.includes("types")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#three_types_of_online_attacks" target="_blank">Media &amp; Socials - "Three Types of Online Attacks"</a>';
    }
    else if (input.includes("timesketch")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#timesketch" target="_blank">Cyber Defence (Blue Team) - "Timesketch"</a>';
    }
    else if (input.includes("tls") || input.includes("decrypt") || input.includes("decrypting") | input.includes("streams") || input.includes("decrypting tls") || input.includes("tls streams")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#decrypt_tls_streams" target="_blank">Publications - "Decrypt TLS Streams"</a>';
    }
    else if (input.includes("tools") || input.includes("tool")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#eric_zimmerman_tools" target="_blank">Cheat Sheets - "Eric Zimmerman Tools"</a><br></><a href="https://oscybershop.herokuapp.com/main/pages/media.html#eztools_kape" target="_blank">Media &amp; Socials - "EZtools Kape"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#oletools" target="_blank">Cyber Defence (Blue Team) - "Oletools"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#petools" target="_blank">Cyber Defence (Blue Team) - "petools"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#privacytools" target="_blank">Threat Intelligence - "PrivacyTools"</a>';
    }
    else if (input.includes("trace") || input.includes("labs")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#trace_labs" target="_blank">Threat Intelligence - "Trace Labs"</a>';
    }
    else if (input.includes("track") || input.includes("tracker")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#feodo_tracker" target="_blank">Threat Intelligence - "Feodo Tracker"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#tracking_our_online_trackers" target="_blank">Media &amp; Socials - "Tracking our Online Trackers"</a>';
    }
    else if (input.includes("training") || input.includes("train")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#training" target="_blank">Threat Intelligence - "Training"</a>';
    }
    else if (input.includes("tree")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#pe_tree" target="_blank">Cyber Defence (Blue Team) - "pe-tree"</a>';
    }
    else if (input.includes("triage") || input.includes("cyber triage") || input.includes("cybertriage")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#cyber_triage" target="_blank">Publications - "Cyber Triage"</a>';
    }
    else if (input.includes("trid")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#trid" target="_blank">Cyber Defence (Blue Team) - "TrID"</a>';
    }
    else if (input.includes("trilium")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#trilium" target="_blank">Offensive Cyber (Red Team) - "Trilium"</a>';
    }
    else if (input.includes("tryhackme")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#tryhackme" target="_blank">Media &amp; Socials - "TryHackMe"</a>';
    }
    else if (input.includes("tsurugi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#tsurugi" target="_blank">Cyber Defence (Blue Team) - "Tsurugi"</a>';
    }
    else if (input.includes("tweetscraper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#tweetscraper" target="_blank">Threat Intelligence - "TweetScraper"</a>';
    }
    else if (input.includes("tzworks")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#tzworks" target="_blank">Cheat Sheets - "TZworks"</a>';
    }
    else if (input.includes("udemy")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#udemy" target="_blank">Threat Intelligence - "Udemy"</a>';
    }
    else if (input.includes("uniq") || input.includes("sort")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sort_uniq" target="_blank">Cheat Sheets - "Sort/Uniq"</a>';
    }
    else if (input.includes("unit")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unit42_playbook_viewer" target="_blank">Projects - "Unit42 Playbook Viewer"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#apt1:_exposing_one_of_china_s_cyber_espionage_units" target="_blank">Publications - "APT1: Exposing One of China\'s Cyber Espionage Units"</a>';
    }
    else if (input.includes("unit42") || input.includes("playbook") || input.includes("viewer") || input.includes("playbook viewer")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unit42_playbook_viewer" target="_blank">Projects - "Unit42 Playbook Viewer"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#unit42_playbook_viewer" target="_blank">Cyber Defence (Blue Team) - "Unit42 Playbook Viewer"</a>';
    }
    else if (input.includes("unprotect")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#unprotect" target="_blank">Projects - "Unprotect"</a>';
    }
    else if (input.includes("url")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlhaus" target="_blank">Threat Intelligence - "urlhaus"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Threat Intelligence - "urlscan"</a>';
    }
    else if (input.includes("urlhaus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlhaus" target="_blank">Threat Intelligence - "Urlhaus"</a>';
    }
    else if (input.includes("urlscan")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Threat Intelligence - "Urlscan"</a>';
    }
    else if (input.includes("velociraptor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#velociraptor" target="_blank">Cyber Defence (Blue Team) - "Velociraptor"</a>';
    }
    else if (input.includes("via")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Media &amp; Socials - "Threat Hunting via Sysmon"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - "Threat Hunting via DNS"</a>';
    }
    else if (input.includes("vim")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#vim" target="_blank">Cheat Sheets - "Vim"</a>';
    }
    else if (input.includes("viper")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#viper" target="_blank">Cyber Defence (Blue Team) - "Viper"</a>';
    }
    else if (input.includes("virus")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#fighting_viruses_defending_the_net" target="_blank">Media &amp; Socials - "Fighting Viruses Defending the Net"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#virussign" target="_blank">Cyber Defence (Blue Team) - "virussign"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#virustotal" target="_blank">Threat Intelligence - "VirusTotal"</a>';
    }
    else if (input.includes("virussign")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#virussign" target="_blank">Cyber Defence (Blue Team) - "virussign"</a>';
    }
    else if (input.includes("virustotal")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#virustotal" target="_blank">Threat Intelligence - "VirusTotal"</a>';
    }
    else if (input.includes("volatility")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#volatility" target="_blank">Cyber Defence (Blue Team) - "Volatility"</a>';
    }
    else if (input.includes("vscode")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#vscode" target="_blank">Threat Intelligence - "vscode"</a>';
    }
    else if (input.includes("vt") || input.includes("file") || input.includes("modifiers")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#vt_file_search_modifiers" target="_blank">Cheat Sheets - "VT File Search Modifiers"</a>';
    }
    else if (input.includes("vulnhub")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/training.html#vulnhub" target="_blank">Training, CTFs &amp; Challenges - "Vulnhub"</a>';
    }
    else if (input.includes("weaponizing") || input.includes("weapon") || input.includes("deep web") || input.includes("dark web")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - "Weaponizing the Deep Web"</a>';
    }
    else if (input.includes("wela")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wela" target="_blank">Cyber Defence (Blue Team) - "WELA"</a>';
    }
    else if (input.includes("what2log")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#what2log" target="_blank">Projects - "What2Log"</a>';
    }
    else if (input.includes("whatsmyname")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#whatsmyname" target="_blank">Threat Intelligence - "WhatsMyName"</a>';
    }
    else if (input.includes("wigle")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#wigle" target="_blank">Threat Intelligence - "Wigle"</a>';
    }
    else if (input.includes("wiki")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#wiki" target="_blank">Threat Intelligence - "Wiki"</a>';
    }
    else if (input.includes("win")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_forensics" target="_blank">Cyber Defence (Blue Team) - "Windows Forensics"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_third_party_apps" target="_blank">Cyber Defence (Blue Team) - "Windows Third Party Apps"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_cred_attacks_mitigations" target="_blank">Cyber Defence (Blue Team) - "Windows Cred. Attacks Mitigations"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Cyber Defence (Blue Team) - "Winpmem"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Cyber Defence (Blue Team) - "Windbg"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_cli" target="_blank">Cyber Defence (Blue Team) - "Windows CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_linux_cli" target="_blank">Cyber Defence (Blue Team) - "Windows Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows" target="_blank">Cyber Defence (Blue Team) - "Windows"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_2k" target="_blank">Cyber Defence (Blue Team) - "Windows 2k"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windows_processes" target="_blank">Cyber Defence (Blue Team) - "Windows Processes"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheatsheets - "Windows & Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Cheatsheets = "Windows CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#powershell_wmic" target="_blank">Cheatsheets - "PowerShell & WMIC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#ids" target="_blank">Cheatsheets - "Intrusion Detection"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - "DFIR & Threat Hunting"</a>';
    }
    else if (input.includes("windbg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Cyber Defence (Blue Team) - "Windbg"</a>';
    }
    else if (input.includes("windows")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_linux_cli" target="_blank">Cheat Sheets - "Windows Linux CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_cli" target="_blank">Cheat Sheets - "Windows CLI"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows" target="_blank">Cheat Sheets - "Windows"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_2k" target="_blank">Cheat Sheets - "Windows 2k"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#windows_processes" target="_blank">Cheat Sheets - "Windows Processes"</a>';
    }
    else if (input.includes("winpmem")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#winpmem" target="_blank">Cyber Defence (Blue Team) - "Winpmem"</a>';
    }
    else if (input.includes("wireshark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wireshark" target="_blank">Cyber Defence (Blue Team) - "Wireshark"</a>';
    }
    else if (input.includes("wondersmith_rae")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#wondersmith_rae" target="_blank">Publications - "Wondersmith Rae"</a>';
    }
    else if (input.includes("wql")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wql_sql_for_wmi)" target="_blank">Cyber Defence (Blue Team) - "WQL/SQL for WMI)"</a>';
    }
    else if (input.includes("writing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#writing_tips" target="_blank">Cheat Sheets - "Writing Tips"</a>';
    }
    else if (input.includes("wscript")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wscript" target="_blank">Cyber Defence (Blue Team) - "Wscript"</a>';
    }
    else if (input.includes("x64dbg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#x64dbg" target="_blank">Cyber Defence (Blue Team) - "X64dbg"</a>';
    }
    else if (input.includes("xiao")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xiao_steganography" target="_blank">Cyber Defence (Blue Team) - "Xiao Steganography"</a>';
    }
    else if (input.includes("xss")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#the_xss_rat" target="_blank">Media &amp; Socials - "The XSS Rat"</a>';
    }
    else if (input.includes("xxd")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#xxd" target="_blank">Cyber Defence (Blue Team) - "XXD"</a>';
    }
    else if (input.includes("yara")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#yara" target="_blank">Cyber Defence (Blue Team) - "Yara"</a>';
    }
    else if (input.includes("yeti")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#yeti" target="_blank">Threat Intelligence - "Yeti"</a>';
    }
    else if (input.includes("yomi")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#yomi" target="_blank">Cyber Defence (Blue Team) - "Yomi"</a>';
    }
    else if (input.includes("yuki")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#yuki_chan" target="_blank">Offensive Cyber (Red Team) - "Yuki Chan"</a>';
    }
    else if (input.includes("zero") || input.includes("zeroday") || input.includes("zero day") || input.includes("0day") || input.includes("0 day")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#countdown_to_zero_day" target="_blank">Publications - "Countdown to Zero Day"</a>';
    }
    else if (input.includes("zoomeye")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#zoomeye" target="_blank">Threat Intelligence - "Zoomeye"</a>';
    }
    else if (input.includes("api")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/projects.html#malapi" target="_blank">Projects - "Malapi"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#api_monitor" target="_blank">Cyber Defence (Blue Team) - "API Monitor"</a>';
    }
    else if (input.includes("assessment")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#security_assessment_findings_report" target="_blank">Publications - "Security Assessment Findings Report"</a>';
    }
    else if (input.includes("dark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#darknet_diaries" target="_blank">Media &amp; Socials - "Darknet Diaries"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - "Weaponizing the Deep Web"</a>';
    }
    else if (input.includes("dbg")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#ollydbg" target="_blank">Cyber Defence (Blue Team) - "OllyDBG"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#windbg" target="_blank">Cyber Defence (Blue Team) - "Windbg"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#x64dbg" target="_blank">Cyber Defence (Blue Team) - "X64dbg"</a>';
    }
    else if (input.includes("dns")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#dnstwist" target="_blank">Threat Intelligence - "DNStwist"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#dns_dumpster" target="_blank">Threat Intelligence - "DNS Dumpster"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#fakedns" target="_blank">Cyber Defence (Blue Team) - "FakeDNS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - "Threat Hunting via DNS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#massdns" target="_blank">Offensive Cyber (Red Team) - "Massdns"</a>';
    }
    else if (input.includes("hound")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#bloodhound" target="_blank">Cheat Sheets - "Bloodhound"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#sharphound" target="_blank">Cheat Sheets - "Sharphound"</a>';
    }
    else if (input.includes("mail")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#protonmail" target="_blank">Threat Intelligence - "Protonmail"</a>';
    }
    else if (input.includes("sandbox")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#joe_sandbox" target="_blank">Cyber Defence (Blue Team) - "Joe Sandbox"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#any_run" target="_blank">Cyber Defence (Blue Team) - "Any Run"</a>';
    }
    else if (input.includes("scan") || input.includes("scanner") || input.includes("scanners")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/red.html#angry_ip_scanner" target="_blank">Offensive Cyber (Red Team) - "Angry IP Scanner"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/red.html#masscan" target="_blank">Offensive Cyber (Red Team) - "Masscan"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#urlscan" target="_blank">Threat Intelligence - "Urlscan"</a>';
    }
    else if (input.includes("shark")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/blue.html#bruteshark" target="_blank">Cyber Defence (Blue Team) - "Bruteshark"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#wireshark" target="_blank">Cyber Defence (Blue Team) - "Wireshark"</a>';
    }
    else if (input.includes("soc")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/publications.html#building_a_better_soc" target="_blank">Publications - "Building a Better SOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#soc_core_skills" target="_blank">Cyber Defence (Blue Team) - "SOC Core Skills"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - "Ten Strategies of a World Class CSOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#soc_investigation" target="_blank">Threat Intelligence - "SOC Investigation"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#open_soc" target="_blank">Media &amp; Socials - "Open SOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#open_soc" target="_blank">Cyber Defence (Blue Team) - "Open SOC"</a>';
    }
    else if (input.includes("testing")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/posters.html#pen_testing_blueprints" target="_blank">Posters - Pen Testing Blueprints</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#owasp_testing_guide" target="_blank">Publications - "OWASP Testing Guide"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#penetration_testing" target="_blank">Posters - "Penetration Testing"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/posters.html#secure_web_app_testing" target="_blank">Posters - "Secure Web App Testing"</a>';
    }
    else if (input.includes("threat")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - "How Cyberattacks Threaten Real World"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/projects.html#threathunting_project" target="_blank">Projects - "Threathunting Project"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - "DFIR & Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/blue.html#acm_threat_hunting" target="_blank">Cyber Defence (Blue Team) - "ACM Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#demystifying_threat_hunting" target="_blank">Publications - "Demystifying Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#kansa_for_enterprise_scale_threat_hunting" target="_blank">Publications - "Kansa for Enterprise Scale Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_sysmon" target="_blank">Media &amp; Socials - "Threat Hunting via Sysmon"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#threat_hunting_via_dns" target="_blank">Media &amp; Socials - "Threat Hunting via DNS"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/cheatsheets.html#dfir" target="_blank">Cheatsheets - "DFIR & Threat Hunting"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#growing_threat_of_human_operated_ransomware" target="_blank">Publications - "Growing Threat of Human Operated Ransomware"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ransomware_response" target="_blank">Publications - "Ransomware Response"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatcrowd" target="_blank">Threat Intelligence - "ThreatCrowd"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatfeeds_io" target="_blank">Threat Intelligence - "Threatfeeds IO"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#threatpursuit" target="_blank">Threat Intelligence - "Threatpursuit"</a>';
    }
    else if (input.includes("world")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/media.html#nsa_betrayed_the_worlds_trust" target="_blank">Media &amp; Socials - "NSA Betrayed the World\'s Trust"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/publications.html#ten_strategies_of_a_world_class_csoc" target="_blank">Publications - "Ten Strategies of a World Class CSOC"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/media.html#how_cyberattacks_threaten_real_world" target="_blank">Media &amp; Socials - "How Cyberattacks Threaten Real World"</a>';
    }
    else if (input.includes("tor")) {
        result.innerHTML = '<a href="https://oscybershop.herokuapp.com/main/pages/int.html#megator" target="_blank">Threat Intelligence - "Megator"</a><br><a href="https://oscybershop.herokuapp.com/main/pages/int.html#weaponizing_the_deep_web" target="_blank">Threat Intelligence - "Weaponizing the Deep Web"</a>';
    }
    else {
        result.innerHTML = "";
    }
}