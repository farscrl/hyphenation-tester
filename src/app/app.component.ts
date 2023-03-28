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
  sourceText = "Il rumantsch grischun è la lingua da scrittira cuminaivla per tut ils idioms rumantschs. Sia basa è vegnida sviluppada l’onn 1982 dal linguist Heinrich Schmid sin iniziativa da la Lia Rumantscha. Dapi lura è il rumantsch grischun vegnì sviluppà cuntinuadamain. L’onn 1986 è il rumantsch grischun daventà lingua uffiziala da la Confederaziun per la communicaziun cun la populaziun rumantscha, e lura era lingua da scrittira uffiziala en il chantun Grischun. En las vischnancas rumantschas èn dentant ils idioms, savens sper il tudestg, restads la lingua uffiziala.\n" +
    "\n" +
    "L’avust 2003 ha il parlament chantunal dal Grischun decidì d’introducir il rumantsch grischun sco lingua da scrittira en las scolas rumantschas e d’edir novs meds d’instrucziun per las scolas rumantschas mo pli en rumantsch grischun. Fin a qua èn tut ils meds d’instrucziun vegnids edids en tut ils tschintg idioms tradiziunals. Ils onns da scola 2007, 2008 e 2009 han la Val Müstair, la Val d’Alvra ed il Surses sco era las vischnancas en la part sut da la Surselva (da Trin enfin la Foppa) cumenzà cun l’introducziun dal rumantsch grischun. L’onn 2011 è la decisiun d’edir ils meds da scola be pli en rumantsch grischun dentant fruntada sin ina vasta opposiziun ed ha necessità il Cussegl grond d’er resguardar puspè ils idioms tar l’ediziun da meds da scola obligatorics.";
  expectedText = "Il ru_mantsch gri_schun è la lin_gua da scrit_tira cu_mi_nai_vla per tut ils idioms ru_mantschs. Sia basa è ve_gnida svi_lup_pa_da l’onn 1982 dal lin_guist Hei_nrich Schmid sin ini_zia_ti_va da la Lia Ru_man_tscha. Dapi lu_ra è il ru_mantsch gri_schun ve_gnì svi_lup_pà cun_ti_nua_da_main. L’onn 1986 è il ru_mantsch gri_schun da_ven_tà lin_gua uf_fi_zia_la da la Con_fe_de_ra_ziun per la com_mu_ni_ca_ziun cun la po_pu_la_ziun ru_mantscha, e lu_ra era lin_gua da scrit_ti_ra uf_fi_zia_la en il chan_tun Gri_schun. En las visch_nan_cas ru_man_tschas èn den_tant ils idioms, sa_vens sper il tu_destg, re_stads la lin_gua uf_fi_zia_la.\n" +
    "\n" +
    "L’avust 2003 ha il par_la_ment chan_tu_nal dal Gri_schun de_ci_dì d’intro_du_cir il ru_mantsch gri_schun sco lin_gua da scrit_tira en las sco_las ruman_tschas e d’edir novs meds d’in_struc_ziun per las sco_las ru_man_tschas mo pli en ru_mantsch gri_schun. Fin a qua èn tut ils meds d’in_struc_ziun ve_gnids edids en tut ils tschintg idioms tra_di_ziu_nals. Ils onns da scola 2007, 2008 e 2009 han la Val Mü_stair, la Val d’Al_vra ed il Sur_ses sco era las vi_schnan_cas en la part sut da la Sur_sel_va (da Trin en_fin la Fop_pa) cumenzà cun l’intro_duc_ziun dal ru_mantsch gri_schun. L’onn 2011 è la de_ci_siun d’edir ils meds da sco_la be pli en ru_mantsch gri_schun den_tant frun_ta_da sin ina va_sta op_po_si_ziun ed ha ne_ces_si_tà il Cus_segl grond d’er re_sguar_dar pus_pè ils idioms tar l’edi_ziun da meds da sco_la obli_ga_to_rics.";
  diff = '';

  generatedText = '';

  rulePatterns: string = '';

  separationSign = '_';

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
