import { Component, OnInit } from '@angular/core';
import createHyphenator, {HyphenationFunctionSync, PatternsDefinition} from "hyphen";
import patternRmRumgr from "../patterns/pattern.rm-rumgr";
import { diffChars } from "diff";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sourceText = "Neofitas èn plantas importadas senza vulair u cun intenziun e ch'èn alura sa derasadas. Quellas pon procurar per problems e donns. Las palmas ch'ins vesa savens en il Tessin pon ins per exempel cumprar en la Landi. Questa palma deriva da la China ed ha num «palma da la fortuna». Ella è ina neofita che po daventar invasiva. En tscherts cas possia quai chaschunar problems, sco il perscrutader Boris Pezzatti da l'Institut federal per la perscrutaziun da guaud, naiv e cuntrada WSL declera. En lieus cun gronda spessezza da la palma poi dar ina reducziun da la flora e dal dumber da las spezias. Tuttina sajan questas palmas fitg popularas en Svizra. Surtut en ils curtins en il sid da las Alps dettia fitg bleras palmas neofitas. Popularas èn ellas perquai ch'ellas èn simplas da cultivar e perquai ch'ellas possian surviver tar temperaturas fitg bassas. Era sche las neofitas èn populars, pon ellas daventar in privel. Tuttina dastga la palma da la fortuna vegnir vendida, quai dentant mo cun risguardar tschertas reglas da cultivar. Cun in avis d'avertiment correspundent dastgan vegnir vendidas neofitas en il commerzi en detagl svizzer. Sch'ins resguarda questas reglas da cultivaziun alura saja ina derasaziun invasiva fitg improbabla, cunzunt en il nord da las Alps. Ma per schliar il problem stopp'ins chattar alternativas. Tenor Boris Pezzatti fissi il meglier da chattar autras palmas che na pon betg donnegiar la biodiversitad. Cun in studi vul il WSL chattar alternativas. Tut tenor pudessia er dar adattaziuns tar la lescha che reglescha tge ch'ins dastga metter en il liber, uschia ch'i dess in scumond da vender las palmas. En il Grischun sajan l'onn passà vegnidas annunziadas 39 differentas spezias da plantas neofitas. Tut en tut sajan enconuschentas passa 50 plantas neofitas en il Grischun, di Sascha Gregori ch'è manader dal management da neofitas tar l'Uffizi per la natira e l'ambient dal Grischun. Ina neofita, pia ina planta betg indigena vegnia pir definida sco invasiva sche quella caschunia donns. Ils donns che las plantas fan pon esser differents. Neofitas invasivas pon esser in privel per la biodiversitad cun prender davent il spazi da crescher a spezias indigenas. Dentant po er la sanadad dad animals ed umans esser periclitada da spezias tissias, uschia per exempel po l'Ambrosia caschunar fermas allergias. Ed er la qualitad dal pavel po vegnir mendra entras neofitas. Las lavurs da mantegniment da vias u trajects da viafier daventan pli intensivas cun quai ch'ins stoppia pliras giadas tagliar enavos plantas. Ed er ils guauds da protectziun sajan per part pertutgads. En il Grischun n'haja enfin uss betg gronds problems cun neozots, quai di Sascha Gregori. Ins fatschia in monitoring dals mustgins-thigher asiatics, da quels dettia magari in'accumulaziun en la Mesolcina. Quels sajan dentant cunzunt stentus e betg uschè privulus. ";
  expectedText = "Neo—fi—tas èn plan—tas im—por—ta—das sen—za vu—lair u cun in—ten—ziun e ch'èn alu—ra sa de—ra—sa—das. Quellas pon pro—cu—rar per pro—blems e donns. Las pal—mas ch'ins vesa sa—vens en il Tes—sin pon ins per ex—em—pel cum—prar en la Lan—di. Que—sta pal—ma de—ri—va da la Chi—na ed ha num «pal—ma da la for—tu—na». Ella è ina neo—fi—ta che po da—ven—tar in—va—si—va. En tscherts cas pos—sia quai cha—schu—nar pro—blems, sco il per—scru—ta—der Bo—ris Pezzatti da l'In—sti—tut fe—de—ral per la per—scru—ta—ziun da guaud, naiv e cun—tra—da WSL de—cle—ra. En lieus cun gron—da spes—sezza da la pal—ma poi dar ina re—duc—ziun da la flo—ra e dal dum—ber da las spe—zias. Tutti—na sa—jan que—stas pal—mas fitg po—pu—la—ras en Sviz—ra. Sur—tut en ils cur—tins en il sid da las Alps dettia fitg ble—ras pal—mas neo—fi—tas. Po—pu—la—ras èn ellas per—quai ch'ellas èn sim—plas da cul—ti—var e per—quai ch'ellas pos—sian sur—vi—ver tar tem—pe—ra—tu—ras fitg bas—sas. Era sche las neo—fi—tas èn po—pu—lars, pon ellas da—ven—tar in pri—vel. Tutti—na da—stga la pal—ma da la for—tu—na ve—gnir ven—di—da, quai den—tant mo cun ri—sguar—dar tscher—tas re—glas da cul—ti—var. Cun in avis d'aver—ti—ment corre—spun—dent da—stgan ve—gnir ven—di—das neo—fi—tas en il commer—zi en de—ta—gl svizzer. Sch'ins re—sguar—da que—stas re—glas da cul—ti—va—ziun alu—ra saja ina de—ra—sa—ziun in—va—si—va fitg im—pro—ba—bla, cun—zunt en il nord da las Alps. Ma per schliar il pro—blem stopp'ins chattar al—ter—na—ti—vas. Te—nor Bo—ris Pezzatti fis—si il me—glier da chattar au—tras pal—mas che na pon betg donne—giar la bio—di—ver—si—tad. Cun in stu—di vul il WSL chattar al—ter—na—ti—vas. Tut te—nor pu—des—sia er dar adatta—ziuns tar la le—scha che re—gle—scha tge ch'ins da—stga metter en il li—ber, uschia ch'i dess in scu—mond da ven—der las pal—mas. En il Gri—schun sa—jan l'onn pas—sà ve—gni—das annun—zia—das 39 diffe—ren—tas spe—zias da plan—tas neo—fi—tas. Tut en tut sa—jan en—co—nu—schen—tas pas—sa 50 plan—tas neo—fi—tas en il Gri—schun, di Sa—scha Gre—go—ri ch'è ma—na—der dal ma—na—ge—ment da neo—fi—tas tar l'Uffi—zi per la na—ti—ra e l'am—bient dal Gri—schun. Ina neo—fi—ta, pia ina plan—ta betg in—di—ge—na ve—gnia pir de—fi—ni—da sco in—va—si—va sche quella ca—schu—nia donns. Ils donns che las plan—tas fan pon es—ser diffe—ren—ts. Neo—fi—tas in—va—si—vas pon es—ser in pri—vel per la bio—di—ver—si—tad cun pren—der da—vent il spa—zi da cre—scher a spe—zias in—di—ge—nas. Den—tant po er la sa—na—dad dad ani—mals ed umans es—ser pe—ri—cli—ta—da da spe—zias tis—sias, uschia per ex—em—pel po l'Am—bro—sia ca—schu—nar fer—mas aller—gias. Ed er la qua—li—tad dal pa—vel po ve—gnir men—dra en—tras neo—fi—tas. Las la—vurs da man—te—gni—ment da vias u tra—jec—ts da via—fier da—ven—tan pli in—ten—si—vas cun quai ch'ins stoppia pli—ras gia—das ta—gliar ena—vos plan—tas. Ed er ils guauds da pro—tec—tziun sa—jan per part per—tu—tgads. En il Gri—schun n'haja en—fin uss betg gronds pro—blems cun neo—zo—ts, quai di Sa—scha Gre—go—ri. Ins fa—tschia in mo—ni—to—ring dals mu—stgins-thi—gher asia—tics, da quels dettia ma—ga—ri in'accu—mu—la—ziun en la Me—sol—ci—na. Quels sa—jan den—tant cun—zunt sten—tus e betg uschè pri—vu—lus. ";

  diff = '';

  generatedText = '';

  rulePatterns: string = '';

  separationSign = '—';

  highlightSign = true;

  activeTab = "control";

  private hyphenator?: HyphenationFunctionSync;

  private readonly patternRomansh: PatternsDefinition;

  constructor() {
    this.patternRomansh = patternRmRumgr;
    this.rulePatterns = this.patternRomansh.patterns.join("\n");
  }

  ngOnInit() {
  }

  switchTab(newTab: string) {
    this.activeTab = newTab;
  }

  compare(): void {
    this.patternRomansh.patterns = this.rulePatterns.split("\n")
    this.hyphenator = createHyphenator(this.patternRomansh, { async: false, hyphenChar: this.separationSign }) as HyphenationFunctionSync;
    this.generatedText = this.hyphenator!(this.sourceText);

    const changes = diffChars(this.expectedText, this.generatedText);
    console.log(changes);

    this.diff = "";
    changes.forEach((part) => {
      // green for additions, red for deletions
      // grey for common parts
      const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
      this.diff += "<span class='" + color + "'>" + part.value + "</span>";
    });
  }
}
