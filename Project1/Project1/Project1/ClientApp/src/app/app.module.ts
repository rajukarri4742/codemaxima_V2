import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EvenOddComponent } from './basic_program/even-odd/even-odd.component';
import { GraterNumberComponent } from './basic_program/grater-number/grater-number.component';
import { SmallerNumberComponent } from './basic_program/smaller-number/smaller-number.component';
import { ReverseNumberComponent } from './basic_program/reverse-number/reverse-number.component';
import { PalindromeComponent } from './basic_program/palindrome/palindrome.component';
import { AmstrongNumberComponent } from './basic_program/amstrong-number/amstrong-number.component';
import { NeonNumberComponent } from './basic_program/neon-number/neon-number.component';
import { SpyNumberComponent } from './basic_program/spy-number/spy-number.component';
import { AutomorphicNumberComponent } from './basic_program/automorphic-number/automorphic-number.component';
import { FactorialComponent } from './basic_program/factorial/factorial.component';
import { PerfectNumberComponent } from './basic_program/perfect-number/perfect-number.component';
import { StrongNumberComponent } from './basic_program/strong-number/strong-number.component';
import { PrimeNumberComponent } from './basic_program/prime-number/prime-number.component';
import { FibinocciSeriesComponent } from './basic_program/fibinocci-series/fibinocci-series.component';
import { PronicNumberComponent } from './basic_program/pronic-number/pronic-number.component';
import { SunnyNumberComponent } from './basic_program/sunny-number/sunny-number.component';
import { TrimorphicNumberComponent } from './basic_program/trimorphic-number/trimorphic-number.component';
import { WeightedSumOfDigitsComponent } from './basic_program/weighted-sum-of-digits/weighted-sum-of-digits.component';
import { Pattren1Component } from './pattren/pattren1/pattren1.component';
import { Pattren2Component } from './pattren/pattren2/pattren2.component';
import { Pattren3Component } from './pattren/pattren3/pattren3.component';
import { Pattren4Component } from './pattren/pattren4/pattren4.component';
import { Pattren5Component } from './pattren/pattren5/pattren5.component';
import { Pattren6Component } from './pattren/pattren6/pattren6.component';
import { Pattren7Component } from './pattren/pattren7/pattren7.component';
import { Pattren8Component } from './pattren/pattren8/pattren8.component';
import { Pattren9Component } from './pattren/pattren9/pattren9.component';
import { Pattren10Component } from './pattren/pattren10/pattren10.component';
import { Pattren11Component } from './pattren/pattren11/pattren11.component';
import { Pattren12Component } from './pattren/pattren12/pattren12.component';
import { Pattren13Component } from './pattren/pattren13/pattren13.component';
import { Pattren14Component } from './pattren/pattren14/pattren14.component';
import { Pattren15Component } from './pattren/pattren15/pattren15.component';
import { VideoCommonComponent } from './video-common/video-common.component';
import { IntroductionComponent } from './methods/introduction/introduction.component';
import { ExampleComponent } from './methods/example/example.component';
import { EvenoddmethodComponent } from './methods/evenoddmethod/evenoddmethod.component';
import { RevnumbermethodComponent } from './methods/revnumbermethod/revnumbermethod.component';
import { PalindromemethodComponent } from './methods/palindromemethod/palindromemethod.component';
import { MethodoverloadingComponent } from './methods/methodoverloading/methodoverloading.component';
import { StaticComponent } from './arrays/static/static.component';
import { DynamicComponent } from './arrays/dynamic/dynamic.component';
import { ReadandprintComponent } from './arrays/readandprint/readandprint.component';
import { FindelementComponent } from './arrays/findelement/findelement.component';
import { KeycountComponent } from './arrays/keycount/keycount.component';
import { FindkeypositionsComponent } from './arrays/findkeypositions/findkeypositions.component';
import { MaxofarrayComponent } from './arrays/maxofarray/maxofarray.component';
import { MinofarrayComponent } from './arrays/minofarray/minofarray.component';
import { SecondmaxComponent } from './arrays/secondmax/secondmax.component';
import { ReverseofarrayComponent } from './arrays/reverseofarray/reverseofarray.component';
import { ReverseeachelementComponent } from './arrays/reverseeachelement/reverseeachelement.component';
import { CountprimesComponent } from './arrays/countprimes/countprimes.component';
import { ExcludenumberComponent } from './arrays/excludenumber/excludenumber.component';
import { SuperarrayComponent } from './arrays/superarray/superarray.component';
import { EachnumbercountComponent } from './arrays/eachnumbercount/eachnumbercount.component';
import { NumberofpairsComponent } from './arrays/numberofpairs/numberofpairs.component';
import { IntroductionarrayComponent } from './arrays/introductionarray/introductionarray.component';
import { StringintroComponent } from './strings/stringintro/stringintro.component';
import { StringpoolComponent } from './strings/stringpool/stringpool.component';
import { DiffstringsComponent } from './strings/diffstrings/diffstrings.component';
import { FindletterComponent } from './strings/findletter/findletter.component';
import { ReverseComponent } from './strings/reverse/reverse.component';
import { PalindromestringComponent } from './strings/palindromestring/palindromestring.component';
import { SwapfirstlastComponent } from './strings/swapfirstlast/swapfirstlast.component';
import { VowelsComponent } from './strings/vowels/vowels.component';
import { VowelsconsonentsComponent } from './strings/vowelsconsonents/vowelsconsonents.component';
import { SpecialstringComponent } from './strings/specialstring/specialstring.component';
import { DiffcharsComponent } from './strings/diffchars/diffchars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EvenOddComponent,
    GraterNumberComponent,
    SmallerNumberComponent,
    ReverseNumberComponent,
    PalindromeComponent,
    AmstrongNumberComponent,
    NeonNumberComponent,
    SpyNumberComponent,
    AutomorphicNumberComponent,
    FactorialComponent,
    PerfectNumberComponent,
    StrongNumberComponent,
    PrimeNumberComponent,
    FibinocciSeriesComponent,
    PronicNumberComponent,
    SunnyNumberComponent,
    TrimorphicNumberComponent,
    WeightedSumOfDigitsComponent,
    Pattren1Component,
    Pattren2Component,
    Pattren3Component,
    Pattren4Component,
    Pattren5Component,
    Pattren6Component,
    Pattren7Component,
    Pattren8Component,
    Pattren9Component,
    Pattren10Component,
    Pattren11Component,
    Pattren12Component,
    Pattren13Component,
    Pattren14Component,
    Pattren15Component,
    VideoCommonComponent,
    IntroductionComponent,
    ExampleComponent,
    EvenoddmethodComponent,
    RevnumbermethodComponent,
    PalindromemethodComponent,
    MethodoverloadingComponent,
    StaticComponent,
    DynamicComponent,
    ReadandprintComponent,
    FindelementComponent,
    KeycountComponent,
    FindkeypositionsComponent,
    MaxofarrayComponent,
    MinofarrayComponent,
    SecondmaxComponent,
    ReverseofarrayComponent,
    ReverseeachelementComponent,
    CountprimesComponent,
    ExcludenumberComponent,
    SuperarrayComponent,
    EachnumbercountComponent,
    NumberofpairsComponent,
    IntroductionarrayComponent,
    StringintroComponent,
    StringpoolComponent,
    DiffstringsComponent,
    FindletterComponent,
    ReverseComponent,
    PalindromestringComponent,
    SwapfirstlastComponent,
    VowelsComponent,
    VowelsconsonentsComponent,
    SpecialstringComponent,
    DiffcharsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'basic_program/Even_or_Odd', component: EvenOddComponent },
      { path: 'basic_program/smaller_number', component: SmallerNumberComponent },
      { path: 'basic_program/grater_number', component: GraterNumberComponent },
      { path: 'basic_program/Reverse_of_number', component: ReverseNumberComponent },
      { path: 'basic_program/Palindrome', component: PalindromeComponent },
      { path: 'basic_program/Armstrong_number', component: AmstrongNumberComponent },
      { path: 'basic_program/Neon_number', component: NeonNumberComponent },
      { path: 'basic_program/SPY_number', component: SpyNumberComponent },
      { path: 'basic_program/Automorphic_number', component: AutomorphicNumberComponent },
      { path: 'basic_program/Factorial', component: FactorialComponent },
      { path: 'basic_program/Perfect_number', component: PerfectNumberComponent },
      { path: 'basic_program/Strong_Number', component: StrongNumberComponent },
      { path: 'basic_program/Prime_number', component: PrimeNumberComponent },
      { path: 'basic_program/Fibonacci_Series', component: FibinocciSeriesComponent },
      { path: 'basic_program/Pronic_Number', component: PronicNumberComponent },
      { path: 'basic_program/Sunny_Number', component: SunnyNumberComponent },
      { path: 'basic_program/Trimorphic_Number', component: TrimorphicNumberComponent },
      { path: 'basic_program/Weighted_Sum_of_Digits', component: WeightedSumOfDigitsComponent },
      { path: 'pattren/pattren1', component: Pattren1Component },
      { path: 'pattren/pattren2', component: Pattren2Component },
      { path: 'pattren/pattren3', component: Pattren3Component },
      { path: 'pattren/pattren4', component: Pattren4Component },
      { path: 'pattren/pattren5', component: Pattren5Component },
      { path: 'pattren/pattren6', component: Pattren6Component },
      { path: 'pattren/pattren7', component: Pattren7Component },
      { path: 'pattren/pattren8', component: Pattren8Component },
      { path: 'pattren/pattren9', component: Pattren9Component },
      { path: 'pattren/pattren10', component: Pattren10Component },
      { path: 'pattren/pattren11', component: Pattren11Component },
      { path: 'pattren/pattren12', component: Pattren12Component },
      { path: 'pattren/pattren13', component: Pattren13Component },
      { path: 'pattren/pattren14', component: Pattren14Component },
      { path: 'pattren/pattren15', component: Pattren15Component },
      { path: 'methods/introduction', component: IntroductionComponent },
      { path: 'methods/example', component: ExampleComponent },
      { path: 'methods/evenoddmethod', component: EvenoddmethodComponent },
      { path: 'methods/revnumbermethod', component: RevnumbermethodComponent },
      { path: 'methods/palindromemmethod', component: PalindromemethodComponent },
      { path: 'methods/methodoverloading', component: MethodoverloadingComponent },
      { path: 'arrays/countprimes', component: CountprimesComponent },
      { path: 'arrays/dynamic', component: DynamicComponent },
      { path: 'arrays/eachnumbercount', component: EachnumbercountComponent },
      { path: 'arrays/excludenumber', component: ExcludenumberComponent },
      { path: 'arrays/findelement', component: FindelementComponent },
      { path: 'arrays/findkeypositions', component: FindkeypositionsComponent },
      { path: 'arrays/introductionarray', component: IntroductionarrayComponent },
      { path: 'arrays/keycount', component: KeycountComponent },
      { path: 'arrays/maxofarray', component: MaxofarrayComponent },
      { path: 'arrays/minofarray', component: MinofarrayComponent },
      { path: 'arrays/numberofpairs', component: NumberofpairsComponent },
      { path: 'arrays/readandprint', component: ReadandprintComponent },
      { path: 'arrays/reverseeachelement', component: ReverseeachelementComponent },
      { path: 'arrays/reverseofarray', component: ReverseofarrayComponent },
      { path: 'arrays/secondmax', component: SecondmaxComponent },
      { path: 'arrays/static', component: StaticComponent },
      { path: 'arrays/superarray', component: SuperarrayComponent },
      { path: 'strings/diffchars', component: DiffcharsComponent },
      { path: 'strings/diffstrings', component: DiffstringsComponent },
      { path: 'strings/findletter', component: FindletterComponent },
      { path: 'strings/palindromestring', component: PalindromestringComponent },
      { path: 'strings/reverse', component: ReverseComponent },
      { path: 'strings/specialstring', component: SpecialstringComponent },
      { path: 'strings/stringintro', component: StringintroComponent },
      { path: 'strings/stringpool', component: StringpoolComponent },
      { path: 'strings/swapfirstlast', component: SwapfirstlastComponent },
      { path: 'strings/vowels', component: VowelsComponent },
      { path: 'strings/vowelsconsonents', component: VowelsconsonentsComponent }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
