import React from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import Title from '@/components/widgets/Title'
import { useTranslation } from 'react-i18next'
import { IconMap } from '@/components/widgets/Icon'
import { Linko } from '@/components/widgets/Linko'

const Creation = () => {
  const { t } = useTranslation()
  const iconmap = IconMap.Hobbies
  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.MusicPlayer}
          label="app:creation:creationMusic"
          href="#creation-music"
        />
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.RetroGaming}
          label="app:creation:creationRetrogaming"
          href="#creation-retrogaming"
        />
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <div className="row">
        <Title
          id="creation-music"
          h="h2"
          label="app:creation:creationMusic"
          iconmap={IconMap.MusicPlayer}
        />
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <iframe
            title="creation-retrogaming"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/qe0uJkU3lws"
            style={{ aspectRatio: '16/9' }}
          />
          <span className="float-end mx-3">jperformer · Introspection</span>
        </div>
        <div className="col-md-4">
          <iframe
            title="jperformer - Introspection"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/T0qKCsP4Mw8"
            style={{ aspectRatio: '16/9' }}
          />
          <span className="float-end mx-3">jperformer · Before Dawn</span>
        </div>
        <div className="col-md-4">
          <iframe
            title="jperformer - Introspection"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/Av2-thWndRI"
            style={{ aspectRatio: '16/9' }}
          />
          <span className="float-end mx-3">jperformer · Liquid Surrender</span>
        </div>
      </div>
      <div className="row">
        <Title
          id="creation-retrogaming"
          h="h2"
          label="app:creation:creationRetrogaming"
          iconmap={IconMap.RetroGaming}
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <iframe
            title="Metal Gear · メタルギア. MSX2. Konami 1987. Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/VI1mJxG7DYA"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Metal Gear · メタルギア. MSX2. Konami 1987. Full Playthrough
          </span>
        </div>
        <div className="col-md-4">
          <iframe
            title="Space Manbow · スペースマンボウ (FRS' TurboFix Patch v1.1).
            MSX2/SCC. Konami 1989. Full Playthrough (3 Laps)"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/PJAUc2hqsZw"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Space Manbow · スペースマンボウ (FRS' TurboFix Patch v1.1).
            MSX2/SCC. Konami 1989. Full Playthrough (3 Laps)
          </span>
        </div>
        <div className="col-md-4">
          <iframe
            title="The Treasure Of Uşas ウシャス. MSX2. Konami 1987. Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/DbAKZ8G8uhM"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            The Treasure Of Uşas ウシャス. MSX2. Konami 1987. Full Playthrough
          </span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <iframe
            title="Vampire Killer · Akumajō Dracula · 悪魔城ドラキュラ. MSX2/SCC. Konami 1986. Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/gFqhOmwS9AQ"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Vampire Killer · Akumajō Dracula · 悪魔城ドラキュラ. MSX2/SCC.
            Konami 1986. Full Playthrough
          </span>
        </div>
        <div className="col-md-4">
          <iframe
            title="Metal Gear 2 Solid Snake · メタルギア２　ソリッドスネーク. MSX2/SCC. Konami 1990. Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/CerGHPH1Yak"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Metal Gear 2 Solid Snake · メタルギア２　ソリッドスネーク. MSX2/SCC.
            Konami 1990. Full Playthrough
          </span>
        </div>
        <div className="col-md-4">
          <iframe
            title="Head Over Heels (MSX2 Remake). MSX2. Ocean 1987 / FX Software 2016. Full Playthrough (Good Ending)"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/Dft1I4vS3-4"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Head Over Heels (MSX2 Remake). MSX2. Ocean 1987 / FX Software 2016.
            Full Playthrough (Good Ending)
          </span>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <iframe
            title="Nemesis 2 · Gradius II · グラディウス2. MSX/SCC. Konami 1987. Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/yt5GF4cEeNI"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Nemesis 2 · Gradius II · グラディウス2. MSX/SCC. Konami 1987. Full
            Playthrough
          </span>
        </div>
        <div className="col-md-4">
          <iframe
            title="Rastan Saga ラスタンサーガ. MSX2. TAITO 1988. My Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/xQfYs5RPsSo"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Rastan Saga ラスタンサーガ. MSX2. TAITO 1988. My Full Playthrough
          </span>
        </div>
        <div className="col-md-4">
          <iframe
            title="Salamander (Enhanced Version) · サラマンダ. MSX/SCC. Konami 1987. Full Playthrough"
            className="w-100 shadow rounded"
            src="https://www.youtube.com/embed/Y6x0jfEiwn4"
            style={{ aspectRatio: '4/3' }}
          />
          <span className="float-end mx-3">
            Salamander (Enhanced Version) · サラマンダ. MSX/SCC. Konami 1987.
            Full Playthrough
          </span>
        </div>
      </div>
    </PageLayout>
  )
}

export default Creation
