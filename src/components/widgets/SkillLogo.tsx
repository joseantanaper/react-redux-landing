import React from 'react'

import html5 from '@assets/icons/html5.png'
import css3 from '@assets/icons/css3.png'
import js from '@assets/icons/js.png'
import ts from '@assets/icons/ts.png'
import bootstrap from '@assets/icons/bootstrap.png'
import materialize from '@assets/icons/materialize.png'
import react from '@assets/icons/react.png'
import vue from '@assets/icons/vue.png'
import vite from '@assets/icons/vite.png'
import jquery from '@assets/icons/jquerymini.png'
import angular from '@assets/icons/angular.png'

import java from '@assets/icons/java.png'
import spring from '@assets/icons/spring.png'
import nodejs from '@assets/icons/nodejs.png'
import apollo from '@assets/icons/apollo.png'
import rest from '@assets/icons/rest.png'
import graphql from '@assets/icons/graphql.png'

import powerplatform from '@assets/icons/powerplatform.png'
import powerautomate from '@assets/icons/powerautomate.png'
import csharp from '@assets/icons/csharp.png'
import vbnet from '@assets/icons/vbnet.png'

import vscode from '@assets/icons/vscode.png'
import visualstudio from '@assets/icons/visualstudio.png'
import netbeans from '@assets/icons/netbeans.png'
import eclipse from '@assets/icons/eclipse.png'
import git from '@assets/icons/git.png'
import intellij from '@assets/icons/intellij.png'
import github from '@assets/icons/github.png'
import gitlab from '@assets/icons/gitlab.png'

interface Props {
  logo: string
  label: string
  className?: string
}

export const SkillLogo = ({ logo, label, className }: Props) => {
  const icon = () => {
    switch (logo) {
      case 'html5':
        return html5
      case 'css3':
        return css3
      case 'js':
        return js
      case 'ts':
        return ts
      case 'bootstrap':
        return bootstrap
      case 'materialize':
        return materialize
      case 'react':
        return react
      case 'vue':
        return vue
      case 'vite':
        return vite

      case 'angular':
        return angular
      case 'jquery':
        return jquery
      case 'java':
        return java
      case 'spring':
        return spring
      case 'nodejs':
        return nodejs
      case 'graphql':
        return graphql
      case 'rest':
        return rest
      case 'powerplatform':
        return powerplatform
      case 'powerautomate':
        return powerautomate
      case 'csharp':
        return csharp
      case 'vbnet':
        return vbnet
      case 'vscode':
        return vscode
      case 'visualstudio':
        return visualstudio
      case 'netbeans':
        return netbeans
      case 'eclipse':
        return eclipse
      case 'intellij':
        return intellij
      case 'git':
        return git
      case 'github':
        return github
      case 'gitlab':
        return gitlab
    }
  }
  return (
    <div
      className={`text-center ${className}`}
      style={{ maxWidth: '80px', verticalAlign: 'top', display: 'block' }}
    >
      <img
        src={icon()}
        height={26}
        className={``}
        alt={`${label}`}
        style={{
          filter: 'drop-shadow(0 0 1px white) drop-shadow(0 0 2px gray)',
        }}
      />
      <span className="fw-light small text-secondary d-block">{label}</span>
    </div>
  )
}
