import data from './Survey_Information_Design_clean-parsed.json'

interface DataType {
  geboortedatum: string
  geboorteplaats: string
  hoeveelheidBroers: string
  hoeveelheidZussen: string
  hoeveelheidOomsEnTantes: string
  rijbewijs: string
  grootsteAutoVanOudersOfVerzorgers: string
  bedragKwijtAanAbonnementen: string
  oogKleur: string
  beroepMoeder: string
  beroepVader: string
  huisDieren: string
  hobbies: string
  naamAnderGeslacht: string
  grootteSlaapkamer: string
  grootteBureau: string
  hoeveelheidKledingstukken: string
  bedragPerMaandAanKleding: string
  hoeveelPaarSchoenen: string
  schoenmaat: string
  cijferGezondheid: string
  cijferStressniveau: string
  politiekeVoorkeur: string
  relatie: string
  mensenAangesprokenMetU: string
  vooropleiding: string
  studiepunten: string
  leuksteCMDVak: string
  naCMDDoen: string
  voorkeuren: string
  CMDVoorkeuren: string
  bijbaan: string
  urenPerWeekBesteedAanBijbaan: string
  waaromGekozenVoorEigenTrack: string
  watWilJeWorden: string
  hoeveelPerMaandWillenVerdienen: string
  hoogteStudieschuld: string
  reistijdNaarSchool: string
  belangrijksteEigenschapOntwerper: string
  lievelingsboek: string
  favorieteSpullen: string
  favorieteArtiest: string
  lievelingsMuziekNummer: string
  geluksGetal: string
  favorieteMuziekGenre: string
  favorieteGame: string
  favorieteFilm: string
  favorieteSerie: string
  hoogsteBedragOoitUitgegeven: string
  waaraanHoogsteBedragOoitUitgegeven: string
  lievelingsmerk: string
  lievelingskleur: string
  mooistePlekOoitGeweest: string
  lelijkstePlekOoitGeweest: string
  hoeveelUurBuiten: string
  begroetingKennissen: string
  bedtijd: string
  opstaantijd: string
  aantalGlazenWaterPerDag: string
  aantalGlazenAlcoholPerWeek: string
  lievelingsWeekdag: string
  hoeveelMinutenPerDagOpSocialMedia: string
  welkeSocialMediaGebruikt: string
  stappenPerDagVolgensTelefoon: string
  schermtijdPerDagVolgensTelefoon: string
  theeOfKoffie: string
  hoeveelGlazenTheeOfKoffiePerDag: string
  etenAlsOntbijt: string
  etenAlsLunch: string
  etenAlsAvondeten: string
  favorieteDrug: string
  hoeVaakFavorieteDrugPerJaar: string
  lievelingsgerecht: string
  lievelingskeuken: string
  afstandInMetersVanSupermarkt: string
  tijdreisJaar: string
  waaromTijdreizenNaarJaar: string
  watMaaktVrolijk: string
  meestInspirerendeMeegemaakt: string
  gelovenInGoedEnKwaad: string
  watMaaktOngemakkelijk: string
  tevredenheidMetLeven: string
  toekomstbeeld: string
  hoeWasLevenVoorCorona: string
  cijferRelatieTotTechnologie: string
  cijferRelatieTotNatuur: string
  perfectionistich: string
  zonderGeluidOfZonderBeeldLeven: string
  IntrovertOfExtrovert: string
  zelfgekozenNaam: string
  belangrijksteOnderwerpVanDezeTijd: string
  isVerandertDoorWelkeOntmoetingOfGebeurtenis: string
  verstePlekOoitgeweest: string
  gesprokenTalen: string
  gelovenInLevenBuitenPlaneet: string
}

type dirtyDataArrayType = [string, string][]
type dirtyDataType = [string, string]
type formattedDataArayType = [string, number][]

const arrayOfArrays = data.map((data: DataType) => {
  return Object.entries(data)
})

const arrayWithNumbers = arrayOfArrays.map(
  (arrayInArray: dirtyDataArrayType) => {
    const filteredArray = arrayInArray.filter((data) => {
      const num = parseInt(data[1])
      if (!isNaN(num)) {
        return data
      }
    })

    const convertedArray: formattedDataArayType = filteredArray.map(
      (data: dirtyDataType) => [data[0], parseInt(data[1])]
    )

    return convertedArray
  }
)

console.log(arrayWithNumbers)
