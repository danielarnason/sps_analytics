--SQL for Spatial Suite analytics modul

create schema sps_analytics;

create table sps_analytics.themes_interactions(
	session_id varchar(255),
	"event" varchar(255),
	"time" timestamp default now(),
	displayname varchar(255),
	themefile_name varchar(255),
	datasource_name varchar(255),
	site varchar(255),
	profile varchar(255)
)

create table sps_analytics.button_clicks(
	session_id varchar(255),
	"event" varchar(255),
	"time" timestamp default now(),
	displayname varchar(255),
	buttonname varchar(255),
	buttontype varchar(255),
	site varchar(255),
	profile varchar(255)
)

create table sps_analytics.search_results(
	session_id varchar,
	"time" timestamp default now(),
	service varchar,
	title varchar,
	wkt varchar,
	site varchar,
	profile varchar,
	text varchar
)

create table sps_analytics.session_info (
	session_id varchar,
	afdeling_ad varchar,
	center_ad varchar,
	site varchar,
	profile varchar,
	"time" timestamp default now()
)