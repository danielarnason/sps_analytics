--SQL for Spatial Suite analytics modul

create schema sps_analytics;

create table sps_analytics.themes_interactions(
	session_id varchar(255),
	"event" varchar(255),
	"time" timestamp default now(),
	displayname varchar(255),
	themefile_name varchar(255),
	datasource_name varchar(255)
)