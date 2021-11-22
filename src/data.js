import crafted from './assets/crafted.png';
import dungeon from './assets/dungeon.png';
import quest from './assets/quest.png';
import raid from './assets/raid.png';
import savage from './assets/savage.png';
import tomestone from './assets/tomestone.png';
import trial from './assets/trial.png';

const expacs = {
    // please check if text is the same in all, if it we can do it just once
    endwalker: {
        patches : {
            zero: {
                name: '6.0',
                content: 
                [
                    {   
                        type: [
                            {
                                icon: dungeon,
                                text: 'Dungeon Gear',
                                gearType: null,
                                weekly: false,
                            },
                            { 
                                icon: quest,
                                text: 'Quest Gear',
                                gearType: null,
                                weekly: false,
                            }
                        ],
                        ilvl: '560',
                    },
                    {
                        type: [
                            {
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                gearType: null,
                                weekly: false,
                            }
                        ],
                        ilvl: '570',
                    },
                    {
                        ilvl: '580',
                        type: [
                            { 
                                icon: trial,
                                text: 'EX Trial',
                                gearType: 'Weapon + Accessories',
                                weekly: false,
                             },
                            { 
                                icon: raid,
                                text: 'Normal Raid 1-4',
                                gearType: null,
                                weekly: true,
                                midPatch: '6.01'
                             },
                            { 
                                icon: crafted,
                                text: 'Crafted Gear',
                                gearType: null,
                                weekly: false,
                                midPatch: '6.05'
                            },
                        ]
                    },
                    {
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                gearType: null,
                                weekly: true,
                                midPatch: '6.05'
                             }
                        ],
                        ilvl: '590',
                    },
                    {
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Upgraded Tomestone Gear',
                                gearType: null,
                                weekly: false,
                                midPatch: '6.05'
                            },
                            {
                                icon: savage,
                                text: 'Savage Raid 1-4',
                                gearType: null,
                                weekly: true,
                                midPatch: '6.05'
                            },
                            {
                                icon: null,
                                text: 'Savage Raid 4',
                                gearType: 'Weapon',
                                weekly: true,
                                midPatch: '6.05',
                                midIlvl: '605'
                            }
                        ],
                        ilvl: '600',
                    },
                ]
            },
            // one: {
            //     name: '6.1',
            //     content: [
            //         {   
            //             icons: [
            //                 { type: dungeon },
            //             ],
            //             ilvl: '575',
            //             text: 'Dungeon Gear'
            //         },
            //         {   
            //             icons: [
            //                 { type: raid },
            //             ],
            //             ilvl: '590',
            //             text: '24-man Raid No.1 (Weekly)'
            //         },
            //         { 
            //             ilvl: '595',
            //             icons: [
            //                 { type: trial },
            //             ],
            //             text: `EX Trial (Weapon)`
            //         },
            //     ]
            // },
            // two: {
            //     name: '6.2',
            //     content: [
            //         { ilvl: '585',
            //             icons: [
            //                 { type: dungeon },
            //             ],
            //             text: `Dungeon Gear`
            //         },
            //         { ilvl: '590',
            //             icons: [
            //                 { type: tomestone },
            //             ],
            //             text: `Tomestone Gear (Unlimited)`
            //         },
            //         { ilvl: '610',
            //             icons: [
            //                 { type: raid },
            //                 { type: crafted },
            //             ],
            //             text: `Normal Raid 5-8 (Weekly)\nCrafted Gear`
            //         },
            //         { ilvl: '615',
            //             icons: [
            //                 { type: trial },
            //             ],
            //             text: `EX Trial (Weapon)`
            //         },
            //         { ilvl: '620',
            //             icons: [
            //                 { type: tomestone },
            //             ],
            //             text: `Tomestone Gear (Weekly)`
            //         },
            //         { ilvl: '630',
            //             icons: [
            //                 { type: tomestone },
            //                 { type: savage },
            //             ],
            //             text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Gear Weapon (iLvl 635)`
            //         },
            //     ]
            // },
            // three: {
            //     name: '6.3',
            //     content: [
            //         { ilvl: '605', 
            //             icons: [
            //                 { type: dungeon }, 
            //             ],
            //             text: `Dungeon Gear`
            //         },
            //         { ilvl: '620',
            //             icons: [
            //                 { type: raid },
            //             ],
            //             text: `24-man Raid No.2 (Weekly)` 
            //         },
            //         { ilvl: '625',
            //             icons: [
            //                 { type: trial },
            //             ],
            //             text: `EX Trial (Weapon)`
            //         },
            //     ]
            // },
            // four: {
            //     name: '6.4',
            //     content: [
            //         { ilvl: '615',
            //             icons: [
            //                 { type: dungeon },
            //             ],
            //             text: `Dungeon Gear`
            //         },
            //         { ilvl: '620',
            //             icons: [
            //                 { type: tomestone },
            //             ],
            //             text: `Tomestone Gear (Unlimited)`
            //         },
            //         { ilvl: '640',
            //             icons: [
            //                 { type: raid },
            //                 { type: crafted },
            //             ],
            //             text: `Normal Raid 9-12 (Weekly)\nCrafted Gear`
            //         },
            //         { ilvl: '645',
            //             icons: [
            //                 { type: trial },
            //             ],
            //             text: `EX Trial (Weapon)`
            //         },
            //         { ilvl: '650',
            //             icons: [
            //                 { type: tomestone },
            //             ],
            //             text: `Tomestone Gear (Weekly)`
            //         },
            //         { ilvl: '660',
            //             icons: [
            //                 { type: tomestone },
            //                 { type: savage },
            //             ],
            //             text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Gear Weapon (iLvl 665)`
            //         },
            //     ]
            // },
            // five: {
            //     name: '6.5',
            //     content: [
            //         { ilvl: '635', 
            //             icons: [
            //             { type: dungeon }, 
            //             ],
            //             text: `Dungeon Gear`
            //         },
            //         { ilvl: '650',
            //             icons: [
            //             { type: raid },
            //             ],
            //             text: `24-man Raid No.3 (Weekly)` 
            //         },
            //         { ilvl: '655',
            //             icons: [
            //             { type: trial },
            //             ],
            //             text: `EX Trial (Weapon)`
            //         },
            //     ]
            // },
        },
        // levels: [
        //     {
        //         name: '560',
        //         content: [
        //            { patch: '6.0', 
        //              icons: [
        //                 { type: quest }, 
        //                 { type: dungeon }, 
        //               ],
        //               text: `Quest Gear\nDungeon Gear`
        //            },
        //            ]
        //         },
        //         {
        //         name: '570',
        //         content: [
        //            { patch: '6.0', 
        //              icons: [
        //                 { type: tomestone }, 
        //               ],
        //               text: `Tomestone Gear`
        //            },
        //            { patch: '6.1',
        //               icons: [
        //                 { type: dungeon },
        //               ],
        //               text: `Dungeon Gear` 
        //            },
        //            ]
        //         },
        //         {
        //         name: '580',
        //         content: [
        //            { patch: '6.0',
        //               icons: [
        //                 { type: trial },
        //               ],
        //               text: `EX Trial (Weapon + Accessories)`
        //            },
        //            { patch: '6.01',
        //               icons: [
        //                 { type: raid },
        //               ],
        //               text: `Normal Raid 1-4 (Weekly) `
        //            },
        //            { patch: '6.05',
        //               icons: [
        //                 { type: crafted },
        //               ],
        //               text: `Crafted Gear`
        //            },
        //            { patch: '6.2',
        //               icons: [
        //                 { type: dungeon },
        //               ],
        //               text: `Dungeon Gear`
        //            },
        //            ]
        //         },
        //         {
        //         name: '590',
        //         content: [
        //            { patch: '6.05', 
        //              icons: [
        //                 { type: tomestone }, 
        //               ],
        //               text: `Tomestone Gear (Weekly)`
        //            },
        //            { patch: '6.1',
        //               icons: [
        //                 { type: raid },
        //                 { type: trial },
        //               ],
        //               text: `24-man Normal No.1 (Weekly)\nEX Trial (Weapon) (iLvl 595)` 
        //            },
        //            { patch: '6.2',
        //               icons: [
        //                 { type: tomestone },
        //               ],
        //               text: `Tomestone Gear (Unlimited)`
        //            },
        //            ]
        //         },
        //         {
        //         name: '600',
        //         content: [
        //            { patch: '6.05',
        //               icons: [
        //                 { type: tomestone },
        //                 { type: savage },
        //               ],
        //               text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 605)`
        //            },
        //            { patch: '6.3',
        //               icons: [
        //                 { type: dungeon },
        //               ],
        //               text: `Dungeon Gear`
        //            },
        //            ]
        //         },
        //         {
        //         name: '610',
        //         content: [
        //            { patch: '6.2', 
        //              icons: [
        //                 { type: raid }, 
        //                 { type: crafted }, 
        //                 { type: trial }, 
        //               ],
        //               text: `Normal Raid 5-8 (Weekly)\nCrafted Gear\nEX Trial (Weapon) (iLvl 615)`
        //            },
        //            { patch: '6.4',
        //               icons: [
        //                 { type: dungeon },
        //               ],
        //               text: `Dungeon Gear` 
        //            },
        //            ]
        //         },
        //         {
        //         name: '620',
        //         content: [
        //            { patch: '6.2', 
        //              icons: [
        //                 { type: tomestone }, 
        //               ],
        //               text: `Tomestone Gear (Weekly)`
        //            },
        //            { patch: '6.3',
        //               icons: [
        //                 { type: raid },
        //                 { type: trial },
        //               ],
        //               text: `24-man Normal No.2 (Weekly)\nEX Trial (Weapon) (iLvl 625)` 
        //            },
        //            { patch: '6.4',
        //               icons: [
        //                 { type: tomestone },
        //               ],
        //               text: `Tomestone Gear (Unlimited)`
        //            },
        //            ]
        //         },
        //         {
        //         name: '630',
        //         content: [
        //            { patch: '6.2',
        //               icons: [
        //                 { type: tomestone },
        //                 { type: savage },
        //               ],
        //               text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 635)`
        //            },
        //            { patch: '6.5',
        //               icons: [
        //                 { type: dungeon },
        //               ],
        //               text: `Dungeon Gear`
        //            },
        //            ]
        //         },
        //         {
        //         name: '640',
        //         content: [
        //            { patch: '6.4', 
        //              icons: [
        //                 { type: raid }, 
        //                 { type: crafted }, 
        //                 { type: trial }, 
        //               ],
        //               text: `Normal Raid 9-12 (Weekly)\nCrafted Gear\nEX Trial (Weapon) (iLvl 645)`
        //            },
        //            ]
        //         },
        //         {
        //         name: '650',
        //         content: [
        //            { patch: '6.4', 
        //              icons: [
        //                 { type: tomestone }, 
        //               ],
        //               text: `Tomestone Gear (Weekly)`
        //            },
        //            { patch: '6.5',
        //               icons: [
        //                 { type: raid },
        //                 { type: trial },
        //               ],
        //               text: `24-man Normal No.3 (Weekly)\nEX Trial (Weapon) (iLvl 655)` 
        //            },
        //            ]
        //         },
        //         {
        //         name: '660',
        //         content: [
        //            { patch: '6.4',
        //               icons: [
        //                 { type: tomestone },
        //                 { type: savage },
        //               ],
        //               text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 665)`
        //            },
        //            ]
        //         },
        // ]
    }
}



export default expacs;