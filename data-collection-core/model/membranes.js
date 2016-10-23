var mongoose = require('mongoose')
var membraneSchema = new mongoose.Schema({
	//old_membrane_id: String,
	membrane_id: String,
	cast_date: Number
/*
	,
	formulation: String,
	polymer1_description: String,
	polymer2_description: String,
	polymer_wt_percent: Number,
	polymer_ration: String,
	additive1: String,
	additive1_wt_wrt_polymer: Number,
	additive2: String,
	additive2_wt_wrt_polymer: Number,
	caster_initials: String,
	cast_number: Number,
	duplicate_punch: String,
	instrument: String,
	isv_solvent_mix_time_hr: Number,
	additive_mix_time_hr: Number,
	dope_rest_time_hr: Number,
	viscosity_cp: Number,
	accuracy_cp: Number,
	torque_percent: Number,
	spindle: String,
	rpm: Number,
	shear_stress: Number,
	shear_rate: Number,
	dope_filtered: Boolean,
	solvent_system: String,
	solvent_ration: String,
	evap_time_sec: String,
	support: String,
	gate_height: String;
	coag_bath_change: Boolean,
	coag_bath_temp_C: Number,
	coag_bath_time_minutes: Number,
	anneal_temp_C: Number,
	anneal_time_min: Number,
	humidity_percent: Number,
	airflow: String,
	visual_eval_and_cast_notes: String,
	date_pgnum_booknum: String
	*/
});
mongoose.model('Membrane', membraneSchema);