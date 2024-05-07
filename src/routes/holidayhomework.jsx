import React from 'react'
import HorizontalTabs from '../components/HorizontalTabs';
import { Link } from 'react-router-dom';

function holidayhomework() {
  const tabs = [
    { title: 'IBDP BOOK LIST 2024-25', content: () => <div>
    
    <div className='cam-lower-sec'>
    <h1 className='title'>IBDP Book List 2024-45</h1>
    </div>

    <div className='syllubus-data'>
      



      <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>NAME OF THE BOOK</th>
           <th>AUTHOR</th>
           <th>PUBLISHER</th>
           <th>ISBN NO.</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>FRENCH AB INITIO ( TRICOLOR PART4 )</td>
           <td>HEATHER MASCIE TAYLOR </td>
           <td>OUP</td>
           <td>978-140-850578-6</td>
         </tr>
         <tr>
           <td>2</td>
           <td>FRENCH SL/HL FRENCH-B</td>
           <td></td>
           <td>OUP</td>
           <td>978-0-198422-44-9</td>
         </tr>
         <tr>
           <td>3</td>
           <td>PHYSICS FOR IBDP</td>
           <td>CHRIS HAMPER METCHELL</td>
           <td>PEARSON</td>
           <td><p>SL9781292427713</p><p>HL9781292427706</p></td>
         </tr>
         <tr>
           <td>4</td>
           <td>CHEMISTRY COURSE COMPANION 2023 ED.</td>
           <td>GARY HORNER DAVID TARY</td>
           <td>OXFORD</td>
           <td>978-1-382-016469</td>
         </tr>
         <tr>
           <td>5</td>
           <td>CORE COMPUTER SCIENCE</td>
           <td>KOSTAS DIMITRIOU</td>
           <td>EXPRESS PUB</td>
           <td>978-1-4715-4209</td>
         </tr>
         <tr>
           <td>6</td>
           <td>DIGITAL SOCITIES</td>
           <td></td>
           <td>HODDER</td>
           <td>9781398358416</td>
         </tr>
         <tr>
           <td>7</td>
           <td>MATHEMATICS:ANALYSIS AND APPROACHES HL ( CORE AND MAIN BOOK )</td>
           <td>MICHAEL HAESE </td>
           <td>HAESE AND HARIS</td>
           <td>
            <p><b>CORE-</b>978-1-925489-58-3</p>
            <p><b>MAIN-</b>978-1-925489-59-0</p>
           </td>
         </tr>
         <tr>
           <td>8</td>
           <td>MATHEMATICS:ANALYSIS AND APPROACHES SL(CORE TOPICS 1)</td>
           <td>MICHAEL HAESE </td>
           <td>HAESE AND HARIS</td>
           <td> 978-1925489-55-2</td>
         </tr>
         <tr>
           <td>9</td>
           <td>MATHEMATICS:APPLICATIONS AND INTERPRETATION SL 2</td>
           <td>MICHAEL HAESE </td>
           <td>HAESE AND HARIS </td>
           <td>978-1-925489-57-6</td>
         </tr>
         <tr>
           <td>10</td>
           <td>MATHEMATICS:APPLICATIONS AND INTERPRETATION HL( CORE AND MAIN BOOK )</td>
           <td>MICHAEL HAESE</td>
           <td>HAESE AND HARIS</td>
           <td>
            <p><b>CORE-</b>978-1-925489-58-3</p>           
            <p><b>MAIN-</b>-978-1925489-60-6</p>           
           </td>
         </tr>
         <tr>
           <td>11</td>
           <td>BUSINESS MANAGMENT</td>
           <td>PAUL HOANG 5 EDITION</td>
           <td>IBID PRESS</td>
           <td>9781921917820</td>
         </tr>
         <tr>
           <td>12</td>
           <td>BIOLOGY COURSE COMPANION 2023 EDITION</td>
           <td>ANDREW ALLOTT</td>
           <td>OXFORD</td>
           <td>978-0-19-839211-8</td>
         </tr>
         <tr>
           <td>13</td>
           <td>ENGLISH A:LANGUAGE ANDLITERATURE FOR THE IB DIPLOMA COURSE BOOK </td>
           <td>BRAD PHILPOT</td>
           <td>CUP 2<sup>nd</sup> EDITION</td>
           <td>978-1108704939</td>
         </tr>
         <tr>
           <td>14</td>
           <td>DOLL HOUSE</td>
           <td>HENRIK IBSEN</td>
           <td></td>
           <td></td>
         </tr>
         <tr>
           <td>15</td>
           <td>RIME OF THE ANCIENT</td>
           <td>S.T.COLERIDGE</td>
           <td></td>
           <td></td>
         </tr>
         <tr>
           <td>16</td>
           <td>THE BOY IN STRIPPED PYJAMA </td>
           <td>JOHN BOYNE </td>
           <td>VINTAGE</td>
           <td>978-0099572862</td>
         </tr>
         <tr>
           <td>17</td>
           <td>1984</td>
           <td>GEORGE ORWELL</td>
           <td>PENGUIN</td>
           <td></td>
         </tr>
         <tr>
          <td>18</td>
           <td>OTHELLO</td>
           <td>WILLIAM SHAKESPEARE</td>
           <td>CUP 3<sup>rd</sup>EDITION</td>
           <td>978-1107615595</td>
         </tr>
         <tr>
          <td>19</td>
           <td>PSYCOLOGY COURSE COMPANION 2<sup>nd</sup> EDITION</td>
           <td>ALEXEY POPOV </td>
           <td>OXFORD</td>
           <td>978-0-1983-9811-0</td>
         </tr>
         <tr>
          <td>20</td>
           <td>VISUAL ART COURSE COMPANION</td>
           <td>JAYSON PETERSON</td>
           <td>OXFORD</td>
           <td>978-0-19-837791-7</td>
         </tr>
         <tr>
          <td>21</td>
           <td>ECONOMICS 2020 EDITION</td>
           <td>JOCELYN BLINK IAN DORTON</td>
           <td>OXFORD</td>
           <td>978-1-382-00496-1</td>
         </tr>
         <tr>
          <td>22</td>
           <td>ENVIORMENTAL SYSTEMS AND SOCITIES</td>
           <td>JILL RUTHERFORD GILLIAN WILLIAMS</td>
           <td>OXFORD</td>
           <td>978-0-19-833256-5</td>
         </tr>
         <tr>
          <td>23</td>
           <td>
            <p>PATVAR PRASANPATRA-1</p>
            <p>PATVAR PRASANPATRA-2</p>
           </td>
           <td>SANDEEP PATIL </td>
           <td>SUVRAN SANDEEP PATIL</td>
           <td>
            <p>978-1-684542628</p>
            <p>978-1-684543052

            </p>
            </td>
         </tr>
        </tbody>
             </table>
             </div> 

             <div className='syllubs-list'>
      <Link to="">Print Book List</Link>
      </div>
    </div>
    </div> },
    { title: 'IBDP BOOK LIST 2021-22', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>IBDP Book List 2021-22</h1>
    </div>

    <div className='syllubus-data'>
      
      <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>NAME OF THE BOOK</th>
           <th>AUTHOR</th>
           <th>PUBLISHER</th>
           <th>ISBN NO.</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>FRENCH AB INITIO (TRICOLOR PART 4)</td>
           <td>HEATHER MASCIE TAYLOR</td>
           <td>OUP</td>
           <td>978 0 198422 37 2</td>
         </tr>
         <tr>
           <td>2</td>
           <td>FRENCH SL/HL FRENCH-B </td>
           <td></td>
           <td>OUP</td>
           <td>978-0-198422-41-9</td>
         </tr>
         <tr>
           <td>3</td>
           <td>PHYSICS FOR IBDP</td>
           <td>K.A.TSOKOS</td>
           <td>CUP</td>
           <td>978-110-7628-19-9</td>
         </tr>
         <tr>
           <td>4</td>
           <td>CHEMISTRY FOR THE IBDP 2<sup>ND</sup> ED.</td>
           <td>STEVE OWEN</td>
           <td>CUP</td>
           <td>978-1-107-62270-8</td>
         </tr>
         <tr>
           <td>5</td>
           <td>CORE COMPUTER SCIENCE</td>
           <td>KOSTAS DIMITRIOU</td>
           <td>EXPRESS PUB</td>
           <td>978-1-4715-4209-1</td>
         </tr>
         <tr>
           <td>6</td>
           <td>ITGS</td>
           <td>OLIVER KIM</td>
           <td>IBID PRESS</td>
           <td>978-1-876659-52-3</td>
         </tr>
         <tr>
           <td>7</td>
           <td>MATHEMATICS: ANALYSIS AND APPROACHES HL (CORE & MAIN BOOK)</td>
           <td>MICHAEL HAESE</td>
           <td>HAESE & HARIS</td>
           <td>
            <p><b>CORE-</b>978-1-925489-58-3</p>
            <p><b>MAIN-</b>978-1-925489-59-0</p>
           </td>
         </tr>
         <tr>
           <td>8</td>
           <td>MATHEMATICS: ANALYSIS AND APPROACHES SL (CORE TOPICS 1)</td>
           <td>MICHAEL HAESE</td>
           <td>HAESE & HARIS</td>
           <td>978-1-925489-55-2</td>
         </tr>
         <tr>
           <td>9</td>
           <td>MATHEMATICS: APPLICATIONS AND INTERPRETATION SL 2</td>
           <td>MICHAEL HAESE</td>
           <td>HAESE & HARIS</td>
           <td>978-1-925489-57-6</td>
         </tr>
         <tr>
           <td>10</td>
           <td>MATHEMATICS: APPLICATIONS AND INTERPRETATION HL (CORE & MAIN BOOK)</td>
           <td>MICHAEL HAESE</td>
           <td>HAESE & HARIS</td>
           <td>
            <p><b>CORE-</b>978-1-925489-58-3</p>           
            <p><b>MAIN-</b>978-1-925489-60-6</p>           
           </td>
         </tr>
         <tr>
           <td>11</td>
           <td>BUSINESS MANAGEMENT</td>
           <td>PAUL HOANG</td>
           <td>IBID PRESS</td>
           <td>978-1-9219172-4-0</td>
         </tr>
         <tr>
           <td>12</td>
           <td>BIOLOGY COURSE COMPANION 2014 ED.</td>
           <td>ANDREW ALLOTT</td>
           <td>OXFORD</td>
           <td>978-0-19-839211-8</td>
         </tr>
         <tr>
           <td>13</td>
           <td>ENGLISH A: LANG & LIT</td>
           <td>ROB ALLISON</td>
           <td>OXFORD</td>
           <td>978-0-1984-3452-8</td>
         </tr>
         <tr>
           <td>14</td>
           <td>A DOLL’S HOUSE</td>
           <td>HENRIK IBSEN</td>
           <td>DOVER </td>
           <td>978-0-486-27062-3</td>
         </tr>
         <tr>
           <td>15</td>
           <td>THE WORLD’S WIFE</td>
           <td>CAROLANE DUFFY</td>
           <td>PAN MAC</td>
           <td>978-15-0-985266-6</td>
         </tr>
         <tr>
           <td>16</td>
           <td>THE COMPLETE PERSEPOLIS</td>
           <td>MARJANE SATRAPI</td>
           <td>VINTAGE</td>
           <td>978-0-099-52399-4</td>
         </tr>
         <tr>
           <td>17</td>
           <td>THE MERCHANT OF VENICE</td>
           <td>XAVIER PINTO</td>
           <td>BEETA PUB</td>
           <td>555-1234-00-590-1</td>
         </tr>
         <tr>
          <td>18</td>
           <td>SELECTED POEMS</td>
           <td>ANNA AKHMATOVA</td>
           <td>VINTAGE</td>
           <td>9978-0-099540-87-8</td>
         </tr>
         <tr>
          <td>19</td>
           <td>PSYCHOLOGY COURSE COMPANION 2<sup>ND</sup> ED.</td>
           <td>ALEXEY POPOV</td>
           <td>OXFORD</td>
           <td>978-0-1983-9811-0</td>
         </tr>
         <tr>
          <td>20</td>
           <td>VISUAL ART COURSE COMPANION</td>
           <td>JAYSON PETERSON</td>
           <td>OXFORD</td>
           <td>978-0-19-837791-7</td>
         </tr>
         <tr>
          <td>21</td>
           <td>ECONOMICS FOR THE IBDP</td>
           <td>PAUL HOANG</td>
           <td>HODDER EDUCATION</td>
           <td>978-1-5104-7914-2</td>
         </tr>
         <tr>
          <td>22</td>
           <td>ENVIRONMENTAL SYSTEMS AND SOCIETIES</td>
           <td>JILL RUTHERFORD GILLIAN WILLIAMS</td>
           <td>OXFORD</td>
           <td>978-0-19-84233 6 2</td>
         </tr>
         <tr>
          <td>23</td>
           <td>
            <p>PATVAR PRASANPATRA-1</p>
            <p>PATVAR PRASANPATRA-2</p>
           </td>
           <td>SANDEEP PATIL </td>
           <td>SUVRAN SANDEEP PATIL</td>
           <td>
            <p>978-1-684542628</p>
            <p>978-1-684543052</p>
            </td>
         </tr>
        </tbody>
             </table>

             <br></br>
             <p>** CALCULATOR-GDC (CASIO SCIENTIFIC GRAPHIC CALCULATOR FX CG50)</p>
             </div> 

             <div className='syllubs-list'>
      <Link to="">Print Book List</Link>
      </div>
    </div>

    </div> },
    { title: 'IBDP BOOK LIST 2020-21', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Annual Syllabus 2020-21</h1>
    </div>

    <div className='syllubus-data'>
      
      <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>NAME OF THE BOOK</th>
           <th>AUTHOR</th>
           <th>PUBLISHER</th>
           <th>ISBN NO.</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>FRENCH AB INITIO (TRICOLOR PART 4) </td>
           <td>HEATHER MASCIE TAYLOR</td>
           <td>OUP</td>
           <td>978-140-850578-6</td>
         </tr>
         <tr>
           <td>2</td>
           <td> FRENCH SL/HL FRENCH-B</td>
           <td></td>
           <td> OUP</td>
           <td>978-0-198422-41-9</td>
         </tr>
         <tr>
           <td>3</td>
           <td>PHYSICS FOR IBDP</td>
           <td>K.A.TSOKOS</td>
           <td>CUP</td>
           <td>978-110-7628-19-9</td>
         </tr>
         <tr>
           <td>4</td>
           <td>CHEMISTRY FOR THE IBDP 2<sup>ND</sup> ED.</td>
           <td>STEVE OWEN</td>
           <td>CUP</td>
           <td>978-1-107-62270-8</td>
         </tr>
         <tr>
           <td>5</td>
           <td>CORE COMPUTER SCIENCE</td>
           <td>KOSTAS DIMITRIOU</td>
           <td>EXPRESS PUB</td>
           <td>978-1-4715-4209-1</td>
         </tr>
         <tr>
           <td>6</td>
           <td>MATHEMATICS: ANALYSIS AND APPROACHES HL</td>
           <td>MARIENE TORRES SKOUMAL</td>
           <td>OXFORD</td>
           <td>978-0-198427-16-2</td>
         </tr>
         <tr>
           <td>7</td>
           <td>MATHEMATICS: ANALYSIS AND APPROACHES SL </td>
           <td>PAUL LA RONDIE</td>
           <td>OXFORD </td>
           <td>
            <p>978-0-198427-10-0</p>
           </td>
         </tr>
         <tr>
           <td>8</td>
           <td>MATHEMATICS: APPLICATIONS AND  INTERPRETATION SL</td>
           <td>JANE FORREST</td>
           <td>OXFORD</td>
           <td>978-0-198426-98-1</td>
         </tr>
         <tr>
           <td>9</td>
           <td>MATHEMATICS: APPLICATIONS AND INTERPRETATION HL</td>
           <td>TONY HALSEY</td>
           <td>OXFORD </td>
           <td>978-0-198427-04-9</td>
         </tr>
         <tr>
           <td>10</td>
           <td>BUSINESS MANAGEMENT</td>
           <td>PAUL HOANG</td>
           <td>IBID PRESS</td>
           <td>
            <p>978-1-9219172-4-0</p>           
            <p><b>MAIN-</b>978-1-925489-60-6</p>
          </td>
         </tr>
         <tr>
           <td>11</td>
           <td>BIOLOGY COURSE COMPANION 2014 ED.</td>
           <td>ANDREW ALLOTT</td>
           <td>OXFORD</td>
           <td>978-0-19-839211-8</td>
         </tr>
         <tr>
           <td>12</td>
           <td>ENGLISH A: LANG & LIT.</td>
           <td>ROB ALLISON</td>
           <td>OXFORD</td>
           <td>978-0-1984-3452-8</td>
         </tr>
         <tr>
           <td>13</td>
           <td> A DOLL’S HOUSE </td>
           <td>HENRIK IBSEN</td>
           <td>DOVER</td>
           <td>978-0-486-27062-3</td>
         </tr>
         <tr>
           <td>14</td>
           <td>THE WORLD’S WIFE </td>
           <td>CAROLANE DUFFY</td>
           <td>PAN MAC </td>
           <td>978-15-0-985266-6</td>
         </tr>
         <tr>
           <td>15</td>
           <td>THE COMPLETE PERSEPOLIS</td>
           <td>MARJANE SATRAPI</td>
           <td>VINTAGE</td>
           <td>978-0-099-52399-4</td>
         </tr>
         <tr>
           <td>16</td>
           <td>THE MERCHANT OF VENICE</td>
           <td>XAVIER PINTO</td>
           <td>BEETA PUB</td>
           <td>555-1234-00-590-1</td>
         </tr>
         <tr>
           <td>17</td>
           <td>SELECTED POEMS</td>
           <td>ANNA AKHMATOVA</td>
           <td>VINTAGE</td>
           <td>978-0-099540-87-8</td>
         </tr>
         <tr>
          <td>18</td>
           <td>PSYCHOLOGY COURSE COMPANION 2ND ED.</td>
           <td>ALEXEY POPOV</td>
           <td>OXFORD</td>
           <td>978-0-1983-9811-0</td>
         </tr>
         <tr>
          <td>19</td>
           <td>VISUAL ART COURSE COMPANION</td>
           <td>JAYSON PETERSON  </td>
           <td>OXFORD</td>
           <td>978-0-19-837791-7</td>
         </tr>
         <tr>
          <td>20</td>
           <td>ECONOMICS FOR THE IBDP</td>
           <td>PAUL HOANG </td>
           <td>HODDER PUBLICATION</td>
           <td>978-1-51-047914-2</td>
         </tr>
         <tr>
          <td>21</td>
           <td>TOK</td>
           <td>MARIJA UZUNOVA DANG ARVIN SINGH UZNOV DANG</td>
           <td>OXFORD</td>
           <td>978-0-19-849770-7</td>
         </tr>
        </tbody>
             </table>
            <br></br>
             <p>** CALCULATOR –GDC (CASIO SCIENTIFIC GRAPHIC CALCULATOR FXCG50)</p>
             </div> 

             <div className='syllubs-list'>
      <Link to="">Print Book List</Link>
      </div>
    </div>

    </div> },
    { title: 'CAMBRIDGE BOOK LIST', content: () => <div>

<div className='cam-lower-sec'>
    <h1 className='title'>Cambridge Book List</h1>
    </div>

    <div className='syllubus-data'>
      
      <div className='cam-lower-table'>
     
     {/* <h1>table data baki ha abhi</h1> */}
     
     <table>
       <thead>
        <tr>
          <th colSpan={5}>GRADE 9 - IGCSE YEAR 1</th>
        </tr>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>Subject Name of Book</th>
           <th>AUTHOR</th>
           <th>ISBN</th>
           <th>Publisher</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Cambridge IGCSE First language English</td>
           <td>Julia Burchell</td>
           <td>9780008262006</td>
           <td>Collins</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Cambridge IGCSE First language English-Work book</td>
           <td>Julia Burchell</td>
           <td>9780008262020</td>
           <td>Collins</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Cambridge IGCSE and Coordinated Science Course Book</td>
           <td>Mary Jones Richard Harvard</td>
           <td>9781316631010</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Cambridge IGCSE and Coordinated Physics Work Book</td>
           <td>David Sang</td>
           <td>9781316631065</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Cambridge IGCSE and Coordinated Chemistry Work Book</td>
           <td>Richard Harvard, Ian Lodge</td>
           <td>9781316631058</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Cambridge IGCSE and Coordinated Biology Work Book</td>
           <td>Mary Jones</td>
           <td>9781316631041</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Cambrige IGCSE First language English </td>
           <td>Marian Cox</td>
           <td>9781108438889</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Cambrige IGCSE First language Englishlanguage and Skill Practice book</td>
           <td>Marian Cox</td>
           <td>9781108438926</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>9</td>
           <td>Cambridge IGCSE Mathematics Core & Extended Course Book</td>
           <td>Kareen Morrison Nick Hamshaw</td>
           <td>9781108437189</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>10</td>
           <td>Cambridge IGCSE ICT 2nd Edition</td>
           <td>Brian Sargent, David Watson,</td>
           <td>9781108698061</td>
           <td>Hodder</td>
         </tr>
         <tr>
           <td>11</td>
           <td>Cambridge IGCSE Business Studies Course Book</td>
           <td>Mark fisher Medi Houghton </td>
           <td>9781108563987</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>12</td>
           <td>Cambridge IGCSE (TM) and O Level Business Studies Workbook </td>
           <td>Veenu Jain & Alex Smith</td>
           <td>9781108710008</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>13</td>
           <td>Cambridge IGCSE Economics Course book</td>
           <td>Brian Titley and Dael Moynihan</td>
           <td>9780198409700</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>14</td>
           <td>Cambridge IGCSE Economics Workbook</td>
           <td>Brian Titley and Terry Cook</td>
           <td>9780198428503</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>15</td>
           <td>Cambridge IGCSE & O level Environmental Management-Course book</td>
           <td>Gary Skinner</td>
           <td>9781316634851</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>16</td>
           <td>Cambridge IGCSE & O level Environmental Management-Workbook</td>
           <td>Gary Skinner</td>
           <td>9781316634875</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>17</td>
           <td>Cambridge IGCSE & O level Global Perspective-Coursebook</td>
           <td>Keely Laylock</td>
           <td>9781316611104</td>
           <td>Cambridge</td>
         </tr>
         <tr>
          <td>18</td>
           <td>Tricolor-4 5e Edition (French Course Book)</td>
           <td>Heather Mascie Sylvia Honner</td>
           <td>9780198374756</td>
           <td>Oxford</td>
         </tr>
         <tr>
          <td>19</td>
           <td>Tricolor-4 5e Edition (French Work Book)</td>
           <td>Andrew Loughe&JaneMensfield</td>
           <td>9780198412076</td>
           <td>Oxford</td>
         </tr>
         <tr>
          <td>20</td>
           <td>श्रावण एवम मोखिक अखिव्यखि कौशल िाग -२ कक्षा 10</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9789353002497</td>
           <td>Kavan Eduction</td>
         </tr>
         <tr>
          <td>21</td>
           <td>श्रावण एवम मोखिक अखिव्यखि कौशल िाग -1 कक्षा 9</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9789353001896</td>
           <td>Kavan Eduction</td>
         </tr>
         <tr>
          <td>22</td>
           <td>कवन ह िंदी खितीय िाषा के रूप में कक्षा 9</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9789353007799 </td>
           <td>Kavan Eduction</td>
         </tr>
         <tr>
          <td>23</td>
           <td>कवन ह िंदी खितीय िाषा के रूप मेंकक्षा 10</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9789353009311</td>
           <td>KavanEduction</td>
         </tr>
        </tbody>
             </table>
             <br></br>
     <table>
       <thead>
        <tr>
          <th colSpan={5}>GRADE 8 - CAMBRIDGE LOWER SECONDARY STAGE 9 (Class 8)</th>
        </tr>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>Subject Name of Book</th>
           <th>Author(s)</th>
           <th>ISBN</th>
           <th>Publisher</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Complete English Second Language. For Secondary1-Stage 9-Coursebook</td>
           <td>Chris Abhurrst, Lucy Bowley,Lynette Simonis</td>
           <td>9780198378129</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Complete English Second Language. For Secondary1-Stage 9-Workbook</td>
           <td>Chris Abhurrst, Lucy Bowley,Lynette Simonis</td>
           <td>9780198378150</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Cambridge Checkpoint Science Course BookStage 9</td>
           <td>Mary Jones, Dianne Fellowes </td>
           <td>9781107659353</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Cambridge Checkpoint Science Work BookStage 9</td>
           <td>Mary Jones Dianne Fellowes</td>
           <td>9781107679610</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Cambridge Mathematics Course Book Stage 9</td>
           <td>Greg Byrd, Lymm Byrd</td>
           <td>9781107668010</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Cambridge Mathematics Workbook Stage 9</td>
           <td>Greg Byrd,Lymm Byrd</td>
           <td>9781107698994</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>7</td>
           <td>The Trail-History & Civics for Grade 8</td>
           <td>Jayanti Sengupta</td>
           <td>9780190121501</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>8</td>
           <td>VoyageGeography-Coursebook for Grade 8</td>
           <td>Dorthy M. Noronha &NelsonPetrie</td>
           <td>9780199479801</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>9</td>
           <td>ON Y VA! 3 (Course book & Work book WORKBOOK) </td>
           <td>Jacques Blanc</td>
           <td>9789380809564</td>
           <td>Langers</td>
         </tr>
         <tr>
           <td>10</td>
           <td>ICT Click Start Course book 8</td>
           <td>Anjna Virmani and Shalini Harisukh</td>
           <td>9781108855709</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>11</td>
           <td>भाषा तरुण -8</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9781631027239</td>
           <td>Kavan Eduction</td>
         </tr>
   
        
       
      
      
       
        </tbody>
             </table>
             <br></br>
             <p>** CALCULATOR-GDC (CASIO SCIENTIFIC GRAPHIC CALCULATOR FX CG50)</p>
<br></br>
<table>
       <thead>
        <tr>
          <th colSpan={5}>CAMBRIDGE LOWER SECONDRY STAGE 8 (Class 7)</th>
        </tr>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>Subject Name of Book</th>
           <th>Author(s)</th>
           <th>ISBN</th>
           <th>Publisher</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Cambridge Check Point English Course Book - Stage 8 </td>
           <td>Marian Cox</td>
           <td>9781107690998</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Cambridge Check Point English Work Book-Stage 8 </td>
           <td>Marian Cox</td>
           <td>9781107663152</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Cambridge Checkpoint Science Course Book-Stage 8</td>
           <td>Mary Jones, Dianne Fellowes</td>
           <td>9781107626065</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Cambridge Checkpoint Science Work Book-Stage 8</td>
           <td>Mary Jones Dianne Fellowes</td>
           <td>9781107695740</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Cambridge Mathematics Course Book Stage 8</td>
           <td>Greg Byrd, Lymm Byrd</td>
           <td>9781107641112</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Cambridge Mathematics Workbook Stage 8 </td>
           <td>Greg Byrd,Lymm Byrd</td>
           <td>9781107695405</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>7</td>
           <td>The Trail-History & Civics for Grade 7</td>
           <td>Jayanti Sengupta</td>
           <td>9780199475636</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>8</td>
           <td>Voyage Geography -Coursebook for Grade 7 </td>
           <td>Dorthy M. Noronha &NelsonPetrie</td>
           <td>9780199479795</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>9</td>
           <td>ICT Click Start Course book 7</td>
           <td>Anjna Virmani and Shalini Harisukh</td>
           <td>9781108855693</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>10</td>
           <td>ON Y VA -2 (Coursebook & workbook)</td>
           <td>Jacques Blanc</td>
           <td>9789380809762 </td>
           <td>Langers</td>
         </tr>
         <tr>
           <td>11</td>
           <td>भाषा तरुण -7</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9789352796786</td>
           <td>Kavan Eduction</td>
         </tr>
   
        
       
      
      
       
        </tbody>
             </table>
             <br></br>
             <p>** CALCULATOR-GDC (CASIO SCIENTIFIC GRAPHIC CALCULATOR FX CG50)</p>
             <br></br>
             <table>
       <thead>
        <tr>
          <th colSpan={5}>CAMBRIDGE LOWER SECONDRY STAGE 7 (Class 6)</th>
        </tr>
         <tr>
          
           <th>S.NO</th>
           <th className='book-width'>Subject Name of Book</th>
           <th>Author(s)</th>
           <th>ISBN</th>
           <th>Publisher</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Cambridge Check Point English Course Book - Stage 7 </td>
           <td>Marian Cox</td>
           <td>9781107670235</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Cambridge Check Point English Work BookStage 7</td>
           <td>Marian Cox</td>
           <td>9781107647817</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>3</td>
           <td>Cambridge Checkpoint Science Course Book-Stage 7 </td>
           <td>Mary Jones, Dianne Fellowes</td>
           <td>9781107613331</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>4</td>
           <td>Cambridge Checkpoint Science Work BookStage 7 </td>
           <td>Mary Jones Dianne Fellowes </td>
           <td>9781107622852</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>5</td>
           <td>Cambridge Checkpoint Mathematics Course Book Stage 7 </td>
           <td>Greg Byrd, Lymm Byrd</td>
           <td>9781107641112</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>6</td>
           <td>Cambridge Checkpoint Mathematics Workbook Stage 7  </td>
           <td>Greg Byrd,Lymm Byrd</td>
           <td>9781107695405</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>7</td>
           <td>Voyage Geography -Coursebook for Grade 6 </td>
           <td>Dorthy M. Noronha & NelsonPetrie </td>
           <td>9780199479788</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>8</td>
           <td>The Trail-History & Civics for Grade 6</td>
           <td>Jayanti Sengupta </td>
           <td>9780199475629</td>
           <td>Oxford</td>
         </tr>
         <tr>
           <td>9</td>
           <td>ICT-Click Start Course book 6</td>
           <td>Anjna Virmani and Shalini Harisukh</td>
           <td>9781108855686</td>
           <td>Cambridge</td>
         </tr>
         <tr>
           <td>10</td>
           <td>ON Y VA –1 (Coursebook & Workbook)</td>
           <td>Jacques Blanc</td>
           <td>9789380809564</td>
           <td>Langers</td>
         </tr>
         <tr>
           <td>11</td>
           <td>भाषा तरुण - 6</td>
           <td>Dr.Amit Kumar Singh Pundir</td>
           <td>9789352796786</td>
           <td>Kavan Eduction</td>
         </tr>
   
        
       
      
      
       
        </tbody>
             </table>
             <br></br>
           
             </div> 

             <div className='syllubs-list'>
      <Link to="">Print Book List</Link>
      </div>
    </div>

    </div> },


  
  ];
  return (
    <div>
            <div className='ib-syllabus  '>
    
    {/* <Igcsedata/> */}
    <HorizontalTabs tabs={tabs} />


    </div>
    </div>
  )
}

export default holidayhomework
