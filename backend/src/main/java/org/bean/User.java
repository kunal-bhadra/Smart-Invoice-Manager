package org.bean;

public class User {
	private Integer id;
	private String business_code;
	private Integer cust_number;
	private String clear_date;
	private Integer buisness_year;
	private String doc_id;
	private String posting_date;
	private String document_create_date;
	private String due_in_date;
	private String invoice_currency;
	private String document_type;
	private String posting_id;
	private String total_open_amount;
	private String baseline_create_date;
	private String cust_payment_terms;
	private String invoice_id;
	private String aging_bucket;
	private String from_clear_date;
	private String to_clear_date;
	private String from_due_date;
	private String to_due_date;
	private String from_baseline_create_date;
	private String to_baseline_create_date;
	private String business_name;
	private Integer num_of_customers;
	private Integer sum_total_amount;

	public User(String business_code, Integer cust_number, String clear_date, Integer buisness_year, String doc_id,
			String posting_date, String document_create_date, String due_in_date, String invoice_currency,
			String document_type, String posting_id, String total_open_amount, String baseline_create_date,
			String cust_payment_terms, String invoice_id) {
		super();
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.buisness_year = buisness_year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = posting_id;
		this.total_open_amount = total_open_amount;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoice_id;
	}

	public User(Integer id, String business_code, Integer cust_number, String clear_date, Integer buisness_year,
			String doc_id, String posting_date, String document_create_date, String due_in_date,
			String invoice_currency, String document_type, String posting_id, String total_open_amount,
			String baseline_create_date, String cust_payment_terms, String invoice_id, String aging_bucket) {
		super();
		this.id = id;
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.buisness_year = buisness_year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = posting_id;
		this.total_open_amount = total_open_amount;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoice_id;
		this.aging_bucket = aging_bucket;
	}

	public User(Integer id, String invoice_currency, String cust_payment_terms) {
		super();
		this.id = id;
		this.invoice_currency = invoice_currency;
		this.cust_payment_terms = cust_payment_terms;
	}

	public User(String doc_id, String aging_bucket) {
		super();
		this.doc_id = doc_id;
		this.aging_bucket = aging_bucket;
	}

	public User(String business_name, Integer num_of_customers, Integer sum_total_amount) {
		super();
		this.business_name = business_name;
		this.num_of_customers = num_of_customers;
		this.sum_total_amount = sum_total_amount;
	}

	public User(String from_clear_date, String to_clear_date, String from_due_date, String to_due_date,
			String from_baseline_create_date, String to_baseline_create_date, String invoice_currency) {
		this.from_clear_date = from_clear_date;
		this.to_clear_date = to_clear_date;
		this.from_due_date = from_due_date;
		this.to_due_date = to_due_date;
		this.from_baseline_create_date = from_baseline_create_date;
		this.to_baseline_create_date = to_baseline_create_date;
		this.invoice_currency = invoice_currency;
	}

	public User(String invoice_currency, Integer num_of_customers) {
		this.invoice_currency = invoice_currency;
		this.num_of_customers = num_of_customers;
	}

	public User(String from_clear_date, String to_clear_date, String from_due_date, String to_due_date,
			String from_baseline_create_date, String to_baseline_create_date) {
		this.from_clear_date = from_clear_date;
		this.to_clear_date = to_clear_date;
		this.from_due_date = from_due_date;
		this.to_due_date = to_due_date;
		this.from_baseline_create_date = from_baseline_create_date;
		this.to_baseline_create_date = to_baseline_create_date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBusinessCode() {
		return business_code;
	}

	public void setBusinessCode(String business_code) {
		this.business_code = business_code;
	}

	public Integer getCustNumber() {
		return cust_number;
	}

	public void setCustNumber(Integer cust_number) {
		this.cust_number = cust_number;
	}

	public String getClearDate() {
		return clear_date;
	}

	public void setClearDate(String clear_date) {
		this.clear_date = clear_date;
	}

	public Integer getBusinessYear() {
		return buisness_year;
	}

	public void setBusinessYear(Integer buisness_year) {
		this.buisness_year = buisness_year;
	}

	public String getDocId() {
		return doc_id;
	}

	public void setDocId(String doc_id) {
		this.doc_id = doc_id;
	}

	public String getPostingDate() {
		return posting_date;
	}

	public void setPostingDate(String posting_date) {
		this.posting_date = posting_date;
	}

	public String getDocumentCreateDate() {
		return document_create_date;
	}

	public void setDocumentCreateDate(String document_create_date) {
		this.document_create_date = document_create_date;
	}

	public String getDueInDate() {
		return due_in_date;
	}

	public void setDueInDate(String due_in_date) {
		this.due_in_date = due_in_date;
	}

	public String getInvoiceCurrency() {
		return invoice_currency;
	}

	public void setInvoiceCurrency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}

	public String getDocumentType() {
		return document_type;
	}

	public void setDocumentType(String document_type) {
		this.document_type = document_type;
	}

	public String getPostingId() {
		return posting_id;
	}

	public void setPostingId(String posting_id) {
		this.posting_id = posting_id;
	}

	public String getTotalOpenAmount() {
		return total_open_amount;
	}

	public void setTotalOpenAmount(String total_open_amount) {
		this.total_open_amount = total_open_amount;
	}

	public String getBaselineCreateDate() {
		return baseline_create_date;
	}

	public void setBaselineCreateDate(String baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}

	public String getCustPaymentTerms() {
		return cust_payment_terms;
	}

	public void setCustPaymentTerms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}

	public String getInvoiceId() {
		return invoice_id;
	}

	public void setInvoiceId(String invoice_id) {
		this.invoice_id = invoice_id;
	}

	public String getAging_bucket() {
		return aging_bucket;
	}

	public void setAging_bucket(String aging_bucket) {
		this.aging_bucket = aging_bucket;
	}

	public String getFrom_clear_date() {
		return from_clear_date;
	}

	public void setFrom_clear_date(String from_clear_date) {
		this.from_clear_date = from_clear_date;
	}

	public String getTo_clear_date() {
		return to_clear_date;
	}

	public void setTo_clear_date(String to_clear_date) {
		this.to_clear_date = to_clear_date;
	}

	public String getFrom_due_date() {
		return from_due_date;
	}

	public void setFrom_due_date(String from_due_date) {
		this.from_due_date = from_due_date;
	}

	public String getTo_due_date() {
		return to_due_date;
	}

	public void setTo_due_date(String to_due_date) {
		this.to_due_date = to_due_date;
	}

	public String getFrom_baseline_create_date() {
		return from_baseline_create_date;
	}

	public void setFrom_baseline_create_date(String from_baseline_create_date) {
		this.from_baseline_create_date = from_baseline_create_date;
	}

	public String getTo_baseline_create_date() {
		return to_baseline_create_date;
	}

	public void setTo_baseline_create_date(String to_baseline_create_date) {
		this.to_baseline_create_date = to_baseline_create_date;
	}

	public String getBusiness_name() {
		return business_name;
	}

	public void setBusiness_name(String business_name) {
		this.business_name = business_name;
	}

	public Integer getNum_of_customers() {
		return num_of_customers;
	}

	public void setNum_of_customers(Integer num_of_customers) {
		this.num_of_customers = num_of_customers;
	}

	public Integer getSum_total_amount() {
		return sum_total_amount;
	}

	public void setSum_total_amount(Integer sum_total_amount) {
		this.sum_total_amount = sum_total_amount;
	}
}
