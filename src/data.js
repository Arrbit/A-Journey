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
                                text: 'The Dead Ends, The Stigma Dreamscape and Smileton',
                                gearType: null,
                                weekly: false,
                            },
                            { 
                                icon: quest,
                                text: 'Job Artifact Gear',
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
                                text: 'Zodiark',
                                gearType: 'Accessories',
                                weekly: false,
                             },
                             { 
                                text: 'Hydaelyn',
                                gearType: 'Weapon',
                                weekly: false,
                             },
                            { 
                                icon: raid,
                                text: 'Pandaemonium: Asphodelos',
                                gearType: null,
                                weekly: false,
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
                                text: 'Pandaemonium: Asphodelos (Savage)',
                                gearType: null,
                                weekly: false,
                                midPatch: '6.05'
                            },
                            {
                                icon: null,
                                text: 'Asphodelos: The Fourth Circle (Savage)',
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
            one: {
                name: '6.1',
                content: [
                    {
                        ilvl: '575',
                        type: [
                            { 
                                icon: dungeon,
                                text: 'Dungeon Gear',
                                weekly: false,
                             },
                        ]
                    },
                    {
                        ilvl: '590',
                        type: [
                            { 
                                icon: raid,
                                text: 'Myths of the Realm: Aglaia',
                                weekly: true,
                             },
                        ]
                    },
                    {
                        ilvl: '595',
                        type: [
                            { 
                                icon: trial,
                                text: `The Minstrel's Ballad: Endsinger's Aria`,
                                weekly: false,
                                gearType: 'Weapon',
                             },
                        ]
                    },
                ]
            },
            two: {
                name: '6.2',
                content: [
                    { ilvl: '585',
                        type: [
                            { 
                                icon: dungeon,
                                text: 'Dungeon Gear',
                                weekly: false,
                            },
                        ]
                    },
                    { ilvl: '590',
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                weekly: false,
                                gearType: 'Unlimited'
                            },
                        ]
                    },
                    { ilvl: '610',
                        type: [
                            { 
                                icon: raid,
                                text: 'Normal Raid 5-8',
                                weekly: true,
                            },
                            { 
                                icon: crafted,
                                text: 'Crafted Gear',
                                weekly: false,
                            },
                        ],
                    },
                    { ilvl: '615',
                        type: [
                            { 
                                icon: trial,
                                text: 'Extreme Trial',
                                weekly: false,
                                gearType: 'Weapon',
                            },
                        ]
                    },
                    { ilvl: '620',
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                weekly: true,
                            },
                        ]
                    },
                    { ilvl: '630',
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Upgraded Tomestone Gear',
                                weekly: false,
                            },
                            {
                                icon: savage,
                                text: 'Savage Raid 5-8',
                                gearType: null,
                                weekly: true,
                            },
                            {
                                icon: null,
                                text: 'Savage Raid 8',
                                gearType: 'Weapon',
                                weekly: true,
                                midIlvl: '635'
                            }
                        ]
                    },
                ]
            },
            three: {
                name: '6.3',
                content: [
                    { ilvl: '605', 
                        type: [
                            { 
                                icon: dungeon,
                                text: 'Dungeon Gear',
                                weekly: false,
                            },
                        ]
                    },
                    { ilvl: '620',
                        type: [
                            { 
                                icon: raid,
                                text: '24-man Raid No.2',
                                weekly: true,
                            },
                        ]
                    },
                    { ilvl: '625',
                        type: [
                            { 
                                icon: trial,
                                text: 'Extreme Trial',
                                weekly: false,
                                gearType: 'Weapon',
                            },
                        ]
                    },
                ]
            },
            four: {
                name: '6.4',
                content: [
                    { ilvl: '615',
                        type: [
                            { 
                                icon: dungeon,
                                text: 'Dungeon Gear',
                                weekly: false,
                            },
                        ]
                    },
                    { ilvl: '620',
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                weekly: false,
                                gearType: 'Unlimited'
                            },
                        ]
                    },
                    { ilvl: '640',
                        type: [
                            { 
                                icon: raid,
                                text: 'Normal Raid 9-12',
                                weekly: true,
                            },
                            { 
                                icon: crafted,
                                text: 'Crafted Gear',
                                weekly: false,
                            },
                        ],
                    },
                    { ilvl: '645',
                        type: [
                            { 
                                icon: trial,
                                text: 'Extreme Trial',
                                weekly: false,
                                gearType: 'Weapon'
                            },
                        ],
                    },
                    { ilvl: '650',
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                weekly: true,
                            },
                        ],
                    },
                    { ilvl: '660',
                        type: [
                            { 
                                icon: tomestone,
                                text: 'Upgraded Tomestone Gear',
                                weekly: false,
                            },
                            { 
                                icon: savage,
                                text: 'Savage Raid 9-12',
                                weekly: true,
                            },
                            { 
                                icon: null,
                                text: 'Savage Raid 12',
                                weekly: true,
                                gearType: 'Weapon',
                                midIlvl: '665'
                            },
                        ],
                    },
                ]
            },
            five: {
                name: '6.5',
                content: [
                    { ilvl: '635', 
                        type: [
                            { 
                                icon: dungeon,
                                text: 'Dungeon Gear',
                                weekly: false,
                            },
                        ],
                    },
                    { ilvl: '650',
                        type: [
                            { 
                                icon: raid,
                                text: '24-man Raid No.3',
                                weekly: true,
                            },
                        ],
                    },
                    { ilvl: '655',
                        type: [
                            { 
                                icon: trial,
                                text: 'Extreme Trial',
                                weekly: false,
                                gearType: 'Weapon'
                            },
                        ],
                    },
                ]
            },
        },
        levels: [
            {
                name: '560',
                content: [
                {   
                    patch: '6.0',
                    type: [
                        {
                            icon: dungeon,
                            text: 'The Dead Ends, The Stigma Dreamscape and Smileton',
                            gearType: null,
                            weekly: false,
                        },
                        { 
                            icon: quest,
                            text: 'Job Artifact Gear',
                            gearType: null,
                            weekly: false,
                        }
                    ],
                }],
            },
            {
                name: '570',
                content: [
                {   
                    patch: '6.0',
                    type: [
                        {
                            icon: tomestone,
                            text: 'Tomestone Gear',
                            gearType: null,
                            weekly: false,
                        },
                    ],
                },
                {   
                    patch: '6.1',
                    type: [
                        {
                            icon: dungeon,
                            text: 'Dungeon Gear',
                            gearType: null,
                            weekly: false,
                        },
                    ],
                }
                ],
            },
            {
            name: '580',
            content: [
                { patch: '6.0',
                    type: [
                        {
                            icon: trial,
                            text: 'Zodiark',
                            gearType: 'Accessories',
                            weekly: false,
                        },
                        {
                            text: 'Hydaelyn',
                            gearType: 'Weapon',
                            weekly: false,
                        },
                    ],
                },
                { patch: '6.01',
                    type: [
                        {
                            icon: raid,
                            text: 'Pandaemonium: Asphodelos',
                            gearType: null,
                            weekly: false,
                        },
                    ],
                },
                { patch: '6.05',
                    type: [
                        {
                            icon: crafted,
                            text: 'Crafted Gear',
                            gearType: null,
                            weekly: false,
                        },
                    ],
                },
                { patch: '6.2',
                    type: [
                    {
                        icon: dungeon,
                        text: 'Dungeon Gear',
                        gearType: null,
                        weekly: false,
                    }]
                },
                ]
            },
            {
            name: '590',
            content: [
                { patch: '6.05', 
                    type: [
                        {
                            icon: tomestone,
                            text: 'Tomestone Gear',
                            gearType: null,
                            weekly: true,
                        },
                    ],
                },
                { patch: '6.1',
                    type: [
                        {
                            icon: raid,
                            text: 'Myths of the Realm: Aglaia',
                            gearType: null,
                            weekly: true,
                        },
                        {
                            icon: trial,
                            text: `The Minstrel's Ballad: Endsinger's Aria`,
                            gearType: 'Weapon',
                            weekly: false,
                            midIlvl: '595'
                        },
                    ], 
                },
                { patch: '6.2',
                    type: [
                        {
                            icon: tomestone,
                            text: 'Tomestone Gear',
                            gearType: 'Unlimited',
                            weekly: false,
                        },
                    ],
                },
                ]
            },
            {
            name: '600',
            content: [
                { patch: '6.05',
                    type: [
                        {
                            icon: tomestone,
                            text: 'Upgraded Tomestone Gear',
                            weekly: false,
                        },
                        {
                            icon: savage,
                            text: 'Pandaemonium: Asphodelos (Savage)',
                            weekly: false,
                        },
                        {
                            icon: null,
                            text: 'Asphodelos: The Fourth Circle (Savage)',
                            gearType: 'Weapon',
                            midIlvl: '605',
                            weekly: true,
                        },
                    ],
                },
                { patch: '6.3',
                    type: [
                        {
                            icon: dungeon,
                            text: 'Dungeon Gear',
                            weekly: false,
                        },
                    ],
                },
                ]
            },
            {
            name: '610',
            content: [
                { patch: '6.2', 
                    type: [
                        {
                            icon: raid,
                            text: 'Normal Raid 5-8',
                            weekly: true,
                        },
                        {
                            icon: crafted,
                            text: 'Crafted Gear',
                            weekly: false,
                        },
                        {
                            icon: trial,
                            text: 'Extreme Trial',
                            weekly: false,
                            gearType: 'Weapon',
                            midIlvl: '615'
                        },
                    ],
                },
                { patch: '6.4',
                    type: [
                        {
                            icon: dungeon,
                            text: 'Dungeon Gear',
                            weekly: false,
                        },
                    ],
                },
                ]
            },
            {
            name: '620',
            content: [
                { patch: '6.2', 
                    type: [
                        {
                            icon: tomestone,
                            text: 'Tomestone Gear',
                            weekly: true,
                        },
                    ],
                },
                { patch: '6.3',
                    type: [
                        {
                            icon: raid,
                            text: '24-man Normal No.2',
                            weekly: true,
                        },
                        {
                            icon: trial,
                            text: 'Extreme Trial',
                            weekly: false,
                            gearType: 'Weapon',
                            midIlvl: '625'
                        },
                    ],
                },
                { patch: '6.4',
                    type: [
                        {
                            icon: tomestone,
                            text: 'Tomestone Gear',
                            weekly: false,
                            gearType: 'Unlimited'
                        },
                    ],
                },
                ]
            },
            {
            name: '630',
            content: [
                { patch: '6.2',
                    type: [
                        {
                            icon: tomestone,
                            text: 'Upgraded Tomestone Gear',
                            weekly: false,
                        },
                        {
                            icon: savage,
                            text: 'Savage Raid 5-8',
                            weekly: true,
                        },
                        {
                            icon: null,
                            text: 'Savage Raid 8',
                            gearType: 'Weapon',
                            midIlvl: '635',
                            weekly: true,
                        },
                    ],
                },
                { patch: '6.5',
                    type: [
                        {
                            icon: dungeon,
                            text: 'Dungeon Gear',
                        },
                    ],
                },
            ]
            },
            {
            name: '640',
            content: [
                { patch: '6.4', 
                    type: [
                        {
                            icon: raid,
                            text: 'Normal Raid 9-12',
                            weekly: true,
                        },
                        {
                            icon: crafted,
                            text: 'Crafted Gear',
                            weekly: false,
                        },
                        {
                            icon: trial,
                            text: 'Extreme Trial',
                            weekly: false,
                            gearType: 'Weapon',
                            midIlvl: '645'
                        },
                    ],
                },
            ]
            },
            {
            name: '650',
            content: [
                { patch: '6.4', 
                    type: [
                        {
                            icon: tomestone,
                            text: 'Tomestone Gear',
                            weekly: true,
                        },
                    ],
                },
                { patch: '6.5',
                    type: [
                        {
                            icon: raid,
                            text: '24-man Normal No.3',
                            weekly: true,
                        },
                        {
                            icon: trial,
                            text: 'Extreme Trial',
                            weekly: false,
                            gearType: 'Weapon',
                            midIlvl: '655'
                        },
                    ],
                },
            ]
            },
            {
            name: '660',
            content: [
                { patch: '6.4',
                    type: [
                        {
                            icon: tomestone,
                            text: 'Upgraded Tomestone Gear',
                            weekly: false,
                        },
                        {
                            icon: savage,
                            text: 'Savage Raid 9-12',
                            weekly: true,
                        },
                        {
                            icon: null,
                            text: 'Savage Raid 12',
                            gearType: 'Weapon',
                            midIlvl: '665',
                            weekly: true,
                        },
                    ],
                },
            ]
            },
        ],
        overview: [
            {   
                patchZero: [
                    {
                        text: 'The Dead Ends, The Stigma Dreamscape and Smileton',
                        gearType: null,
                        weekly: false,
                        icon: dungeon,
                    },
                    { 
                        text: 'Job Artifact Gear',
                        gearType: null,
                        weekly: false,
                        icon: quest,
                    }
                ],
                ilvl: '560',
             },
             {
                ilvl: '570',
                patchZero: [
                    {
                        text: 'Tomestone Gear',
                        gearType: null,
                        weekly: false,
                        icon: tomestone,
                    },
                ],
                patchOne: [
                    {
                        text: 'Dungeon Gear',
                        gearType: null,
                        weekly: false,
                        icon: dungeon,
                        midIlvl: '575',
                    },
                ],
             },
             {
                ilvl: '580',
                patchZero: [
                    {
                        text: 'Zodiark',
                        gearType: 'Accessories',
                        weekly: false,
                        icon: trial,
                    },
                    {
                        text: 'Hydaelyn',
                        gearType: 'Weapon',
                        weekly: false,
                    },
                    {
                        text: 'Pandaemonium: Asphodelos',
                        gearType: null,
                        weekly: false,
                        icon: raid,
                    },
                    {
                        text: 'Crafted Gear',
                        gearType: null,
                        weekly: false,
                        icon: crafted,
                    },
                ],
                patchTwo: [
                    {
                        text: 'Dungeon Gear',
                        gearType: null,
                        weekly: false,
                        icon: dungeon,
                        midIlvl: '585',
                    },
                ],
             },
             {
                ilvl: '590',
                patchZero: [
                    {
                        text: 'Tomestone Gear',
                        gearType: null,
                        weekly: true,
                        icon: tomestone,
                    },
                ],
                patchOne: [
                    {
                        text: `The Minstrel's Ballad: Endsinger's Aria`,
                        gearType: 'Weapon',
                        weekly: false,
                        icon: trial,
                    },
                    {
                        text: 'Myths of the Realm: Aglaia',
                        gearType: null,
                        weekly: true,
                        icon: raid,
                    },
                ],
                patchTwo: [
                    {
                        text: 'Tomestone Gear',
                        gearType: 'Unlimited',
                        weekly: false,
                        icon: tomestone,
                    },
                ],
             },
             {
                ilvl: '600',
                patchZero: [
                    {
                        text: 'Upgraded Tomestone Gear',
                        gearType: null,
                        weekly: true,
                        icon: tomestone,
                    },
                    {
                        text: 'Pandaemonium: Asphodelos (Savage)',
                        gearType: null,
                        weekly: false,
                        icon: savage,
                    },
                    {
                        text: 'Asphodelos: The Fourth Circle (Savage)',
                        gearType: 'Weapon',
                        weekly: true,
                        icon: null,
                        midIlvl: '605'
                    },
                ],
                patchThree: [
                    {
                        text: 'Dungeon Gear',
                        gearType: null,
                        weekly: false,
                        icon: dungeon,
                        midIlvl: '605',
                    },
                ],
             },
             {
                ilvl: '610',
                patchTwo: [
                    {
                        text: 'Extreme Trial',
                        gearType: 'Weapon',
                        weekly: false,
                        icon: trial,
                        midIlvl: '615'
                    },
                    {
                        text: 'Normal Raid 5-8',
                        gearType: null,
                        weekly: true,
                        icon: raid,
                    },
                    {
                        text: 'Crafted Gear',
                        gearType: null,
                        weekly: false,
                        icon: crafted,
                    },
                ],
                patchFour: [
                    {
                        text: 'Dungeon Gear',
                        gearType: null,
                        weekly: false,
                        icon: dungeon,
                        midIlvl: '615',
                    },
                ]
             },
             {
                ilvl: '620',
                patchTwo: [
                    {
                        text: 'Tomestone Gear',
                        gearType: null,
                        weekly: true,
                        icon: tomestone,
                    },
                ],
                patchThree: [
                    {
                        text: 'Extreme Trial',
                        gearType: 'Weapon',
                        weekly: false,
                        icon: trial,
                        midIlvl: '625'
                    },
                    {
                        text: '24-man raid No.2',
                        gearType: null,
                        weekly: true,
                        icon: raid,
                    },
                ],
                patchFour: [
                    {
                        text: 'Tomestone Gear',
                        gearType: 'Unlimited',
                        weekly: false,
                        icon: tomestone,
                    },
                ],
             },
             {
                ilvl: '630',
                patchTwo: [
                    {
                        text: 'Upgraded Tomestone Gear',
                        gearType: null,
                        weekly: true,
                        icon: tomestone,
                    },
                    {
                        text: 'Savage Raid 5-8',
                        gearType: null,
                        weekly: true,
                        icon: savage,
                    },
                    {
                        text: 'Savage Raid 8',
                        gearType: 'Weapon',
                        weekly: true,
                        icon: null,
                        midIlvl: '635'
                    }, 
                  ],
                patchFive: [
                    {
                        text: 'Dungeon Gear',
                        gearType: null,
                        weekly: false,
                        icon: dungeon,
                        midIlvl: '635',
                    },
                ]
             },
             {
                ilvl: '640',
                patchFour: [
                    {
                        text: 'Extreme Trial',
                        gearType: 'Weapon',
                        weekly: false,
                        icon: trial,
                        midIlvl: '645'
                    },
                    {
                        text: 'Normal Raid 9-12',
                        gearType: null,
                        weekly: true,
                        icon: raid,
                    },
                    {
                        text: 'Crafted Gear',
                        gearType: null,
                        weekly: false,
                        icon: crafted,
                    },
                  ],
             },
             {
                ilvl: '650',
                patchFour: [
                    {
                        text: 'Tomestone Gear',
                        gearType: null,
                        weekly: true,
                        icon: tomestone,
                    }, 
                ],
                patchFive: [
                    {
                        text: 'Extreme Trial',
                        gearType: 'Weapon',
                        weekly: false,
                        icon: trial,
                        midIlvl: '655'
                    },
                    {
                        text: '24-man raid No.3',
                        gearType: null,
                        weekly: true,
                        icon: raid,
                    },
                  ],
             },
             {
                ilvl: '660',
                patchFour: [
                    {
                        text: 'Upgraded Tomestone Gear',
                        gearType: null,
                        weekly: true,
                        icon: tomestone,
                    },
                    {
                        text: 'Savage Raid 9-12',
                        gearType: null,
                        weekly: true,
                        icon: savage,
                    },
                    {
                        text: 'Savage Raid 12',
                        gearType: 'Weapon',
                        weekly: true,
                        icon: null,
                        midIlvl: '665'
                    }, 
                  ],
             },
        ]
    },
    shadowbringers: {
        patches : {
            zero: {
                name: '5.0',
                content: 
                [
                    {  
                        ilvl: '430',
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
                    },
                    {
                        ilvl: '440',
                        type: [
                            {
                                icon: tomestone,
                                text: 'Tomestone Gear',
                                gearType: null,
                                weekly: false,
                            }
                        ],
                    },
                    {
                        ilvl: '450',
                        type: [
                            { 
                                icon: trial,
                                text: 'Extreme Trial',
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
                        ilvl: '460',
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
                        ilvl: '470',
                    },
                ]
            },
        }
    },
}



export default expacs;