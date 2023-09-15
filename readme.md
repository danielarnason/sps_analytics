# INSTALLATION

1. Kør SQL (./sql/table_init.sql) for at oprette tabeller i Postgres

2. Tilføj parametre til relevante cbinfo filer
    ```xml
    <param name="module.sps_analytics.db.connect">SERVER:PORTNR/DB_NAVN</param>
    <param name="module.sps_analytics.db.user">XXX</param>
    <param name="module.sps_analytics.db.pwd" hidden="true">YYY</param>
    ```

3. Tilføj modul i modulfil
    ```xml
    <module name="sps_analytics" dir="custom/sps_analytics" permissionlevel="public" />
    ```

4. Tilføj tool i profil
    ```xml
    <tool module="sps_analytics" name="sps_analytics"/>
    ```