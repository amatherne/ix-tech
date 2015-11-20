// var $       = require( 'jquery' );
// var dt      = require( 'datatables.net-dt' )( window, $ );
// var buttons = require( 'datatables.net-buttons-dt' )( window, $ );
// var editor = new $.fn.Editor( {
//   ajax:  "/data/objects.txt",
//   table: "#output",
//   idSrc: "location_name"
// } );

// $(document).ready(function() {
// 	editor = new $.fn.dataTable.Editor( {
// 		ajax: '/data/objects.txt',
// 		// deferRender: true,

// 		columns: [
//             { data: 'location_name' },
//             { data: 'point_name' },
// 			{ data: 'alarm_time' },
// 			{ data: 'object_name' },
//             { data: 'system_name' },
//             { data: 'room_id' },
//             { data: 'floor' },
//             { data: 'alarm_high' },
//             { data: 'alarm_low' },
//             { data: 'alert_high' },
//             { data: 'alert_low' },
//             { data: 'note_high' },
//             { data: 'note_low' },
//             { data: 'deadband' },
//             { data: 'location' },
//             { data: 'time_zone' },
//             { data: 'bus_hrs' },
//             { data: 'non_bus_hrs' },
//             { data: 'weekends_holidays' },
//             { data: 'escalate' },
//             { data: 'remarks' }
// 		],
// 		responsive: {
//             details: {
//                 type: 'column',
//                 target: -1
//             }
//         },
//         columnDefs: [ {
//             className: 'control',
//             orderable: true,
//             targets:   -1
//         } ],
//         select: true,
// 	    // buttons: [
// 	    //     { extend: 'create', editor: editor },
// 	    //     { extend: 'edit',   editor: editor },
// 	    //     { extend: 'remove', editor: editor }
// 	    // ]
// 	} );
// }
// );






var editor; // use a global for the submit and return data rendering in the outputs
 
$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "/data/objects.txt",
        table: "#output",
        idSrc: "location_name",

        fields: [ {
                label: "Location Name:",
                name: "location_name",
                defaultContent: "ARBORETUM POINT"
            }, {
                label: "Point:",
                name: "point_name"
            }, {
                label: "Alarm Time:",
                name: "alarm_time"
            }, {
                label: "Object:",
                name: "object_name"
            }, {
                label: "System:",
                name: "system_name"
            }, {
                label: "Room ID:",
                name: "room_id"
            }, {
                label: "Floor:",
                name: "floor"
            }, {
                label: "Alarm High:",
                name: "alarm_high"
            }, {
                label: "Alarm Low:",
                name: "alarm-low"
            }, {
                label: "Alert High:",
                name: "alert_high"
            }, {
                label: "Alert Low:",
                name: "alert_low"
            }, {
                label: "Note High:",
                name: "note_high"
            }, {
                label: "Note Low:",
                name: "note_low"
            }, {
                label: "Dead Band:",
                name: "deadband"
            }, {
                label: "Location:",
                name: "location"
            }, {
                label: "Time Zone:",
                name: "time_zone"
            }, {
                label: "Bus Hrs:",
                name: "bus_hrs"
            }, {
                label: "Non Bus Hrs:",
                name: "non_bus_hrs"
            }, {
                label: "Weekends / Holidays:",
                name: "weekends_holidays"
            }, {
                label: "Escalate:",
                name: "escalate"
            }, {
                label: "Remarks:",
                name: "remarks"
            }
        ]
    } );
 
    // Activate an inline edit on click of a table cell
    $('#output').on( 'click', 'tbody td:not(:first-child, :nth-child(3), :nth-child(2))', function (e) {
        editor.inline( this );
    } );
 
    $('#output').DataTable( {
        dom: "Bfrtip",
        ajax: "data/objects.txt",
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { 
                data: null,
                defaultContent: "",
                className: 'control',
                targets: 1
            },
            { 
                data: 'location_name',
                // type:  "readonly",
                // label: "Read only field",
                // name:  "counter",
                // def:   "1" 
            },
            { data: 'point_name' },
			{ data: 'alarm_time' },
			{ data: 'object_name' },
            { data: 'system_name' },
            { data: 'room_id' },
            { data: 'floor' },
            { data: 'alarm_high' },
            { data: 'alarm_low' },
            { data: 'alert_high' },
            { data: 'alert_low' },
            { data: 'note_high' },
            { data: 'note_low' },
            { data: 'deadband' },
            { data: 'location' },
            { data: 'time_zone' },
            { data: 'bus_hrs' },
            { data: 'non_bus_hrs' },
            { data: 'weekends_holidays' },
            { data: 'escalate' },
            { data: 'remarks' }, 
            
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ],
        responsive: {
            details: {
                type: 'column',
                target: 1
            }
        }, 
    } );
} );




    // $(document).ready(function() {

    //   $('#output').on('submit', function(e) {
    //     $.post('/data/template.txt', $(this).serialize(), function(data) {
    //       console.log(data);
    //     });
    //     e.preventDefault();
    //   });

    // });



