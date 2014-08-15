/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('fiddleArchitectCtrls.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'fiddleArchitectCtrls.view.MyViewportViewModel',
        'Ext.panel.Tool',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.field.Date',
        'Ext.form.field.File',
        'Ext.form.field.HtmlEditor',
        'Ext.slider.Multi',
        'Ext.form.field.Number',
        'Ext.form.field.Radio',
        'Ext.form.field.TextArea',
        'Ext.form.field.Time',
        'Ext.form.field.Trigger',
        'Ext.menu.Separator',
        'Ext.menu.CheckItem',
        'Ext.menu.ColorPicker',
        'Ext.menu.DatePicker',
        'Ext.ProgressBar',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Separator',
        'Ext.button.Cycle',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],

    viewModel: {
        type: 'myviewport'
    },
    autoScroll: true,
    layout: 'absolute',

    items: [
        {
            xtype: 'panel',
            x: 10,
            y: 10,
            height: 150,
            maxWidth: 150,
            title: 'Regular Panel',
            tools: [
                {
                    xtype: 'tool'
                }
            ]
        },
        {
            xtype: 'panel',
            x: 170,
            y: 10,
            frame: true,
            height: 150,
            width: 150,
            title: 'Framed Panel',
            tools: [
                {
                    xtype: 'tool'
                }
            ]
        },
        {
            xtype: 'panel',
            x: 330,
            y: 10,
            height: 150,
            width: 150,
            collapsed: true,
            collapsible: true,
            title: 'Collapsed Panel'
        },
        {
            xtype: 'panel',
            x: 330,
            y: 50,
            frame: true,
            height: 150,
            width: 150,
            collapsed: true,
            collapsible: true,
            title: 'Collapsed Framed'
        },
        {
            xtype: 'gridpanel',
            x: 10,
            y: 170,
            height: 150,
            width: 310,
            title: 'Grid Panel',
            store: 'peopleStore',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'gender',
                    text: 'Gender'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'age',
                    text: 'Age'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            x: 490,
            y: 10,
            height: 150,
            width: 200,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            x: 700,
            y: 10,
            frame: true,
            height: 150,
            width: 200,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            x: 910,
            y: 10,
            height: 150,
            width: 200,
            activeTab: 0,
            plain: true,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'checkboxfield',
            x: 10,
            y: 330,
            fieldLabel: 'Checkbox'
        },
        {
            xtype: 'checkboxfield',
            x: 150,
            y: 330,
            fieldLabel: 'Checkbox',
            checked: true
        },
        {
            xtype: 'combobox',
            x: 10,
            y: 360,
            fieldLabel: 'ComboBox',
            store: [
                'icecream',
                'chocolate',
                'popcorn'
            ]
        },
        {
            xtype: 'datefield',
            x: 10,
            y: 390,
            fieldLabel: 'Date Field'
        },
        {
            xtype: 'filefield',
            x: 10,
            y: 420,
            fieldLabel: 'File Upload'
        },
        {
            xtype: 'htmleditor',
            x: 10,
            y: 450,
            height: 150,
            width: 650,
            fieldLabel: 'HTML Editor'
        },
        {
            xtype: 'multislider',
            x: 10,
            y: 610,
            width: 400,
            fieldLabel: 'Multi Slider',
            values: [
                10,
                40
            ]
        },
        {
            xtype: 'numberfield',
            x: 10,
            y: 640,
            fieldLabel: 'Number Field'
        },
        {
            xtype: 'radiofield',
            x: 10,
            y: 670,
            fieldLabel: 'Radio'
        },
        {
            xtype: 'radiofield',
            x: 150,
            y: 670,
            fieldLabel: 'Radio',
            checked: true
        },
        {
            xtype: 'textareafield',
            x: 10,
            y: 700,
            fieldLabel: 'Text Area'
        },
        {
            xtype: 'textfield',
            x: 330,
            y: 700,
            fieldLabel: 'Text Field'
        },
        {
            xtype: 'timefield',
            x: 330,
            y: 670,
            fieldLabel: 'Time Field'
        },
        {
            xtype: 'triggerfield',
            x: 330,
            y: 640,
            fieldLabel: 'Trigger Field'
        },
        {
            xtype: 'menu',
            x: 680,
            y: 650,
            floating: false,
            width: 120,
            items: [
                {
                    xtype: 'menuitem',
                    text: 'Menu Item'
                },
                {
                    xtype: 'menuitem',
                    disabled: true,
                    text: 'Menu Item'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    xtype: 'menucheckitem',
                    text: 'Menu Item'
                },
                {
                    xtype: 'menucheckitem',
                    text: 'Menu Item',
                    checked: true
                }
            ]
        },
        {
            xtype: 'colormenu',
            x: 620,
            y: 170,
            floating: false,
            height: 150,
            width: 150
        },
        {
            xtype: 'datemenu',
            x: 780,
            y: 170,
            floating: false,
            width: 300
        },
        {
            xtype: 'button',
            x: 680,
            y: 450,
            text: 'Small Button'
        },
        {
            xtype: 'button',
            x: 680,
            y: 600,
            disabled: true,
            text: 'Disabled Button'
        },
        {
            xtype: 'button',
            x: 680,
            y: 490,
            scale: 'medium',
            text: 'Medium Button'
        },
        {
            xtype: 'button',
            x: 680,
            y: 540,
            scale: 'large',
            text: 'Large Button'
        },
        {
            xtype: 'progressbar',
            x: 570,
            y: 390,
            width: 200,
            value: 0.4
        },
        {
            xtype: 'toolbar',
            x: 10,
            y: 780,
            maxWidth: 850,
            items: [
                {
                    xtype: 'button',
                    text: 'Small Button'
                },
                {
                    xtype: 'button',
                    scale: 'medium',
                    text: 'Medium Button'
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    text: 'Large Button'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    disabled: true,
                    text: 'Disabled Button'
                },
                {
                    xtype: 'cycle',
                    showText: true,
                    menu: {
                        xtype: 'menu',
                        width: 120,
                        items: [
                            {
                                xtype: 'menucheckitem',
                                text: 'Menu Item'
                            },
                            {
                                xtype: 'menucheckitem',
                                text: 'Menu Item'
                            },
                            {
                                xtype: 'menucheckitem',
                                text: 'Menu Item'
                            }
                        ]
                    }
                },
                {
                    xtype: 'splitbutton',
                    text: 'Split Button'
                }
            ]
        },
        {
            xtype: 'treepanel',
            x: 370,
            y: 170,
            height: 200,
            width: 200,
            title: 'Tree Panel',
            store: 'MyTreeStore',
            viewConfig: {

            }
        },
        {
            xtype: 'cycle',
            x: 840,
            y: 450,
            showText: true,
            menu: {
                xtype: 'menu',
                width: 120,
                items: [
                    {
                        xtype: 'menucheckitem',
                        text: 'Menu Item'
                    },
                    {
                        xtype: 'menucheckitem',
                        text: 'Menu Item'
                    },
                    {
                        xtype: 'menucheckitem',
                        text: 'Menu Item'
                    }
                ]
            }
        },
        {
            xtype: 'splitbutton',
            x: 840,
            y: 490,
            text: 'Split Button'
        }
    ]

});