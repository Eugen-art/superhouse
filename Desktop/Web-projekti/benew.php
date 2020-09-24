
<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, td, th {
            border: 1px solid black;
            padding: 5px;
        }

        th {text-align: left;}
    </style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root',' ','web_project');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax-demo");
$sql="SELECT * FROM web_project WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>state</th>
<th>population</th>

</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['state'] . "</td>";
    echo "<td>" . $row['population'] . "</td>";

    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>