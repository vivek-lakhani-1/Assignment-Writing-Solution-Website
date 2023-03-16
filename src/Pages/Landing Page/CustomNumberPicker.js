import React, { useState } from "react";

const CustomNumberPicker = ({ contact, setContact, country, setCountry }) => {

  //https://flagpedia.net/data/flags/h80/in.webp

  const selectCountryhandler = (e) => {
    e.preventDefault();
    console.log(e.target.value, "hi");
    setCountry(e.target.value);
  };

  return (
    <>
      <div className="landing-input-box less-margin" style={{ marginLeft: 30 }}>
        <label className="landing-input-label" style={{ marginLeft: 15 }}>
          Contact Number
        </label>
        <div className="container d-flex flex-row">
          <img src="" alt="" className="flag-img" />
          <select
            className="form-select landing-input-box--data text-dark --landing-country"
            id="country_list"
            onChange={(e) => {
              selectCountryhandler(e);
              console.log(e.target.value);
            }}
            value={country}
            defaultValue={country}
          >
            <option className="landing-option" value="" hidden>
              Select Country
            </option>
            <option className="landing-option" data-countryCode="AF" value="93">
              Afghanistan (+93)
            </option>
            <option
              className="landing-option"
              data-countryCode="AL"
              value="355"
            >
              Albania (+355)
            </option>
            <option
              className="landing-option"
              data-countryCode="DZ"
              value="213"
            >
              Algeria (+213)
            </option>
            <option
              className="landing-option"
              data-countryCode="AS"
              value="1684"
            >
              American Samoa (+1684)
            </option>
            <option
              className="landing-option"
              data-countryCode="AD"
              value="376"
            >
              Andorra (+376)
            </option>
            <option
              className="landing-option"
              data-countryCode="AO"
              value="244"
            >
              Angola (+244)
            </option>
            <option
              className="landing-option"
              data-countryCode="AI"
              value="1264"
            >
              Anguilla (+1264)
            </option>
            <option
              className="landing-option"
              data-countryCode="AQ"
              value="672"
            >
              Antartica (+672)
            </option>
            <option
              className="landing-option"
              data-countryCode="AG"
              value="1268"
            >
              Antigua &amp; Barbuda (+1268)
            </option>
            <option className="landing-option" data-countryCode="AR" value="54">
              Argentina (+54)
            </option>
            <option
              className="landing-option"
              data-countryCode="AM"
              value="374"
            >
              Armenia (+374)
            </option>
            <option
              className="landing-option"
              data-countryCode="AW"
              value="297"
            >
              Aruba (+297)
            </option>
            <option className="landing-option" data-countryCode="AU" value="61">
              Australia (+61)
            </option>
            <option className="landing-option" data-countryCode="AT" value="43">
              Austria (+43)
            </option>
            <option
              className="landing-option"
              data-countryCode="AZ"
              value="994"
            >
              Azerbaijan (+994)
            </option>
            <option
              className="landing-option"
              data-countryCode="BS"
              value="1242"
            >
              Bahamas (+1242)
            </option>
            <option
              className="landing-option"
              data-countryCode="BH"
              value="973"
            >
              Bahrain (+973)
            </option>
            <option
              className="landing-option"
              data-countryCode="BD"
              value="880"
            >
              Bangladesh (+880)
            </option>
            <option
              className="landing-option"
              data-countryCode="BB"
              value="1246"
            >
              Barbados (+1246)
            </option>
            <option
              className="landing-option"
              data-countryCode="BY"
              value="375"
            >
              Belarus (+375)
            </option>
            <option className="landing-option" data-countryCode="BE" value="32">
              Belgium (+32)
            </option>
            <option
              className="landing-option"
              data-countryCode="BZ"
              value="501"
            >
              Belize (+501)
            </option>
            <option
              className="landing-option"
              data-countryCode="BJ"
              value="229"
            >
              Benin (+229)
            </option>
            <option
              className="landing-option"
              data-countryCode="BM"
              value="1441"
            >
              Bermuda (+1441)
            </option>
            <option
              className="landing-option"
              data-countryCode="BT"
              value="975"
            >
              Bhutan (+975)
            </option>
            <option
              className="landing-option"
              data-countryCode="BO"
              value="591"
            >
              Bolivia (+591)
            </option>
            <option
              className="landing-option"
              data-countryCode="BA"
              value="387"
            >
              Bosnia &amp; Herzegovina (+387)
            </option>
            <option
              className="landing-option"
              data-countryCode="BW"
              value="267"
            >
              Botswana (+267)
            </option>
            <option className="landing-option" data-countryCode="BR" value="55">
              Brazil (+55)
            </option>
            <option
              className="landing-option"
              data-countryCode="IO"
              value="246"
            >
              British India Ocean Terrirory (+246)
            </option>
            <option
              className="landing-option"
              data-countryCode="VG"
              value="1284"
            >
              British Virgin Islands (+1284)
            </option>
            <option
              className="landing-option"
              data-countryCode="BN"
              value="673"
            >
              Brunei (+673)
            </option>
            <option
              className="landing-option"
              data-countryCode="BG"
              value="359"
            >
              Bulgaria (+359)
            </option>
            <option
              className="landing-option"
              data-countryCode="BF"
              value="226"
            >
              Burkina Faso (+226)
            </option>
            <option
              className="landing-option"
              data-countryCode="BI"
              value="257"
            >
              Burundi (+257)
            </option>
            <option
              className="landing-option"
              data-countryCode="KH"
              value="855"
            >
              Cambodia (+855)
            </option>
            <option
              className="landing-option"
              data-countryCode="CM"
              value="237"
            >
              Cameroon (+237)
            </option>
            <option className="landing-option" data-countryCode="CA" value="1">
              Canada (+1)
            </option>
            <option
              className="landing-option"
              data-countryCode="CV"
              value="238"
            >
              Cape Verde Islands (+238)
            </option>
            <option
              className="landing-option"
              data-countryCode="KY"
              value="1345"
            >
              Cayman Islands (+1345)
            </option>
            <option
              className="landing-option"
              data-countryCode="CF"
              value="236"
            >
              Central African Republic (+236)
            </option>
            <option
              className="landing-option"
              data-countryCode="TD"
              value="235"
            >
              Chad (+235)
            </option>
            <option className="landing-option" data-countryCode="CL" value="56">
              Chile (+56)
            </option>
            <option className="landing-option" data-countryCode="CN" value="86">
              China (+86)
            </option>
            <option className="landing-option" data-countryCode="CX" value="61">
              Christmas Island (+61)
            </option>
            <option className="landing-option" data-countryCode="CC" value="61">
              Cocos Islands (+61)
            </option>
            <option className="landing-option" data-countryCode="CO" value="57">
              Colombia (+57)
            </option>
            <option
              className="landing-option"
              data-countryCode="KM"
              value="269"
            >
              Comoros (+269)
            </option>
            <option
              className="landing-option"
              data-countryCode="CK"
              value="682"
            >
              Cook Islands (+682)
            </option>
            <option
              className="landing-option"
              data-countryCode="CR"
              value="506"
            >
              Costa Rica (+506)
            </option>
            <option
              className="landing-option"
              data-countryCode="HR"
              value="385"
            >
              Croatia (+385)
            </option>
            <option className="landing-option" data-countryCode="CU" value="53">
              Cuba (+53)
            </option>
            <option
              className="landing-option"
              data-countryCode="CW"
              value="599"
            >
              Curacao (+599)
            </option>
            <option className="landing-option" data-countryCode="CY" value="90">
              Cyprus - North (+90)
            </option>
            <option
              className="landing-option"
              data-countryCode="CY"
              value="357"
            >
              Cyprus - South (+357)
            </option>
            <option
              className="landing-option"
              data-countryCode="CZ"
              value="420"
            >
              Czech Republic (+420)
            </option>
            <option
              className="landing-option"
              data-countryCode="CD"
              value="243"
            >
              Democratic Republic of Congo (+243)
            </option>
            <option className="landing-option" data-countryCode="DK" value="45">
              Denmark (+45)
            </option>
            <option
              className="landing-option"
              data-countryCode="DJ"
              value="253"
            >
              Djibouti (+253)
            </option>
            <option
              className="landing-option"
              data-countryCode="DM"
              value="1809"
            >
              Dominica (+1809)
            </option>
            <option
              className="landing-option"
              data-countryCode="DO"
              value="1809"
            >
              Dominican Republic (+1809)
            </option>
            <option
              className="landing-option"
              data-countryCode="TL"
              value="670"
            >
              East Timor (+670)
            </option>
            <option
              className="landing-option"
              data-countryCode="EC"
              value="593"
            >
              Ecuador (+593)
            </option>
            <option className="landing-option" data-countryCode="EG" value="20">
              Egypt (+20)
            </option>
            <option
              className="landing-option"
              data-countryCode="SV"
              value="503"
            >
              El Salvador (+503)
            </option>
            <option
              className="landing-option"
              data-countryCode="GQ"
              value="240"
            >
              Equatorial Guinea (+240)
            </option>
            <option
              className="landing-option"
              data-countryCode="ER"
              value="291"
            >
              Eritrea (+291)
            </option>
            <option
              className="landing-option"
              data-countryCode="EE"
              value="372"
            >
              Estonia (+372)
            </option>
            <option
              className="landing-option"
              data-countryCode="ET"
              value="251"
            >
              Ethiopia (+251)
            </option>
            <option
              className="landing-option"
              data-countryCode="FK"
              value="500"
            >
              Falkland Islands (+500)
            </option>
            <option
              className="landing-option"
              data-countryCode="FO"
              value="298"
            >
              Faroe Islands (+298)
            </option>
            <option
              className="landing-option"
              data-countryCode="FJ"
              value="679"
            >
              Fiji (+679)
            </option>
            <option
              className="landing-option"
              data-countryCode="FI"
              value="358"
            >
              Finland (+358)
            </option>
            <option className="landing-option" data-countryCode="FR" value="33">
              France (+33)
            </option>
            <option
              className="landing-option"
              data-countryCode="GF"
              value="594"
            >
              French Guiana (+594)
            </option>
            <option
              className="landing-option"
              data-countryCode="PF"
              value="689"
            >
              French Polynesia (+689)
            </option>
            <option
              className="landing-option"
              data-countryCode="GA"
              value="241"
            >
              Gabon (+241)
            </option>
            <option
              className="landing-option"
              data-countryCode="GM"
              value="220"
            >
              Gambia (+220)
            </option>
            <option
              className="landing-option"
              data-countryCode="GE"
              value="7880"
            >
              Georgia (+7880)
            </option>
            <option className="landing-option" data-countryCode="DE" value="49">
              Germany (+49)
            </option>
            <option
              className="landing-option"
              data-countryCode="GH"
              value="233"
            >
              Ghana (+233)
            </option>
            <option
              className="landing-option"
              data-countryCode="GI"
              value="350"
            >
              Gibraltar (+350)
            </option>
            <option className="landing-option" data-countryCode="GR" value="30">
              Greece (+30)
            </option>
            <option
              className="landing-option"
              data-countryCode="GL"
              value="299"
            >
              Greenland (+299)
            </option>
            <option
              className="landing-option"
              data-countryCode="GD"
              value="1473"
            >
              Grenada (+1473)
            </option>
            <option
              className="landing-option"
              data-countryCode="GP"
              value="590"
            >
              Guadeloupe (+590)
            </option>
            <option
              className="landing-option"
              data-countryCode="GU"
              value="671"
            >
              Guam (+671)
            </option>
            <option
              className="landing-option"
              data-countryCode="GT"
              value="502"
            >
              Guatemala (+502)
            </option>
            <option className="landing-option" data-countryCode="GG" value="44">
              Guernsey (+44)
            </option>
            <option
              className="landing-option"
              data-countryCode="GN"
              value="224"
            >
              Guinea (+224)
            </option>
            <option
              className="landing-option"
              data-countryCode="GW"
              value="245"
            >
              Guinea-Bissau (+245)
            </option>
            <option
              className="landing-option"
              data-countryCode="GY"
              value="592"
            >
              Guyana (+592)
            </option>
            <option
              className="landing-option"
              data-countryCode="HT"
              value="509"
            >
              Haiti (+509)
            </option>
            <option
              className="landing-option"
              data-countryCode="HN"
              value="504"
            >
              Honduras (+504)
            </option>
            <option
              className="landing-option"
              data-countryCode="HK"
              value="852"
            >
              Hong Kong (+852)
            </option>
            <option className="landing-option" data-countryCode="HU" value="36">
              Hungary (+36)
            </option>
            <option
              className="landing-option"
              data-countryCode="IS"
              value="354"
            >
              Iceland (+354)
            </option>
            <option className="landing-option" data-countryCode="IN" value="91">
              India (+91)
            </option>
            <option className="landing-option" data-countryCode="ID" value="62">
              Indonesia (+62)
            </option>
            <option className="landing-option" data-countryCode="IR" value="98">
              Iran (+98)
            </option>
            <option
              className="landing-option"
              data-countryCode="IQ"
              value="964"
            >
              Iraq (+964)
            </option>
            <option
              className="landing-option"
              data-countryCode="IE"
              value="353"
            >
              Ireland (+353)
            </option>
            <option className="landing-option" data-countryCode="IM" value="44">
              Isle of Man (+44)
            </option>
            <option
              className="landing-option"
              data-countryCode="IL"
              value="972"
            >
              Israel (+972)
            </option>
            <option className="landing-option" data-countryCode="IT" value="39">
              Italy (+39)
            </option>
            <option
              className="landing-option"
              data-countryCode="CI"
              value="225"
            >
              Ivory Coast (+225)
            </option>
            <option
              className="landing-option"
              data-countryCode="JM"
              value="1876"
            >
              Jamaica (+1876)
            </option>
            <option className="landing-option" data-countryCode="JP" value="81">
              Japan (+81)
            </option>
            <option className="landing-option" data-countryCode="JE" value="44">
              Jersey (+44)
            </option>
            <option
              className="landing-option"
              data-countryCode="JO"
              value="962"
            >
              Jordan (+962)
            </option>
            <option className="landing-option" data-countryCode="KZ" value="7">
              Kazakhstan (+7)
            </option>
            <option
              className="landing-option"
              data-countryCode="KE"
              value="254"
            >
              Kenya (+254)
            </option>
            <option
              className="landing-option"
              data-countryCode="KI"
              value="686"
            >
              Kiribati (+686)
            </option>
            <option
              className="landing-option"
              data-countryCode="XK"
              value="383"
            >
              Kosovo (+383)
            </option>
            <option
              className="landing-option"
              data-countryCode="KW"
              value="965"
            >
              Kuwait (+965)
            </option>
            <option
              className="landing-option"
              data-countryCode="KG"
              value="996"
            >
              Kyrgyzstan (+996)
            </option>
            <option
              className="landing-option"
              data-countryCode="LA"
              value="856"
            >
              Laos (+856)
            </option>
            <option
              className="landing-option"
              data-countryCode="LV"
              value="371"
            >
              Latvia (+371)
            </option>
            <option
              className="landing-option"
              data-countryCode="LB"
              value="961"
            >
              Lebanon (+961)
            </option>
            <option
              className="landing-option"
              data-countryCode="LS"
              value="266"
            >
              Lesotho (+266)
            </option>
            <option
              className="landing-option"
              data-countryCode="LR"
              value="231"
            >
              Liberia (+231)
            </option>
            <option
              className="landing-option"
              data-countryCode="LY"
              value="218"
            >
              Libya (+218)
            </option>
            <option
              className="landing-option"
              data-countryCode="LI"
              value="417"
            >
              Liechtenstein (+417)
            </option>
            <option
              className="landing-option"
              data-countryCode="LT"
              value="370"
            >
              Lithuania (+370)
            </option>
            <option
              className="landing-option"
              data-countryCode="LU"
              value="352"
            >
              Luxembourg (+352)
            </option>
            <option
              className="landing-option"
              data-countryCode="MO"
              value="853"
            >
              Macao (+853)
            </option>
            <option
              className="landing-option"
              data-countryCode="MK"
              value="389"
            >
              Macedonia (+389)
            </option>
            <option
              className="landing-option"
              data-countryCode="MG"
              value="261"
            >
              Madagascar (+261)
            </option>
            <option
              className="landing-option"
              data-countryCode="MW"
              value="265"
            >
              Malawi (+265)
            </option>
            <option className="landing-option" data-countryCode="MY" value="60">
              Malaysia (+60)
            </option>
            <option
              className="landing-option"
              data-countryCode="MV"
              value="960"
            >
              Maldives (+960)
            </option>
            <option
              className="landing-option"
              data-countryCode="ML"
              value="223"
            >
              Mali (+223)
            </option>
            <option
              className="landing-option"
              data-countryCode="MT"
              value="356"
            >
              Malta (+356)
            </option>
            <option
              className="landing-option"
              data-countryCode="MH"
              value="692"
            >
              Marshall Islands (+692)
            </option>
            <option
              className="landing-option"
              data-countryCode="MQ"
              value="596"
            >
              Martinique (+596)
            </option>
            <option
              className="landing-option"
              data-countryCode="MR"
              value="222"
            >
              Mauritania (+222)
            </option>
            <option
              className="landing-option"
              data-countryCode="YT"
              value="269"
            >
              Mayotte (+269)
            </option>
            <option className="landing-option" data-countryCode="MX" value="52">
              Mexico (+52)
            </option>
            <option
              className="landing-option"
              data-countryCode="FM"
              value="691"
            >
              Micronesia (+691)
            </option>
            <option
              className="landing-option"
              data-countryCode="MD"
              value="373"
            >
              Moldova (+373)
            </option>
            <option
              className="landing-option"
              data-countryCode="MC"
              value="377"
            >
              Monaco (+377)
            </option>
            <option
              className="landing-option"
              data-countryCode="MN"
              value="976"
            >
              Mongolia (+976)
            </option>
            <option
              className="landing-option"
              data-countryCode="ME"
              value="382"
            >
              Montengro (+382)
            </option>
            <option
              className="landing-option"
              data-countryCode="MS"
              value="1664"
            >
              Montserrat (+1664)
            </option>
            <option
              className="landing-option"
              data-countryCode="MA"
              value="212"
            >
              Morocco (+212)
            </option>
            <option
              className="landing-option"
              data-countryCode="MZ"
              value="258"
            >
              Mozambique (+258)
            </option>
            <option className="landing-option" data-countryCode="MN" value="95">
              Myanmar (+95)
            </option>
            <option
              className="landing-option"
              data-countryCode="NA"
              value="264"
            >
              Namibia (+264)
            </option>
            <option
              className="landing-option"
              data-countryCode="NR"
              value="674"
            >
              Nauru (+674)
            </option>
            <option
              className="landing-option"
              data-countryCode="NP"
              value="977"
            >
              Nepal (+977)
            </option>
            <option className="landing-option" data-countryCode="NL" value="31">
              Netherlands (+31)
            </option>
            <option
              className="landing-option"
              data-countryCode="AN"
              value="599"
            >
              Netherlands Antilles (+599)
            </option>
            <option
              className="landing-option"
              data-countryCode="NC"
              value="687"
            >
              New Caledonia (+687)
            </option>
            <option className="landing-option" data-countryCode="NZ" value="64">
              New Zealand (+64)
            </option>
            <option
              className="landing-option"
              data-countryCode="NI"
              value="505"
            >
              Nicaragua (+505)
            </option>
            <option
              className="landing-option"
              data-countryCode="NE"
              value="227"
            >
              Niger (+227)
            </option>
            <option
              className="landing-option"
              data-countryCode="NG"
              value="234"
            >
              Nigeria (+234)
            </option>
            <option
              className="landing-option"
              data-countryCode="NU"
              value="683"
            >
              Niue (+683)
            </option>
            <option
              className="landing-option"
              data-countryCode="KP"
              value="850"
            >
              North Korea (+850)
            </option>
            <option
              className="landing-option"
              data-countryCode="NF"
              value="672"
            >
              Norfolk Islands (+672)
            </option>
            <option
              className="landing-option"
              data-countryCode="NP"
              value="670"
            >
              Northern Marianas (+670)
            </option>
            <option className="landing-option" data-countryCode="NO" value="47">
              Norway (+47)
            </option>
            <option
              className="landing-option"
              data-countryCode="OM"
              value="968"
            >
              Oman (+968)
            </option>
            <option className="landing-option" data-countryCode="PK" value="92">
              Pakistan (+92)
            </option>
            <option
              className="landing-option"
              data-countryCode="PW"
              value="680"
            >
              Palau (+680)
            </option>
            <option
              className="landing-option"
              data-countryCode="PS"
              value="970"
            >
              Palestine (+970)
            </option>
            <option
              className="landing-option"
              data-countryCode="PA"
              value="507"
            >
              Panama (+507)
            </option>
            <option
              className="landing-option"
              data-countryCode="PG"
              value="675"
            >
              Papua New Guinea (+675)
            </option>
            <option
              className="landing-option"
              data-countryCode="PY"
              value="595"
            >
              Paraguay (+595)
            </option>
            <option className="landing-option" data-countryCode="PE" value="51">
              Peru (+51)
            </option>
            <option className="landing-option" data-countryCode="PH" value="63">
              Philippines (+63)
            </option>
            <option className="landing-option" data-countryCode="PN" value="64">
              Pitcairn (+64)
            </option>
            <option className="landing-option" data-countryCode="PL" value="48">
              Poland (+48)
            </option>
            <option
              className="landing-option"
              data-countryCode="PT"
              value="351"
            >
              Portugal (+351)
            </option>
            <option
              className="landing-option"
              data-countryCode="PR"
              value="1787"
            >
              Puerto Rico (+1787)
            </option>
            <option
              className="landing-option"
              data-countryCode="QA"
              value="974"
            >
              Qatar (+974)
            </option>
            <option
              className="landing-option"
              data-countryCode="CG"
              value="242"
            >
              Republic of the Congo (+242)
            </option>
            <option
              className="landing-option"
              data-countryCode="RE"
              value="262"
            >
              Reunion (+262)
            </option>
            <option className="landing-option" data-countryCode="RO" value="40">
              Romania (+40)
            </option>
            <option className="landing-option" data-countryCode="RU" value="7">
              Russia (+7)
            </option>
            <option
              className="landing-option"
              data-countryCode="RW"
              value="250"
            >
              Rwanda (+250)
            </option>
            <option
              className="landing-option"
              data-countryCode="BL"
              value="590"
            >
              Saint Barthelemy (+590)
            </option>
            <option
              className="landing-option"
              data-countryCode="SH"
              value="290"
            >
              Saint Helena (+290)
            </option>
            <option
              className="landing-option"
              data-countryCode="KN"
              value="1869"
            >
              Saint Kitts &amp; Nevis (+1869)
            </option>
            <option
              className="landing-option"
              data-countryCode="SC"
              value="1758"
            >
              Saint Lucia (+1758)
            </option>
            <option
              className="landing-option"
              data-countryCode="SR"
              value="597"
            >
              Suriname (+597)
            </option>
            <option
              className="landing-option"
              data-countryCode="MF"
              value="590"
            >
              Saint Martin (+590)
            </option>
            <option
              className="landing-option"
              data-countryCode="PM"
              value="508"
            >
              Saint Saint Pierre and Miquelon (+508)
            </option>
            <option
              className="landing-option"
              data-countryCode="VC"
              value="1784"
            >
              Saint Vincent and the Grenadines (+1784)
            </option>
            <option
              className="landing-option"
              data-countryCode="WS"
              value="685"
            >
              Samoa (+685)
            </option>
            <option
              className="landing-option"
              data-countryCode="SM"
              value="378"
            >
              San Marino (+378)
            </option>
            <option
              className="landing-option"
              data-countryCode="ST"
              value="239"
            >
              Sao Tome &amp; Principe (+239)
            </option>
            <option
              className="landing-option"
              data-countryCode="SA"
              value="966"
            >
              Saudi Arabia (+966)
            </option>
            <option
              className="landing-option"
              data-countryCode="SN"
              value="221"
            >
              Senegal (+221)
            </option>
            <option
              className="landing-option"
              data-countryCode="CS"
              value="381"
            >
              Serbia (+381)
            </option>
            <option
              className="landing-option"
              data-countryCode="SC"
              value="248"
            >
              Seychelles (+248)
            </option>
            <option
              className="landing-option"
              data-countryCode="SL"
              value="232"
            >
              Sierra Leone (+232)
            </option>
            <option className="landing-option" data-countryCode="SG" value="65">
              Singapore (+65)
            </option>
            <option
              className="landing-option"
              data-countryCode="SX"
              value="1721"
            >
              Sint Maarten (+1721)
            </option>
            <option
              className="landing-option"
              data-countryCode="SK"
              value="421"
            >
              Slovakia (+421)
            </option>
            <option
              className="landing-option"
              data-countryCode="SI"
              value="386"
            >
              Slovenia (+386)
            </option>
            <option
              className="landing-option"
              data-countryCode="SB"
              value="677"
            >
              Solomon Islands (+677)
            </option>
            <option
              className="landing-option"
              data-countryCode="SO"
              value="252"
            >
              Somalia (+252)
            </option>
            <option className="landing-option" data-countryCode="ZA" value="27">
              South Africa (+27)
            </option>
            <option className="landing-option" data-countryCode="KR" value="82">
              South Korea (+82)
            </option>
            <option
              className="landing-option"
              data-countryCode="SS"
              value="211"
            >
              South Sudan (+211)
            </option>
            <option className="landing-option" data-countryCode="ES" value="34">
              Spain (+34)
            </option>
            <option className="landing-option" data-countryCode="LK" value="94">
              Sri Lanka (+94)
            </option>
            <option
              className="landing-option"
              data-countryCode="SD"
              value="249"
            >
              Sudan (+249)
            </option>
            <option
              className="landing-option"
              data-countryCode="SR"
              value="597"
            >
              Suriname (+597)
            </option>
            <option className="landing-option" data-countryCode="SJ" value="47">
              Svalbard &amp; Jan Mayen (+47)
            </option>
            <option
              className="landing-option"
              data-countryCode="SZ"
              value="268"
            >
              Swaziland (+268)
            </option>
            <option className="landing-option" data-countryCode="SE" value="46">
              Sweden (+46)
            </option>
            <option className="landing-option" data-countryCode="CH" value="41">
              Switzerland (+41)
            </option>
            <option
              className="landing-option"
              data-countryCode="SY"
              value="963"
            >
              Syria (+963)
            </option>
            <option
              className="landing-option"
              data-countryCode="TW"
              value="886"
            >
              Taiwan (+886)
            </option>
            <option
              className="landing-option"
              data-countryCode="TJ"
              value="992"
            >
              Tajikistan (+992)
            </option>
            <option
              className="landing-option"
              data-countryCode="TZ"
              value="255"
            >
              Tanzania (+255)
            </option>
            <option className="landing-option" data-countryCode="TH" value="66">
              Thailand (+66)
            </option>
            <option
              className="landing-option"
              data-countryCode="TG"
              value="228"
            >
              Togo (+228)
            </option>
            <option
              className="landing-option"
              data-countryCode="TO"
              value="676"
            >
              Tonga (+676)
            </option>
            <option
              className="landing-option"
              data-countryCode="TT"
              value="1868"
            >
              Trinidad &amp; Tobago (+1868)
            </option>
            <option
              className="landing-option"
              data-countryCode="TN"
              value="216"
            >
              Tunisia (+216)
            </option>
            <option className="landing-option" data-countryCode="TR" value="90">
              Turkey (+90)
            </option>
            <option
              className="landing-option"
              data-countryCode="TM"
              value="993"
            >
              Turkmenistan (+993)
            </option>
            <option
              className="landing-option"
              data-countryCode="TC"
              value="1649"
            >
              Turks &amp; Caicos Islands (+1649)
            </option>
            <option
              className="landing-option"
              data-countryCode="TV"
              value="688"
            >
              Tuvalu (+688)
            </option>
            <option
              className="landing-option"
              data-countryCode="UG"
              value="256"
            >
              Uganda (+256)
            </option>
            <option
              className="landing-option"
              data-countryCode="UA"
              value="380"
            >
              Ukraine (+380)
            </option>
            <option
              className="landing-option"
              data-countryCode="AE"
              value="971"
            >
              United Arab Emirates (+971)
            </option>
            <option className="landing-option" data-countryCode="GB" value="44">
              United Kingdom (+44)
            </option>
            <option className="landing-option" data-countryCode="US" value="1">
              United States (+1)
            </option>
            <option
              className="landing-option"
              data-countryCode="UY"
              value="598"
            >
              Uruguay (+598)
            </option>
            <option
              className="landing-option"
              data-countryCode="UZ"
              value="998"
            >
              Uzbekistan (+998)
            </option>
            <option
              className="landing-option"
              data-countryCode="VU"
              value="678"
            >
              Vanuatu (+678)
            </option>
            <option
              className="landing-option"
              data-countryCode="VA"
              value="379"
            >
              Vatican City (+379)
            </option>
            <option className="landing-option" data-countryCode="VE" value="58">
              Venezuela (+58)
            </option>
            <option className="landing-option" data-countryCode="VN" value="84">
              Vietnam (+84)
            </option>
            <option
              className="landing-option"
              data-countryCode="WF"
              value="681"
            >
              Wallis &amp; Futuna (+681)
            </option>
            <option
              className="landing-option"
              data-countryCode="YE"
              value="969"
            >
              Yemen (North)(+969)
            </option>
            <option
              className="landing-option"
              data-countryCode="YE"
              value="967"
            >
              Yemen (South)(+967)
            </option>
            <option
              className="landing-option"
              data-countryCode="ZM"
              value="260"
            >
              Zambia (+260)
            </option>
            <option
              className="landing-option"
              data-countryCode="ZW"
              value="263"
            >
              Zimbabwe (+263)
            </option>
          </select>

          <input
            className="landing-input-box--data text-dark --landing-mobile mx-3"
            type="number"
            placeholder="Enter Your Phone Number"
            name="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default CustomNumberPicker;
