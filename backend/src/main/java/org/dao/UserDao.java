package org.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.bean.User;

import com.google.gson.Gson;

public class UserDao {

	private String jdbcURL = "jdbc:mysql://localhost:3306/grey_goose";
	private String jdbcUsername = "root";
	private String jdbcPassword = "mysqlpassword";
	private String jdbcDriver = "com.mysql.cj.jdbc.Driver";

	public static final String INSERT_USERS_SQL = "INSERT INTO winter_internship"
			+ "  (business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) VALUES "
			+ " (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
	public static final String SELECT_ALL_USERS_SQL = "SELECT id, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id, aging_bucket from winter_internship;";
	public static final String DELETE_USER_SQL = "DELETE FROM winter_internship WHERE id = ?;";
	public static final String EDIT_USER_SQL = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE id = ?;";
	public static final String EDIT_PREDICT_USER_SQL = "UPDATE winter_internship SET aging_bucket = ? WHERE doc_id = ?;";
	public static final String GET_BAR_DATA = "SELECT b.business_name AS 'business_name', \r\n"
			+ "	COUNT(w.cust_number) AS 'num_of_customers', \r\n"
			+ "	CEILING(SUM(total_open_amount)/1000) AS 'sum_total_amount'\r\n" + "FROM winter_internship w\r\n"
			+ "	LEFT JOIN business b\r\n" + "	ON w.business_code = b.business_code\r\n"
			+ "WHERE clear_date BETWEEN ? AND ?\r\n" + "	AND due_in_date BETWEEN ? AND ?\r\n"
			+ "	AND baseline_create_date BETWEEN ? AND ?\r\n" + "	AND invoice_currency = ?\r\n"
			+ "GROUP BY w.business_code;";
	public static final String GET_PIE_DATA = "SELECT invoice_currency, \r\n"
			+ "	COUNT(cust_number) AS 'num_of_customers'\r\n" + "FROM winter_internship\r\n"
			+ "WHERE clear_date BETWEEN ? AND ?\r\n" + "	AND due_in_date BETWEEN ? AND ?\r\n"
			+ "	AND baseline_create_date BETWEEN ? AND ?\r\n" + "GROUP BY invoice_currency;";

	public UserDao() {
	}

	protected Connection getConnection() {
		Connection connection = null;
		try {
			Class.forName(jdbcDriver);
			connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return connection;
	}

	// insert
	public void insertUser(User user) throws SQLException {
		System.out.println(INSERT_USERS_SQL);
		try (Connection connection = getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USERS_SQL)) {
			preparedStatement.setString(1, user.getBusinessCode());
			preparedStatement.setInt(2, user.getCustNumber());
			preparedStatement.setString(3, user.getClearDate());
			preparedStatement.setInt(4, user.getBusinessYear());
			preparedStatement.setString(5, user.getDocId());
			preparedStatement.setString(6, user.getPostingDate());
			preparedStatement.setString(7, user.getDocumentCreateDate());
			preparedStatement.setString(8, user.getDueInDate());
			preparedStatement.setString(9, user.getInvoiceCurrency());
			preparedStatement.setString(10, user.getDocumentType());
			preparedStatement.setString(11, user.getPostingId());
			preparedStatement.setString(12, user.getTotalOpenAmount());
			preparedStatement.setString(13, user.getBaselineCreateDate());
			preparedStatement.setString(14, user.getCustPaymentTerms());
			preparedStatement.setString(15, user.getInvoiceId());
			System.out.println(preparedStatement);
			Integer rs = preparedStatement.executeUpdate();
			System.out.println("Executed: " + rs);

		} catch (SQLException e) {
			printSQLException(e);
		}
	}

	// select all
	public String selectAllUsers() {
		List<User> users = new ArrayList<User>();
		String tablejson = "";
		try (Connection connection = getConnection();
				PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_USERS_SQL);) {
			System.out.println(preparedStatement);
			ResultSet rs = preparedStatement.executeQuery();

			while (rs.next()) {
				Integer id = rs.getInt(1);
				String business_code = rs.getString(2);
				Integer cust_number = rs.getInt(3);
				String clear_date = rs.getString(4);
				Integer buisness_year = rs.getInt(5);
				String doc_id = rs.getString(6);
				String posting_date = rs.getString(7);
				String document_create_date = rs.getString(8);
				String due_in_date = rs.getString(9);
				String invoice_currency = rs.getString(10);
				String document_type = rs.getString(11);
				String posting_id = rs.getString(12);
				String total_open_amount = rs.getString(13);
				String baseline_create_date = rs.getString(14);
				String cust_payment_terms = rs.getString(15);
				String invoice_id = rs.getString(16);
				String aging_bucket = rs.getString(17);
				users.add(new User(id, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date,
						document_create_date, due_in_date, invoice_currency, document_type, posting_id,
						total_open_amount, baseline_create_date, cust_payment_terms, invoice_id, aging_bucket));
			}

			Gson gson = new Gson();
			tablejson = gson.toJson(users);
		} catch (SQLException e) {
			printSQLException(e);
		}
		return tablejson;
	}

	// get bar data
	public String selectBarData(User user) {
		List<User> bar_data = new ArrayList<User>();
		String barjson = "";
		try (Connection connection = getConnection();
				PreparedStatement statement = connection.prepareStatement(GET_BAR_DATA);) {

			statement.setString(1, user.getFrom_clear_date());
			statement.setString(2, user.getTo_clear_date());
			statement.setString(3, user.getFrom_due_date());
			statement.setString(4, user.getTo_due_date());
			statement.setString(5, user.getFrom_baseline_create_date());
			statement.setString(6, user.getTo_baseline_create_date());
			statement.setString(7, user.getInvoiceCurrency());

			ResultSet rs = statement.executeQuery();
			System.out.println("Bar Data Query: " + statement);

			if (!rs.isBeforeFirst()) {
				System.out.println("No data in Result Set");
			} else {
				System.out.println("Data present in Result Set");
			}

			while (rs.next()) {
				String business_name = rs.getString(1);
				Integer num_of_customers = rs.getInt(2);
				Integer sum_total_amount = rs.getInt(3);

				bar_data.add(new User(business_name, num_of_customers, sum_total_amount));
			}

			Gson gson = new Gson();
			barjson = gson.toJson(bar_data);
			System.out.println("Response string: " + barjson);
		} catch (SQLException e) {
			printSQLException(e);
		}
		return barjson;
	}

	// get pie data
	public String selectPieData(User user) {
		List<User> pie_data = new ArrayList<User>();
		String piejson = "";
		try (Connection connection = getConnection();
				PreparedStatement statement = connection.prepareStatement(GET_PIE_DATA);) {

			statement.setString(1, user.getFrom_clear_date());
			statement.setString(2, user.getTo_clear_date());
			statement.setString(3, user.getFrom_due_date());
			statement.setString(4, user.getTo_due_date());
			statement.setString(5, user.getFrom_baseline_create_date());
			statement.setString(6, user.getTo_baseline_create_date());

			ResultSet rs = statement.executeQuery();
			System.out.println("Pie Data Query: " + statement);

			if (!rs.isBeforeFirst()) {
				System.out.println("No data in Result Set");
			} else {
				System.out.println("Data present in Result Set");
			}

			while (rs.next()) {
				String invoice_currency = rs.getString(1);
				Integer num_of_customers = rs.getInt(2);

				pie_data.add(new User(invoice_currency, num_of_customers));
			}

			Gson gson = new Gson();
			piejson = gson.toJson(pie_data);
			System.out.println("Response string: " + piejson);
		} catch (SQLException e) {
			printSQLException(e);
		}
		return piejson;
	}

	// edit
	public boolean updateUser(User user) throws SQLException {
		boolean rowUpdated;
		try (Connection connection = getConnection();
				PreparedStatement statement = connection.prepareStatement(EDIT_USER_SQL);) {

			statement.setString(1, user.getInvoiceCurrency());
			statement.setString(2, user.getCustPaymentTerms());
			statement.setInt(3, user.getId());

			rowUpdated = statement.executeUpdate() > 0;
			System.out.println("Edit User Query: " + statement);
			System.out.println("Query Executed?: " + rowUpdated);
		}
		return rowUpdated;
	}

	// edit/add predict
	public boolean editPredictUser(User user) throws SQLException {
		boolean rowUpdated;
		try (Connection connection = getConnection();
				PreparedStatement statement = connection.prepareStatement(EDIT_PREDICT_USER_SQL);) {

			statement.setString(1, user.getAging_bucket());
			statement.setString(2, user.getDocId());

			rowUpdated = statement.executeUpdate() > 0;
			System.out.println("Predict User Query: " + statement);
			System.out.println("Query Executed?: " + rowUpdated);
		}
		return rowUpdated;
	}

	// delete
	public boolean deleteUser(int id) throws SQLException {
		boolean rowDeleted;
		try (Connection connection = getConnection();
				PreparedStatement statement = connection.prepareStatement(DELETE_USER_SQL);) {
			statement.setInt(1, id);
			rowDeleted = statement.executeUpdate() > 0;

			System.out.println("Delete User Query: " + statement);
			System.out.println("Query Executed?: " + rowDeleted);
		}
		return rowDeleted;
	}

	private void printSQLException(SQLException ex) {
		for (Throwable e : ex) {
			if (e instanceof SQLException) {
				e.printStackTrace(System.err);
				System.err.println("SQLState: " + ((SQLException) e).getSQLState());
				System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
				System.err.println("Message: " + e.getMessage());
				Throwable t = ex.getCause();
				while (t != null) {
					System.out.println("Cause: " + t);
					t = t.getCause();
				}
			}
		}
	}

}
