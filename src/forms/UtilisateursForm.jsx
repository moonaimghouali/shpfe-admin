import React from 'react'
import { TextBoxComponent} from '@syncfusion/ej2-react-inputs'
import { RxCross2}  from 'react-icons/rx'

import { Button } from '@syncfusion/ej2/buttons'

const UtilisateursForm = ({}) => {
  return (
    <div className='absolute flex flex-col justify-center items-center content-center z-50 overflow-hidden w-full h-full bg-neutral-900 opacity-90'>
        <div className='flex flex-col w-5/12 h-5/6 bg-white rounded p-4'>
            {/* Header */}
            <div className="flex flex-row justify-between">
                <p className='font-semibold text-2xl'>Ajouter un utilisateur</p>
                <button onClick={"askjs"}> <RxCross2 className='' size={32}/></button>
            </div>

            {/* divider */}
            <div className='h-px w-full bg-gray-300 mt-5'></div>

            {/* Form */}
            <div className="flex flex-col w-full mt-5 px-6">
                <TextBoxComponent id='Prenom' placeholder="Prenom"  floatLabelType="Always" />
                <TextBoxComponent id='Nom' placeholder="Nom"  floatLabelType="Always" />
                <TextBoxComponent id='Email' placeholder="Email"  floatLabelType="Always" />
                <TextBoxComponent id='nomUtilisateur' placeholder="Nom d'utilisateur" floatLabelType="Always" />
                <TextBoxComponent id='passWord' type="password" placeholder="Mot de passe" floatLabelType="Always" />
            </div>

            {/* Buttons */}
            <div className="flex"></div>
        </div>
    </div>
  )
}

export default UtilisateursForm