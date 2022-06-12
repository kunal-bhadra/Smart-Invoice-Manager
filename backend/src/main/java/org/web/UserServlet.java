package org.web;

import jakarta.servlet.http.HttpServlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.sql.SQLException;
import com.google.gson.JsonObject;

import org.bean.User;
import org.dao.UserDao;

import com.google.gson.Gson;

@WebServlet("/")
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userDao;

	public void init() throws ServletException {
		userDao = new UserDao();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String action = request.getServletPath();

		switch (action) {

		case "/insert":
			try {
				insertUser(request, response);
			} catch (SQLException | IOException e) {
				e.printStackTrace();
			}
			break;

		case "/delete":
			try {
				deleteUser(request, response);
			} catch (SQLException | IOException e) {
				e.printStackTrace();
			}
			break;

		case "/edit":
			try {
				editUser(request, response);
			} catch (SQLException | IOException e) {
				e.printStackTrace();
			}
			break;

		case "/editpredict":
			try {
				editPredictUser(request, response);
			} catch (SQLException | IOException e1) {
				e1.printStackTrace();
			}

		case "/bardata":
			try {
				getSelectBarData(request, response);
			} catch (SQLException | IOException e1) {
				e1.printStackTrace();
			}

		case "/piedata":
			try {
				getSelectPieData(request, response);
			} catch (SQLException | IOException e1) {
				e1.printStackTrace();
			}

		default:
			try {
				listUser(request, response);
			} catch (SQLException | IOException e) {
				e.printStackTrace();
			}
			break;

		}
	}

	// insert new User
	private void insertUser(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		BufferedReader reader = request.getReader();
		StringBuffer jb = new StringBuffer();
		String line = null;
		try {
			while ((line = reader.readLine()) != null)
				jb.append(line);
		} catch (Exception e) {
		}

		Gson gson = new Gson();
		JsonObject request_json = gson.fromJson(jb.toString(), JsonObject.class);

//		DEBUGGING COMMANDS
//		System.out.println("Type: "+request_json.get("cust_number").toString().replace("\"", "").getClass().getName()+"\nValue:"+request_json.get("cust_number"));
//		System.out.println("Value: "+Integer.parseInt(request_json.get("cust_number").toString().replace("\"", "")));

//		System.out.println("Method "+request.getMethod());
//		System.out.println("Content-Type "+request.getHeader("Content-Type"));
//		System.out.println("ContentLength "+request.getContentLength());
//		
//		if ("POST".equalsIgnoreCase(request.getMethod())) 
//		{
//			System.out.println(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())));
//		}

		String business_code = request_json.get("business_code").toString().replace("\"", "");
		Integer cust_number = Integer.parseInt(request_json.get("cust_number").toString().replace("\"", ""));
		String clear_date = request_json.get("clear_date").toString().replace("\"", "");
		Integer buisness_year = Integer.parseInt(request_json.get("buisness_year").toString().replace("\"", ""));
		String doc_id = request_json.get("doc_id").toString().replace("\"", "");
		String posting_date = request_json.get("posting_date").toString().replace("\"", "");
		String document_create_date = request_json.get("document_create_date").toString().replace("\"", "");
		String due_in_date = request_json.get("due_in_date").toString().replace("\"", "");
		String invoice_currency = request_json.get("invoice_currency").toString().replace("\"", "");
		String document_type = request_json.get("document_type").toString().replace("\"", "");
		String posting_id = request_json.get("posting_id").toString().replace("\"", "");
		String total_open_amount = request_json.get("total_open_amount").toString().replace("\"", "");
		String baseline_create_date = request_json.get("baseline_create_date").toString().replace("\"", "");
		String cust_payment_terms = request_json.get("cust_payment_terms").toString().replace("\"", "");
		String invoice_id = request_json.get("invoice_id").toString().replace("\"", "");

		User newUser = new User(business_code, cust_number, clear_date, buisness_year, doc_id, posting_date,
				document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount,
				baseline_create_date, cust_payment_terms, invoice_id);
		userDao.insertUser(newUser);
		response.sendRedirect("list");

	}

	// delete user
	private void deleteUser(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		BufferedReader reader = request.getReader();
		StringBuffer jb = new StringBuffer();
		String line = null;
		try {
			while ((line = reader.readLine()) != null)
				jb.append(line);
		} catch (Exception e) {
		}

		Gson gson = new Gson();
		JsonObject request_json = gson.fromJson(jb.toString(), JsonObject.class);

		int id = Integer.parseInt(request_json.get("id").toString().replace("\"", ""));
		try {
			userDao.deleteUser(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		response.sendRedirect("list");
	}

	// edit
	private void editUser(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		BufferedReader reader = request.getReader();
		StringBuffer jb = new StringBuffer();
		String line = null;
		try {
			while ((line = reader.readLine()) != null)
				jb.append(line);
		} catch (Exception e) {
		}

		Gson gson = new Gson();
		JsonObject request_json = gson.fromJson(jb.toString(), JsonObject.class);

		int id = Integer.parseInt(request_json.get("id").toString().replace("\"", ""));
		String invoice_currency = request_json.get("invoice_currency").toString().replace("\"", "");
		String cust_payment_terms = request_json.get("cust_payment_terms").toString().replace("\"", "");

		User user = new User(id, invoice_currency, cust_payment_terms);
		userDao.updateUser(user);
		response.sendRedirect("list");
	}

	// bar data
	private void getSelectBarData(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, ServletException, IOException {
		try {
			BufferedReader reader = request.getReader();
			StringBuffer jb = new StringBuffer();
			String line = null;
			try {
				while ((line = reader.readLine()) != null)
					jb.append(line);
			} catch (Exception e) {
			}

			Gson gson = new Gson();
			JsonObject request_json = gson.fromJson(jb.toString(), JsonObject.class);

			String from_clear_date = request_json.get("from_clear_date").toString().replace("\"", "");
			String to_clear_date = request_json.get("to_clear_date").toString().replace("\"", "");
			String from_due_date = request_json.get("from_due_date").toString().replace("\"", "");
			String to_due_date = request_json.get("to_due_date").toString().replace("\"", "");
			String from_baseline_create_date = request_json.get("from_baseline_create_date").toString().replace("\"",
					"");
			String to_baseline_create_date = request_json.get("to_baseline_create_date").toString().replace("\"", "");
			String invoice_currency = request_json.get("invoice_currency").toString().replace("\"", "");

			User user = new User(from_clear_date, to_clear_date, from_due_date, to_due_date, from_baseline_create_date,
					to_baseline_create_date, invoice_currency);

			String strBarData = userDao.selectBarData(user);
			System.out.println("String in servlet:" + strBarData);
			request.setAttribute("listBarData", strBarData);
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(strBarData);
			printWriter.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// pie data
	private void getSelectPieData(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, ServletException, IOException {
		try {
			BufferedReader reader = request.getReader();
			StringBuffer jb = new StringBuffer();
			String line = null;
			try {
				while ((line = reader.readLine()) != null)
					jb.append(line);
			} catch (Exception e) {
			}

			Gson gson = new Gson();
			JsonObject request_json = gson.fromJson(jb.toString(), JsonObject.class);

			String from_clear_date = request_json.get("from_clear_date").toString().replace("\"", "");
			String to_clear_date = request_json.get("to_clear_date").toString().replace("\"", "");
			String from_due_date = request_json.get("from_due_date").toString().replace("\"", "");
			String to_due_date = request_json.get("to_due_date").toString().replace("\"", "");
			String from_baseline_create_date = request_json.get("from_baseline_create_date").toString().replace("\"",
					"");
			String to_baseline_create_date = request_json.get("to_baseline_create_date").toString().replace("\"", "");

			User user = new User(from_clear_date, to_clear_date, from_due_date, to_due_date, from_baseline_create_date,
					to_baseline_create_date);

			String strPieData = userDao.selectPieData(user);
			System.out.println("String in servlet:" + strPieData);
			request.setAttribute("listPieData", strPieData);
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(strPieData);
			printWriter.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// edit/add predict
	private void editPredictUser(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, IOException {
		BufferedReader reader = request.getReader();
		StringBuffer jb = new StringBuffer();
		String line = null;
		try {
			while ((line = reader.readLine()) != null)
				jb.append(line);
		} catch (Exception e) {
		}

		Gson gson = new Gson();
		JsonObject request_json = gson.fromJson(jb.toString(), JsonObject.class);

		String doc_id = request_json.get("doc_id").toString().replace("\"", "");
		String aging_bucket = request_json.get("aging_bucket").toString().replace("\"", "");

		User user = new User(doc_id, aging_bucket);
		userDao.editPredictUser(user);
		response.sendRedirect("list");
	}

	// default
	private void listUser(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, ServletException, IOException {
		try {
			String strUser = userDao.selectAllUsers();
			request.setAttribute("listUser", strUser);
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			printWriter.write(strUser);
			printWriter.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
